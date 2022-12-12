import { Button, Center, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, Text, useToast } from "@chakra-ui/react"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, useNavigate } from "react-router-dom"
import { checkCode } from "../backend/Backend";

type CodeFormType = {
    code: number
}

const CodeForm = () => {
    const [code, setCode] = useState("");
    const handleCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value);

    const { handleSubmit, register, formState: { errors } } = useForm<CodeFormType>();

    const navigate = useNavigate();

    const toast = useToast();

    const onSubmit = handleSubmit(async data => {
        try {
            const codeResponse = await checkCode(data.code);

            if (codeResponse?.isSuccess) {
                if (codeResponse.result) {
                    navigate("/reset", { replace: true });
                }
                else {
                    navigate("/signup", { replace: true });
                }
            }
            else {
                toast({
                    title: "인증번호 인증 실패",
                    description: codeResponse?.message,
                    status: "error",
                    duration: 3000,
                    isClosable: true
                });
            }
        }
        catch (error) {
            toast({
                title: "인증번호 인증 실패",
                description: "알 수 없는 오류입니다.",
                status: "error",
                duration: 3000,
                isClosable: true
            });
        }
    });

    return (
        <>
            <Center>
                <Text fontSize={["xl", "2xl"]}>경상국립대학교 웹메일을 확인해주세요.</Text>
            </Center>
            <Form method="post" action="" onSubmit={onSubmit}>
                <FormControl marginY="5" isInvalid={Boolean(errors.code)}>
                    <FormLabel>인증번호</FormLabel>
                    <InputGroup size="lg">
                        <Input type="number" {...register("code", {
                        required: "인증번호를 입력해주세요",
                        pattern: { value: /^[0-9]{6}$/, message: "인증번호는 6자리 숫자입니다" }
                    })} value={code || ""} onChange={handleCodeInput} />
                    </InputGroup>
                    <FormErrorMessage>
                        {errors.code && errors.code.message}
                    </FormErrorMessage>
                </FormControl>
                <Button type="submit" size="lg" width="full" marginY="5" color="black">인증번호 확인</Button>
            </Form>
        </>
    )
}

export default CodeForm