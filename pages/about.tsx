import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

// ABOUT PAGE
const AboutPage: React.FunctionComponent = () => (
  <Layout title="About">
    <h1>About</h1>
    <p>Maxime Salomon</p>
    <p>Founder, Croissant</p>
    <p>27</p>
    <p>Aix-en-Provence, France</p>
    <p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
