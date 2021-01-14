import { Container } from 'react-bootstrap'
import { createRef } from 'react'
import dynamic from 'next/dynamic'

import { Hero, VisitorDealer, Advantages } from '@/components/landingPage'
import Layout from '@/components/layout/LandingPage'
import LazyLoad from 'react-lazyload'

const Faq = dynamic(() => import('@/components/landingPage').then(res => res.Faq))

export default function Home() {
  const refVisitorDealer = createRef<HTMLDivElement>()

  return (
    <Layout>
      <Container>
        <Hero refVisitorDealer={refVisitorDealer} />
        <div className="my-3" />
      </Container>
      <LazyLoad once height={100}>
        <Advantages />
      </LazyLoad>
      <VisitorDealer refVisitorDealer={refVisitorDealer} />
      <Faq />
    </Layout>
  )
}
