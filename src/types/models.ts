import {
  DateField,
  EmptyLinkField,
  ImageField,
  KeyTextField,
  NumberField,
} from '@prismicio/client'

export interface BonheurScoreProps {
  data: {
    commentaire: KeyTextField
    constructeur: string | null
    date: DateField
    en_ville: NumberField
    equipement: NumberField
    lien_video_youtube: any
    modele: KeyTextField
    note: NumberField
    photo: ImageField
    points: NumberField
    praticite: NumberField
    profil: string | null
    sur_route: NumberField
    suspension: boolean
  }
}

export interface Partner {
  name: string
  logo: string
  logo_mode_sombre?: string
  alt: string
  website: string
  description: string
  code: string
  montant: string
}
