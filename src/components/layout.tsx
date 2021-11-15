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
const siteName = "title";

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
            <Link href="/">
              <a className={`${utility.button}  ${utility.m8}`}>
                Not home
              </a>
            </Link>
          </>
        )}
        <header className={ home ? styles.homeHeader : styles.otherHeader }>{siteName}</header>
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