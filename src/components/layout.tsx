import { ReactNode } from "react";
import Styles from './layout.module.scss';
import Link from 'next/link'
import HeaderBar from '@/components/common/headerBar'
import Carousel from '@/components/ui/carousel'
import Footer from '@/components/common/footer'
import { ChatIcon } from '@chakra-ui/icons'
import { Text } from "@chakra-ui/react"
import Head from 'next/head'
import {NextPage} from 'next'


interface Props {
  children?: ReactNode;
  home?: ReactNode;
}


const Layout:NextPage<Props> = ({ children, home }: Props) => {
  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&family=Yuji+Syuku&display=swap" rel="stylesheet" />
        <title>YoYos</title>
      </Head>
      <HeaderBar />
      <div>
        {home ? (
          <>
            <Carousel />
          </>
        ) : (
          <>
          </>
        )}
        <main>{children}</main>
        {!home && (
          <>
            <div className={Styles.message}>
              <Link href={`/`}>
                <a>
                  <ChatIcon />
                  <Text fontSize="xs">問い合わせ</Text>
                </a>
              </Link>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  )
}
export default Layout;