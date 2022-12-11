import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Center, FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightAddon, InputRightElement, Link, useToast } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Link as RouterLink, useNavigate } from "react-router-dom";

import { fetchUser } from "../backend/Backend";
import { userAtom } from "../backend/User";

export type SignInFormData = {
    id: string
    password: string
}

const SignInForm = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleIdInput = (e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value);
    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const { handleSubmit, register, formState: { errors } } = useForm<SignInFormData>();

    const navigate = useNavigate();

    const toast = useToast();

    const [, setUser] = useAtom(userAtom);

    const onSubmit = handleSubmit(async data => {
        try {
            const userResponse = await fetchUser(data.id, data.password);

            if (userResponse?.isSuccess) {
                const userData = userResponse.result;
                
                setUser(userData);
                
                navigate(`/trees/${userData.userIdx}`, { replace: true });
            }
            else {
                toast({
                    title: "로그인 실패",
                    description: "아이디 또는 비밀번호가 올바르지 않습니다.",
                    status: "error",
                    duration: 3000,
                    isClosable: true
                });
            }
        }
        catch (error) {
            toast({
                title: "로그인 실패",
                description: "알 수 없는 오류입니다.",
                status: "error",
                duration: 3000,
                isClosable: true
            });
        }
    });

    return (
        <Form method="post" onSubmit={onSubmit}>
            <FormControl marginY="5" isInvalid={Boolean(errors.id)}>
                <FormLabel htmlFor="id">학교 이메일 아이디</FormLabel>
                <InputGroup size="lg">
                    <Input type="text" {...register("id", {
                        required: "이메일은 꼭 입력해주세요"
                    })} value={id || ""} onChange={handleIdInput} />
                    <InputRightAddon color="black">@gnu.ac.kr</InputRightAddon>
                </InputGroup>
                <FormErrorMessage>
                    {errors.id && errors.id.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl marginY="5" isInvalid={Boolean(errors.password)}>
                <FormLabel htmlFor="password">비밀번호</FormLabel>
                <InputGroup size="lg">
                    <Input type={show ? "text" : "password"} {...register("password", {
                        required: "비밀번호는 꼭 입력해주세요"
                    })} value={password || ""} onChange={handlePasswordInput} />
                    <InputRightElement color="black">
                        <IconButton onClick={handleShow} aria-label="Show password" icon={show ? <ViewOffIcon /> : <ViewIcon />} />
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            <Button type="submit" size="lg" width="full" marginY="5" color="black">로그인</Button>
            <Center>
                <Link as={RouterLink} fontSize="16px" color="whiteAlpha.700" style={{ textDecoration: "none" }} to="/auth">회원가입 또는 계정 찾기</Link>
            </Center>
        </Form>
    )
}

export default SignInForm