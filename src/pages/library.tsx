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
      <Grid
        h="200px"
        templateRows="repeat(auto, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1} bg="tomato">
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
        </GridItem>
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem colSpan={1} bg="tomato" />
        <GridItem colSpan={1} bg="tomato" />
        <GridItem colSpan={1} bg="tomato" />
      </Grid>
    </Layout>
  )
}

export default Library;