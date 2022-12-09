import { IconButton, Image, Text, useDisclosure, VStack } from "@chakra-ui/react"

import MessageModal from "./MessageModal"

const fakeDecorationResult = {
    "isSuccess": true,
    "code": 200,
    "message": "성공",
	"treeOwnerNickname": "테스트44",
    "result": [
        {
            "idx": 1,
            "nickname": "test1",
            "imageUrl": "testImage1",
            "message": "test메세지1"
        }
    ]
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
            <MessageModal isOpen={isOpen} onClose={onClose} detail={fakeDecorationResult.result[0]} />
        </VStack>
    )
}

export default Decoration