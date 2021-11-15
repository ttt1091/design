import Styles from './footer.module.scss'
import { Box } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
import { VStack } from "@chakra-ui/react"


const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <Box maxW="960px" mx="auto" p={4}>
        <Heading as="h2" size="sm">会社情報</Heading>
        <Divider my="2" />
        <VStack>
          <Center>○○○○有限会社</Center>
          <Center>〒123-4567 ○○県○○市○○○○1234</Center>
          <Center>TEL. 0120-444-444</Center>
        </VStack>
      </Box>
    </footer>
  )
}
export default Footer;