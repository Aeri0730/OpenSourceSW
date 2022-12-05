import { Box, Button, Center, Heading, HStack, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react"

export type DecorationType = {
    idx: number
    nickname: string
    imageUrl: string
}


//<VStack onClick={onOpen}>
//
//<Text fontSize={["18px", "24px"]} children={nickname} />
//</VStack>

const Decoration = ({ nickname, imageUrl }: DecorationType) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box>
            <VStack>
                <IconButton aria-label="Decoration image" onClick={onOpen} icon={<Image boxSize={["32px", "64px"]} src={imageUrl} />} />
                <Text>{nickname}</Text>
            </VStack>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent textStyle="tree">
                    <ModalHeader>
                        <Center>
                            <Text fontSize="2rem">{nickname}님이 메시지를 보내주셨어요!</Text>
                        </Center>
                    </ModalHeader>
                    <ModalBody>
                        ???
                    </ModalBody>
                    <ModalFooter>
                        <Button w="full" fontSize="1rem" onClick={onClose}>닫기</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Decoration