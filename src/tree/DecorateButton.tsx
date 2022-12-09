import { Button, Modal, useDisclosure } from "@chakra-ui/react"
import { Link } from "react-router-dom"

type DecorateButtonType = {
    userId: number | undefined
}

const DecorateButton = ({ userId }: DecorateButtonType) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        userId === undefined ? <Button as={Link} to="/signin" size="lg" w="full">장식품 달아주기</Button> :
            <>
                <Button onClick={onOpen} size="lg" w="full">장식품 달아주기</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    
                </Modal>
            </>
    )
}

export default DecorateButton