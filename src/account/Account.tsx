import { Center, Stack, Text } from "@chakra-ui/react"
import { useWindowSize } from "../useWindowSize";
import { CheckMailForm, SignInForm, SignUpForm } from "./SignForms";

type PageType = "SignIn" | "SignUp" | "CheckMail"

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
                        pageType === "SignUp" ? <SignUpForm /> :
                            <CheckMailForm />
                }
            </Stack>
        </Center>
    )
}

export default Account