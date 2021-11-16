import { ReactNode } from "react";
import styles from './layout.module.scss';
import Link from 'next/link'
import utility from '../styles/Utility.module.scss'
import HeaderBar from '../components/common/headerBar'
import Carousel from '../components/ui/carousel'
import Footer from '../components/common/footer'
import Head from 'next/head'

interface Props {
  children?: ReactNode;
  home?: ReactNode;
}

const Layout = ({ children, home }: Props) => {
  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
      </Head>
        {home ? (
          <>
            <HeaderBar />
          </>
        ) : (
          <>
            <HeaderBar />
          </>
        )}
      <div className={styles.container}>
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
          </>
        )}
      </div>
      <Footer />
    </>
  )
}
export default Layout;