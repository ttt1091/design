import Styles from './headerbar.module.scss'
import Link from 'next/link'
import Drawer from '@/components/ui/drawer'
// import { ST } from 'next/dist/shared/lib/utils'

const HeaderBar = () => {

  return (
    <>
      <header className={Styles.headerBar}>
        <div>　</div>
        <div>
          <Link href="/">
            <a>Header</a>
          </Link>
        </div>
        <div>
          <Drawer />
        </div>
      </header>
    </>
  )
}
export default HeaderBar;