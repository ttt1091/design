import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/Main.module.scss'


const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <main>about</main>
      <footer>f</footer>
    </Layout>
  )
}

export default About