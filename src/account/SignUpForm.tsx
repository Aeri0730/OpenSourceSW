import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightElement, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, useNavigate } from "react-router-dom";
import { signUp } from "../backend/Backend";

type SignUpFormData = {
    nickname: string,
    password: string
}

const SignUpForm = () => {
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    
    const handleNicknameInput = (e: React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value);
    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    
    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<SignUpFormData>();

    const navigate = useNavigate();

    const toast = useToast();

    const onSubmit = handleSubmit(async data => {
        try {
            const signUpResponse = await signUp(data.nickname, data.password);

            if (signUpResponse?.isSuccess) {
                toast({
                    title: "회원가입 성공",
                    description: "가입하신 정보로 로그인해주세요.",
                    status: "success",
                    duration: 3000,
                    isClosable: true
                });

                navigate("/", { replace: true });
            }
            else {
                toast({
                    title: "회원가입 실패",
                    description: signUpResponse?.message,
                    status: "error",
                    duration: 3000,
                    isClosable: true
                });
            }
        }
        catch (error) {
            toast({
                title: "회원가입 실패",
                description: "알 수 없는 오류입니다.",
                status: "error",
                duration: 3000,
                isClosable: true
            });
        }
    });

    return (
        <Form method="post" action="" onSubmit={onSubmit}>
            <FormControl marginY="5" isInvalid={Boolean(errors.nickname)}>
                <FormLabel htmlFor="nickname">닉네임</FormLabel>
                <InputGroup size="lg">
                    <Input type="text" {...register("nickname", {
                        required: "닉네임은 꼭 입력해주세요",
                        maxLength: { value: 10, message: "닉네임은 10자 이하로 입력해주세요" }
                    })} value={nickname || ""} onChange={handleNicknameInput} />
                </InputGroup>
                <FormErrorMessage>
                    {errors.nickname && errors.nickname.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl marginY="5" isInvalid={Boolean(errors.password)}>
                <FormLabel htmlFor="password">비밀번호</FormLabel>
                <InputGroup size="lg">
                    <Input type={show ? "text" : "password"} {...register("password", {
                        required: "비밀번호는 꼭 입력해주세요",
                        pattern: { value: /^[A-Za-z\d?!@#$%^*+=-]{8,16}$/, message: "비밀번호는 8자 이상 16자 이하의 영문, 숫자 및 특수문자입니다" }
                    })} value={password || ""} onChange={handlePasswordInput} />
                    <InputRightElement color="black">
                        <IconButton onClick={handleShow} aria-label="Show password" icon={show ? <ViewOffIcon /> : <ViewIcon />} />
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            <Button isLoading={isSubmitting} type="submit" size="lg" width="full" marginY="5" color="black">회원가입</Button>
        </Form>
    )
}

export default SignUpForm