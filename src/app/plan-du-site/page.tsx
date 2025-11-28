import type { Metadata } from 'next'

import PlanDuSiteClient from '@/src/components/atoms/Plan_du_site'

export const metadata: Metadata = {
  title: 'BonheurSurSeine.com',
  description: 'BonheurSurSeine.com : Tout le site.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/plan-du-site`,
  },
}
export default function Page() {
  return <PlanDuSiteClient />
}
