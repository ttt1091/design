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
  Button
} from "@chakra-ui/react"

function SizeExample() {
  const [size, setSize] = React.useState("md")
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = (newSize: string) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"]

  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleClick(size)}
          key={size}
          m={4}
        >{`Open ${size} Drawer`}</Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
          <DrawerBody>
            {size === "full"
              ? `You're trapped 😆 , refresh the page to leave or press 'Esc' key.`
              : null}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}