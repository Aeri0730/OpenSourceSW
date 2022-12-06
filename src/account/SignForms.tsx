import { Button, Center, Text } from "@chakra-ui/react";
import { FormEvent } from "react";
import { Form } from "react-router-dom";
import { AuthNumFormControl, EmailFormControl, NicknameFormControl, PasswordFormControl } from "./SignFormControls";

export const SignInForm = () => {
    return (
        <Form method="post" action="">
            <EmailFormControl />
            <PasswordFormControl />
            <Button type="submit" size="lg" width="full" marginY="5" color="black">로그인</Button>
        </Form>
    )
}

export const SignUpForm = () => {
    return (
        <Form method="post" action="">
            <NicknameFormControl />
            <EmailFormControl />
            <PasswordFormControl />
            <Button type="submit" size="lg" width="full" marginY="5" color="black">회원가입</Button>
        </Form>
    )
}

export const CheckMailForm = () => {
    return (
        <>
            <Center>
                <Text fontSize={["xl", "2xl"]}>경상국립대학교 웹메일을 확인해주세요.</Text>
            </Center>
            <Form method="post" action="">
                <AuthNumFormControl />
                <Button type="submit" size="lg" width="full" marginY="5" color="black">이메일 인증</Button>
            </Form>
        </>

    )
}