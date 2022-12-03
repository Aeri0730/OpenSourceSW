import { Button } from "@chakra-ui/react"

type DecorateButtonType = {
    userId: number | undefined
}

// if userId === undefined -> login
// else create decoration modal

const DecorateButton = ({ userId }: DecorateButtonType) => {
    return (
        <Button mb={5}>장식품 달아주기</Button>
    )
}

export default DecorateButton