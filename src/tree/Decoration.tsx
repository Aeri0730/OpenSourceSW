import { IconButton, Image, Text, useDisclosure, VStack } from "@chakra-ui/react"

import MessageModal from "./MessageModal"

const fakeDecorationResult = {
    "isSuccess": true,
    "code": 200,
    "message": "성공",
    "result": {
        "idx": 24,
        "nickname": "하위",
        "writerIdx": 5,
        "imageUrl": "test1",
        "message": "메세지"
    }
}

export type DecorationType = {
    idx: number
    nickname: string
    imageUrl: string
}

const Decoration = ({ nickname, imageUrl }: DecorationType) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <VStack>
            <IconButton aria-label="Decoration" bgColor="transparent" onClick={onOpen} icon={<Image boxSize={["40px", "60px"]} src={imageUrl} />} />
            <Text fontSize={["18px", "24px"]}>{nickname}</Text>
            <MessageModal isOpen={isOpen} onClose={onClose} detail={fakeDecorationResult.result} />
        </VStack>
    )
}

export default Decoration