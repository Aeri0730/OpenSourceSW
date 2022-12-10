import { Button, Card, Center, chakra, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { isValidMotionProp, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import bgImage from "../assets/letter-background.jpg"

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: isValidMotionProp,
});

type DecorateModalType = {
    isOpen: boolean
    onClose: () => void
}

const DecorateModal = ({ isOpen, onClose }: DecorateModalType) => {
    const [progress, setProgress] = useState(0);
    const springProgress = useSpring(progress);
    const width = useTransform(springProgress, [0, 2], [130, 390])

    useEffect(() => {
        springProgress.set(progress);
    }, [progress]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent h="50%" textStyle="tree" fontSize={["20px", "24px"]} bgImage={bgImage} bgPos="30%">
                <ModalHeader>
                    <Flex>
                        <ChakraBox h="10px" borderRadius={5} bgColor="black" style={{ width }} />
                    </Flex>
                </ModalHeader>
                <ModalBody flexDirection="column" overflowX="hidden">
                    <Card minH="90%" bgColor="whiteAlpha.800" mt={5} p={5}>

                    </Card>
                </ModalBody>
                <ModalFooter>
                    <Button w="full" mb={3} onClick={() => setProgress(Math.min(progress + 1, 3))}>다음</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default DecorateModal