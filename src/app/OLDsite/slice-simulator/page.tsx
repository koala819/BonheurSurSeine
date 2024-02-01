'use client'

import { SliceZone } from '@prismicio/react'

import { components } from '../../../slices'

import { SliceSimulator } from '@slicemachine/adapter-next/simulator'

export default function SliceSimulatorPage() {
  return (
    <SliceSimulator
      sliceZone={(props) => <SliceZone {...props} components={components} />}
    />
  )
}
