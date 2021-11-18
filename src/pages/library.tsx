import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/layout'
import Image from 'next/image'
import styles from '../styles/Main.module.scss'
import { Code } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"


const Library: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Library</title>
      </Head>
      <div>
        <div>aaa</div>
        <div>bbb</div>
        <div>ccc</div>
        <div>ddd</div>
      </div>
    </Layout>
  )
}

export default Library;