import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"

import Decoration, { DecorationType } from "./Decoration"

import treeImage from "../assets/tree.svg"

type TreeBodyType = {
    list: Array<DecorationType>
}

const TreeBody = ({ list }: TreeBodyType) => {
    return (
        <Box flex={1} bgImage={treeImage} bgPos="center" bgSize="contain" bgRepeat="no-repeat">
            {
                list.map(({ idx, nickname, imageUrl }) => (
                    <Decoration key={idx} idx={idx} nickname={nickname} imageUrl={imageUrl} />
                ))
            }
        </Box>
    )
}

export default TreeBody