import Services from '@/components/Home/Services'
import Hero from '@/components/Home/Hero'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function Home () {
  return (
    <Layout title='Home' description={'Descripción home'}>
      <main>
        <Hero />
        <Services />
      </main>
    </Layout>
  )
}