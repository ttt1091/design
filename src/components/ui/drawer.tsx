import React, {useState} from "react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  IconButton
} from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useRouter } from "next/router";


const DrawerMenu = () => {
  const [size, setSize] = React.useState("md")
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = (newSize: string) => {
    setSize(newSize)
    onOpen()
  }
  const sizes = ["xs", "sm", "md", "lg", "xl", "full"]

  const router = useRouter();
  // console.log(router.pathname)

  const pages = [
    { url: "/", title: "Home", },
    { url: "/about", title: "About", }
  ]

  return (
    <>
      <IconButton
        onClick={() => handleClick(`xs`)}
        aria-label="MainMenu"
        icon={<HamburgerIcon />}
      />

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <div>
              {pages.map(items => (
                <Box mb={6} key={items.title}>
                  {router.pathname === items.url ? (
                    <a href={items.url}>{items.title}</a>
                  ) : (
                    <Link href={items.url}>
                      <a>{items.title}</a>
                    </Link>
                  )
                  }
                </Box>
              ))}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default DrawerMenu;