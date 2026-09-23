param(
  [switch]$Watch,
  [ValidateRange(1, 1440)]
  [int]$IntervalMinutes = 60
)

$ErrorActionPreference = 'Stop'

$repoRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '../../../..')).Path
$envPath = Join-Path $repoRoot '.env.local'

if (-not (Test-Path -LiteralPath $envPath)) {
  throw 'Le fichier .env.local est introuvable.'
}

$settings = Get-Content -LiteralPath $envPath

function Get-BssSetting([string]$Name) {
  $prefix = "$Name="
  $line = $settings |
    Where-Object { $_.StartsWith($prefix, [StringComparison]::Ordinal) } |
    Select-Object -Last 1

  if ($null -eq $line) {
    return $null
  }

  return $line.Substring($prefix.Length).Trim()
}

$secret = Get-BssSetting 'BSS_SOUTENIR_DISCORD_SYNC_SECRET'

if ([string]::IsNullOrWhiteSpace($secret)) {
  throw 'BSS_SOUTENIR_DISCORD_SYNC_SECRET est absent de .env.local.'
}

$appUrl = Get-BssSetting 'BSS_SOUTENIR_APP_URL'

if ([string]::IsNullOrWhiteSpace($appUrl)) {
  $appUrl = 'http://127.0.0.1:3017'
}

$origin = [uri]$appUrl

if ($origin.Scheme -ne 'http' -or $origin.Host -notin @('127.0.0.1', 'localhost')) {
  throw 'La synchronisation locale requiert une URL http://127.0.0.1 ou http://localhost.'
}

$endpoint = $origin.GetLeftPart([System.UriPartial]::Authority).TrimEnd('/') +
  '/api/soutenir/discord/reconcile'

do {
  try {
    $result = Invoke-RestMethod -Uri $endpoint -Method Post -Headers @{
      Authorization = "Bearer $secret"
    }
    $counts = $result.counts

    Write-Output ("{0:u} Discord : {1} actif(s), {2} retiré(s), {3} hors serveur, {4} erreur(s)." -f
      (Get-Date), $counts.granted, $counts.removed, $counts.not_member, $counts.error)

    if ($counts.error -gt 0 -or $counts.configuration -gt 0) {
      throw 'La synchronisation Discord a signalé un échec.'
    }
  } catch {
    if (-not $Watch) {
      throw
    }

    Write-Warning "Synchronisation Discord échouée : $($_.Exception.Message)"
  }

  if ($Watch) {
    Start-Sleep -Seconds ($IntervalMinutes * 60)
  }
} while ($Watch)
