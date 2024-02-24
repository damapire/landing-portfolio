import Services from '@/components/Home/Services'
import Experiencies from '@/components/Home/Experiencies'
import Hero from '@/components/Home/Hero'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function Home () {
  return (
    <Layout title='Home' description={'Descripción home'}>
      <main>
        <Hero />
        <Services />
        <Experiencies />
      </main>
    </Layout>
  )
}