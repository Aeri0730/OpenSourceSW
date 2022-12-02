import { ChakraProvider } from "@chakra-ui/react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import ErrorPage from "./ErrorPage"
import TreePage from "./TreePage"

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
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    )
}

export default Root