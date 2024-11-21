import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightAddon, useToast } from "@chakra-ui/react"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, useNavigate } from "react-router-dom"
import { authWithEmail } from "../backend/Backend";

type AuthFormData = {
    id: string
}

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<AuthFormData>();

    const navigate = useNavigate();

    const toast = useToast();

    const onSubmit = handleSubmit(async data => {
        try {
            const authResponse = await authWithEmail(data.id);

            if (authResponse?.isSuccess) {
                navigate("/code", { replace: true });
            }
            else {
                toast({
                    title: "인증번호 전송 실패",
                    description: authResponse?.message,
                    status: "error",
                    duration: 3000,
                    isClosable: true
                });
            }
        }
        catch (error) {
            toast({
                title: "인증번호 전송 실패",
                description: "알 수 없는 오류입니다.",
                status: "error",
                duration: 3000,
                isClosable: true
            });
        }
    });

    return (
        <Form method="post" action="" onSubmit={onSubmit}>
            <FormControl marginY="5" isInvalid={Boolean(errors.id)}>
                <FormLabel htmlFor="email">학교 이메일 아이디</FormLabel>
                <InputGroup size="lg">
                    <Input type="text" {...register("id", {
                        required: "이메일은 꼭 입력해주세요"
                    })} value={email || ""} onChange={handleEmailInput} />
                    <InputRightAddon color="black">@kyonggi.ac.kr</InputRightAddon>
                </InputGroup>
                <FormErrorMessage>
                    {errors.id && errors.id.message}
                </FormErrorMessage>
            </FormControl>
            <Button isLoading={isSubmitting} type="submit" size="lg" width="full" marginY="5" color="black">인증번호 요청</Button>
        </Form>
    )
}

export default AuthForm