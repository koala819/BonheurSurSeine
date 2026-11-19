import type { Metadata } from 'next'

import PlanDuSiteClient from '@/src/components/atoms/XPlan_du_site'

export const metadata: Metadata = {
  title: 'Rechercher dans le site Bonheur Sur Seine',
  description:
    'Plan du Site : Pour tout voir en un coup d’oeil. Accédez aux pages de Bonheur sur Seine : apprendre la gyroroue, choisir un modèle, consulter les tests et accéder aux guides pratiques. ',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/plan-du-site`,
  },
}
export default function Page() {
  return <PlanDuSiteClient />
}
