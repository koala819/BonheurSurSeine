import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  if (url.pathname.startsWith('/OLDsite')) {
    url.pathname = '/'
    return NextResponse.redirect(url)
  }
}
