import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
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
        https://fwywd.com/tech/next-chakra-ui<br />
        https://chakra-ui.com/<br />
        https://twilight-pirate-7d9.notion.site/76fdc572356f485abb8af170bced96f6?v=e4eeecb1321c47539f59871b0e7a5966<br />
        <Code>npm i -S scrollreveal</Code>
        <Code>npm i -S -D @types/scrollreveal</Code>
        https://qiita.com/uwattotaitai/items/5957eda0c63634fbaa56<br />
        https://fo-jineer.com/react-typesctpt-property-is-missing-in-type/<br />
        https://teratail.com/questions/367013<br />
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