import Clients from '@/app/components/about/Clients'
import Info from '@/app/components/about/Info'
import Mission from '@/app/components/about/Mission'
import Support from '@/app/components/about/Support'
import Vision from '@/app/components/about/Vision'
import React from 'react'

export default function page() {
  return (
    <div>
      <Mission/>
      <Vision/>
      <Info/>
      <Support/>
    </div>
  )
}
