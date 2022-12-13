import { Button, Card, CardBody, CardFooter, CardHeader, chakra, Flex, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react"
import { useAtomValue } from "jotai"

import bgImage from "../assets/letter-background.jpg"
import { userAtom } from "../backend/User"
import { ornament } from "../utils/ornaments"

export type DecorationDetailType = {
    idx: number
    nickname: string
    writerIdx: number
    imageIdx: number
    message: string
}

type MessageModalType = {
    isOpen: boolean
    onClose: () => void
    detail: DecorationDetailType
}

const MessageModal = ({ isOpen, onClose, detail }: MessageModalType) => {
    const user = useAtomValue(userAtom);

    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" isCentered>
            <ModalOverlay />
            <ModalContent h="75%" textStyle="tree" fontSize={["20px", "24px"]} bgImage={bgImage} bgPos="30%">
                <ModalBody flexDirection="column" overflowX="hidden">
                    <Card minH="90%" bgColor="whiteAlpha.800" mt={5} p={5}>
                        <CardHeader alignSelf="center">
                            <Image src={ornament(detail.imageIdx)} boxSize={["52px", "64px"]} />
                        </CardHeader>
                        <CardBody>{detail.message}</CardBody>
                        <CardFooter justify="right">- {detail.nickname}</CardFooter>
                    </Card>
                </ModalBody>
                <ModalFooter>
                    {
                        user.userIdx === detail.writerIdx ?
                        <Flex w="full" direction="column">
                            <Button mb={3} onClick={onClose}>삭제</Button>
                            <Button mb={3} onClick={onClose}>닫기</Button>
                        </Flex> :
                            <Button w="full" mb={3} onClick={onClose}>닫기</Button>
                    }
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default MessageModal