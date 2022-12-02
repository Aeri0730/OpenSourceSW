import { Box, Center, Container } from "@chakra-ui/react"
import { useWindowSize } from "./useWindowSize";

const TreePage = () => {
    const { height } = useWindowSize();

    return (
        <Box bgGradient="linear(to-tr, blackAlpha.900, blackAlpha.800)">
            <Container bgColor="white">
                <Center h={height}>
                    Hello
                </Center>
            </Container>
        </Box>
    )
}

export default TreePage