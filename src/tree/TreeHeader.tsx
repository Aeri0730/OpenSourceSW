import { Card, CardBody, Text } from "@chakra-ui/react"

type TreeHeaderType = {
    nickname: string,
    count: number
}

const TreeHeader = ({ nickname, count }: TreeHeaderType) => {
    return (
        <Text fontSize="2rem">{nickname}님의 트리에<br />{count}명이 장식을 달아주었어요!</Text>
    )
}

export default TreeHeader