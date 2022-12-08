import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightAddon } from "@chakra-ui/react"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom"

type AuthFormData = {
    email: string
}

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

    const { handleSubmit, register, formState: { errors } } = useForm<AuthFormData>();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));

    return (
        <Form method="post" action="" onSubmit={onSubmit}>
            <FormControl marginY="5" isInvalid={Boolean(errors.email)}>
                <FormLabel htmlFor="email">학교 이메일 아이디</FormLabel>
                <InputGroup size="lg">
                    <Input type="text" {...register("email", {
                        required: "이메일은 꼭 입력해주세요"
                    })} value={email || ""} onChange={handleEmailInput} />
                    <InputRightAddon color="black">@gnu.ac.kr</InputRightAddon>
                </InputGroup>
                <FormErrorMessage>
                    {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>
            <Button type="submit" size="lg" width="full" marginY="5" color="black">인증번호 요청</Button>
        </Form>
    )
}

export default AuthForm