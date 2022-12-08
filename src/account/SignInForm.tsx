import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Center, FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightAddon, InputRightElement, Link } from "@chakra-ui/react"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Link as RouterLink } from "react-router-dom"

type SignInFormData = {
    email: string,
    password: string
}

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const { handleSubmit, register, formState: { errors } } = useForm<SignInFormData>();

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
                <Link as={RouterLink} fontSize="16px" color="whiteAlpha.700" to="/auth">계정을 찾을 수 없나요?</Link>
            </Center>
        </Form>
    )
}

export default SignInForm