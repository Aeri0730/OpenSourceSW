import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react"

import bgImage from "../assets/letter-background.jpg"

type DecorationDetailType = {
    idx: number,
    nickname: string,
    imageUrl: string,
    message: string
}

type MessageModalType = {
    isOpen: boolean
    onClose: () => void
    detail: DecorationDetailType
}

const MessageModal = ({ isOpen, onClose, detail }: MessageModalType) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent h="50%" textStyle="tree" fontSize={["20px", "24px"]} bgImage={bgImage} bgPos="30%">
                <ModalBody flexDirection="column" overflowX="hidden">
                    <Card minH="90%" bgColor="whiteAlpha.800" mt={5} p={5}>
                        <CardHeader alignSelf="center">
                            <Image src={detail.imageUrl} boxSize={["52px", "64px"]} />
                        </CardHeader>
                        <CardBody>{detail.message}</CardBody>
                        <CardFooter justify="right">- {detail.nickname}</CardFooter>
                    </Card>
                </ModalBody>
                <ModalFooter>
                    <Button w="full" mb={3} onClick={onClose}>닫기</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default MessageModal