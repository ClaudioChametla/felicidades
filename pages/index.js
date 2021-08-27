import Head from 'next/head'
import {
  Text,
  Image,
  Button,
  Flex, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
} from '@chakra-ui/react'
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex bgImage="https://wallpaperaccess.com/full/4702603.jpg">
      <Head>
				<title> ¡Felicidades! </title>
				<meta name="Para Maribel Alarcon Aleman" content="Lo lograste" />
			</Head>
    <Center flexDir="column"
    margin="250px 100px 500px 100px"
    >
      <Button onClick={onOpen}>Presioname :3 </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">¡Muchas Felicidades!</ModalHeader>
          <ModalBody>
            <Text fontFamily="fantasy"
            textAlign="center">
            Licenciada en Pedagogía <br/>
            MARIBEL ALARCON ALEMAN
            </Text>
            
            <Image 
            borderRadius="50%"
            src="https://scontent.fmex33-1.fna.fbcdn.net/v/t1.6435-9/240597191_3998004200326857_8131955642593294057_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE4nxQY7cmEKsnrsvJ4-NhPS0jVwUl5IhxLSNXBSXkiHCVuYQjT8C15rvk4OSD_Ayr8xam6zZFmsUDzWnet-Id2&_nc_ohc=gAXrkkS8tVUAX89GhrG&tn=ms-uUhEIS0euLljN&_nc_ht=scontent.fmex33-1.fna&oh=f724ea4033e2fad568d038444a39704d&oe=614E75F5" alt="Mary" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Te quiero mugrosa
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  </Flex>
  )
}
