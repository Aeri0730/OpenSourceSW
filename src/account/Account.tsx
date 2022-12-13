import { Center, Flex, Stack, Text } from "@chakra-ui/react"
import { useWindowSize } from "../useWindowSize";

import AuthForm from "./AuthForm";
import CodeForm from "./CodeForm";
import EditForm from "./EditForm";
import ResetForm from "./ResetForm";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Terms from "./Terms";

type PageType = "SignIn" | "Auth" | "Code" | "SignUp" | "Reset" | "Edit"

export type AccountPageType = {
    pageType: PageType
}

const Account = ({ pageType }: AccountPageType) => {
    const { height } = useWindowSize();

    return (
        <Center h={height} color="white" bgGradient="linear(to-tr, blackAlpha.900, blackAlpha.800)">
            <Stack textStyle="landing" spacing="10" px="5">
                <Flex direction="column" gap={1} justify="center" align="center">
                    <Text textStyle="logo" fontSize={["4xl", "5xl"]}>GNU-MAS Tree</Text>
                    <Text fontSize={["sm", "lg"]}>본 서비스는 경상국립대학교 학생들의 비공식 프로젝트입니다.</Text>
                    <Text fontSize={["sm", "lg"]}>가입 후 서비스 이용이 가능합니다.</Text>
                </Flex>
                {
                    pageType === "SignIn" ? <SignInForm /> :
                        pageType === "Auth" ? <><AuthForm /><Terms /></> :
                            pageType === "Code" ? <CodeForm /> :
                                pageType === "SignUp" ? <><SignUpForm /><Terms /></> :
                                    pageType === "Reset" ? <ResetForm /> :
                                    <EditForm />
                }
            </Stack>
        </Center>
    )
}

export default Account