import React, { useState } from "react";
import { Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, IconButton, Input, InputGroup, InputRightAddon, InputRightElement, Stack, Text } from "@chakra-ui/react"
import { Form } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useWindowSize } from "../useWindowSize";

const SignIn = () => {
    const { height } = useWindowSize();

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    return (
        <Center h={height} color="white" bgGradient="linear(to-tr, blackAlpha.900, blackAlpha.800)">
            <Stack textStyle="landing" spacing="10" px="5">
                <Center>
                    <Text textStyle="logo" fontSize={["4xl", "5xl"]}>GNU-MAS Tree</Text>
                </Center>
                <Form>
                    <FormControl marginY="5" isRequired={true}>
                        <FormLabel>학교 이메일 아이디</FormLabel>
                        <InputGroup size="lg">
                            <Input type="text" value={email || ""} onChange={handleEmailInput} />
                            <InputRightAddon color="black" children="@gnu.ac.kr" />
                        </InputGroup>
                        <FormErrorMessage>필수항목입니다.</FormErrorMessage>
                    </FormControl>
                    <FormControl marginY="5" isRequired={true}>
                        <FormLabel>비밀번호</FormLabel>
                        <InputGroup size="lg">
                            <Input type={show ? "text" : "password"} value={password || ""} onChange={handlePasswordInput} />
                            <InputRightElement color="black">
                                <IconButton onClick={handleShow} aria-label="Show password" icon={show ? <ViewOffIcon /> : <ViewIcon />} />
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </Form>
                <Button color="black" size="lg" type="submit">로그인</Button>
            </Stack>
        </Center>
    )
}

export default SignIn