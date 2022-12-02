import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <Box>
                <Heading as="h1">Oops!</Heading>
                <Heading as="h2">{error.status}</Heading>
                <Text as="i">{error.statusText}</Text>
            </Box>
        );
    }
    else {
        return (
            <Box>
                <Heading as="h1">Oops!</Heading>
                <Text as="i">Sorry, an unexpected error has occurred.</Text>
            </Box>
        );
    }
}

export default ErrorPage