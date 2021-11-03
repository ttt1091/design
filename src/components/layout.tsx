import { ReactNode } from "react";
import styles from './layout.module.scss';
import Link from 'next/link'
import utility from '../styles/Utility.module.scss'

interface Props {
  children: ReactNode;
  home: ReactNode;
}
const siteName = "title";

const Layout = ({ children, home }: Props) => {
  return (
    <>
      <header className={ home ? styles.homeHeader : styles.otherHeader }>{siteName}</header>
      <div className={styles.container}>
        {home ? (
          <>
            home
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
        <main>{children}</main>
        {!home && (
          <>
          </>
        )}
      </div>
    </>
  )
}
export default Layout;