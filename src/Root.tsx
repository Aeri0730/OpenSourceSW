import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import ErrorPage from "./ErrorPage"
import Fonts from "./Fonts"
import TreePage from "./tree/TreePage"

const theme = extendTheme({
    textStyles: {
        logo: {
            fontFamily: `"Tenada", sans-serif`
        },
        landing: {
            fontFamily: `"LINESeedKR-Bd", sans-serif`
        },
        tree: {
            fontFamily: `"Hana_handwriting", serif`
        },
    },
})

const router = createBrowserRouter([
    {
        path: "/",
        element: <></>,
        errorElement: <ErrorPage />
    },
    {
        path: "tree/:id",
        element: <TreePage />
    }
])

const Root = () => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <RouterProvider router={router} />
        </ChakraProvider>
    )
}

export default Root