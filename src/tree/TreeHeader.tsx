import { Card, CardBody, Text } from "@chakra-ui/react"

type TreeHeaderType = {
    nickname: string,
    count: number
}

const TreeHeader = ({ nickname, count }: TreeHeaderType) => {
    return (
        <Card mt={5} bgGradient="linear(to-r, white, whiteAlpha.500)">
            <CardBody>
                <Text fontSize="4xl" fontWeight="bold">
                    {nickname}님의 트리에<br /> {count}명이 장식을 달아드렸어요!
                </Text>
            </CardBody>
        </Card>
    )
}

export default TreeHeader