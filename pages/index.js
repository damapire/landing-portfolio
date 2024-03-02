import Services from '@/components/Home/Services'
import Experiencies from '@/components/Home/Experiencies'
import Hero from '@/components/Home/Hero'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Projects from '@/components/Home/Projects'
import WhatsappButton from '@/components/Utilities/WhatsappButton'

export default function Home () {
  return (
    <Layout title='Home' description={'Descripción home'}>
      <main>
        <Hero />
      </main>
        <Services />
        <Experiencies />
        <Projects />
        <WhatsappButton />
     
    </Layout>
  )
}