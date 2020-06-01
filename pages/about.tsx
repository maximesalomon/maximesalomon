import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

// ABOUT PAGE
const AboutPage: React.FunctionComponent = () => (
  <Layout title="About">
    <h1>About me</h1>
    <p>Maxime Salomon</p>
    <p>
      <Link href="/">
        <a>Homepage</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
