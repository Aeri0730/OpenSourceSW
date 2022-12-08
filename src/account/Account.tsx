import { Center, Stack, Text } from "@chakra-ui/react"
import { useWindowSize } from "../useWindowSize";

import AuthForm from "./AuthForm";
import CodeForm from "./CodeForm";
import EditForm from "./EditForm";
import ResetForm from "./ResetForm";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

type PageType = "SignIn" | "Auth" | "Code" | "SignUp" | "Reset" | "Edit"

export type AccountPageType = {
    pageType: PageType
}

const Account = ({ pageType }: AccountPageType) => {
    const { height } = useWindowSize();

    return (
        <Center h={height} color="white" bgGradient="linear(to-tr, blackAlpha.900, blackAlpha.800)">
            <Stack textStyle="landing" spacing="10" px="5">
                <Center>
                    <Text textStyle="logo" fontSize={["4xl", "5xl"]}>GNU-MAS Tree</Text>
                </Center>
                {
                    pageType === "SignIn" ? <SignInForm /> :
                        pageType === "Auth" ? <AuthForm /> :
                            pageType === "Code" ? <CodeForm /> :
                                pageType === "SignUp" ? <SignUpForm /> :
                                    pageType === "Reset" ? <ResetForm /> :
                                    <EditForm />
                }
            </Stack>
        </Center>
    )
}

export default Account