import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/layout'
import Image from 'next/image'
import styles from '../styles/Main.module.scss'
import { Code } from "@chakra-ui/react"


const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <main className={`main`}>
        about
        <br />
        https://twilight-pirate-7d9.notion.site/76fdc572356f485abb8af170bced96f6?v=e4eeecb1321c47539f59871b0e7a5966<br />
        <Code>npm i -S scrollreveal</Code>
        <Code>npm i -S -D @types/scrollreveal</Code>
      </main>
      <style jsx>{`
        .main {
          min-height: 150vh;
        } 
      `}</style>
    </Layout>
  )
}

export default About