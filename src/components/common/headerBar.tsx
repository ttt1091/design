import Styles from './headerbar.module.scss'
import Link from 'next/link'
import Drawer from '@/components/ui/drawer'
// import { ST } from 'next/dist/shared/lib/utils'
import { useRouter } from "next/router";

const HeaderBar = () => {
  const router = useRouter();
  return (
    <>
      <header className={Styles.headerBar}>
        <div>　</div>
        <div>
          {router.pathname === "/" ? (
            <Link href="/">
              <a><h1>Header</h1></a>
            </Link>
          ) : (
            <Link href="/">
              <a>Header</a>
            </Link>
          )}
        </div>
        <div>
          <Drawer />
        </div>
      </header>
    </>
  )
}
export default HeaderBar;