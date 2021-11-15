import Styles from './headerbar.module.scss'
import { IconButton } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import { CloseIcon } from '@chakra-ui/icons'
import React, {useState} from "react"
import Link from 'next/link'

const HeaderBar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  if (typeof document !== 'undefined') {
    {openMenu ? ( document.body.style.position = 'unset' ) : ( document.body.style.position = 'fixed' )}
  }
  return (
    <React.Fragment>
      <header className={Styles.headerBar}>
        <div>　</div>
        <div>header</div>
        <div className={openMenu ? Styles.hide : `${Styles.fadeIn} ${Styles.openMenu}`}>
          <Link
          href={`/about`}>
            <a>About</a>
          </Link>
        </div>
        <div>
          {openMenu ? (
            <>
              <IconButton aria-label="Search database" icon={<HamburgerIcon />} onClick={() => menuFunction()} />
            </>
          ) : (
            <>
              <IconButton className={openMenu ? Styles.hide : Styles.fadeIn} aria-label="Search database" icon={<CloseIcon />} onClick={() => menuFunction()} />
            </>
          )}
        </div>
      </header>
    </React.Fragment>
  )
}
export default HeaderBar;