import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Account, { AccountPageType } from "./account/Account"

import ErrorPage from "./ErrorPage"
import Fonts from "./Fonts"
import Landing from "./Landing"
import TreePage from "./tree/TreePage"

const theme = extendTheme({
    colors: {
        brand: {
            christmasTree: "#027228",
            santaSock: "#D20001",
            fallingSnow: "#F9FAFF",
            nightSky: "#010317",
            dawnSky: "#1B1D31",
        }
    },
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
        element: <Landing />,
        errorElement: <ErrorPage />
    },
    {
        path: "signin",
        element: <Account pageType="SignIn" />
    },
    {
        path: "signup",
        element: <Account pageType="SignUp" />
    },
    {
        path: "checkmail",
        element: <Account pageType="CheckMail" />
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