import { Container } from 'react-bootstrap'
import { createRef } from 'react'
import dynamic from 'next/dynamic'

import { Hero, VisitorDealer, Advantages } from '@/components/LandingPage'
import Header from '@/components/Layout/Header'
import LazyLoad from 'react-lazyload'

const Faq = dynamic(() => import('@/components/LandingPage').then(res => res.Faq))
const Footer = dynamic(() => import('@/components/Layout/Footer').then(res => res.default))

export default function Home() {
  const refVisitorDealer = createRef<HTMLDivElement>()

  return (
    <>
      <Header navlink="/" />
      <main>
        <Container>
          <Hero refVisitorDealer={refVisitorDealer} />
          <div className="my-3" />
        </Container>
        <LazyLoad once height={100}>
          <Advantages />
        </LazyLoad>
        <VisitorDealer refVisitorDealer={refVisitorDealer} />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
