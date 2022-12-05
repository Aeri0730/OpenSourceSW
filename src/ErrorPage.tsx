import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useWindowSize } from "./useWindowSize";

const ErrorPage = () => {
    const error = useRouteError();
    const { height } = useWindowSize();

    if (isRouteErrorResponse(error)) {
        return (
            <Center h={height} color="white" bgGradient="linear(to-tr, blackAlpha.900, blackAlpha.800)">
                <VStack>
                    <Heading as="h1">Oops!</Heading>
                    <Heading as="h2">{error.status}</Heading>
                    <Text as="i">{error.statusText}</Text>
                </VStack>
            </Center>
        );
    }
    else {
        return (
            <Center h={height} color="white" bgGradient="linear(to-tr, blackAlpha.900, blackAlpha.800)">
                <VStack>
                    <Heading as="h1">Oops!</Heading>
                    <Text as="i">Sorry, an unexpected error has occurred.</Text>
                </VStack>
            </Center>
        );
    }
}

export default ErrorPage