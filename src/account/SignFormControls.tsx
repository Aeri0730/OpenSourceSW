import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightAddon, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

export const NicknameFormControl = () => {
    const [value, setValue] = useState("");
    const handleValueInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
        <FormControl marginY="5" isRequired={true}>
            <FormLabel>닉네임</FormLabel>
            <InputGroup size="lg">
                <Input type="text" name="nickname" value={value || ""} onChange={handleValueInput} />
            </InputGroup>
            <FormErrorMessage>필수항목입니다.</FormErrorMessage>
        </FormControl>
    )
}

export const EmailFormControl = () => {
    const [value, setValue] = useState("");
    const handleValueInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
        <FormControl marginY="5" isRequired={true}>
            <FormLabel>학교 이메일 아이디</FormLabel>
            <InputGroup size="lg">
                <Input type="text" name="email" value={value || ""} onChange={handleValueInput} />
                <InputRightAddon color="black">@gnu.ac.kr</InputRightAddon>
            </InputGroup>
            <FormErrorMessage>필수항목입니다.</FormErrorMessage>
        </FormControl>
    )
}

export const PasswordFormControl = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const [value, setValue] = useState("");
    const handleValueInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
        <FormControl marginY="5" isRequired={true}>
            <FormLabel>비밀번호</FormLabel>
            <InputGroup size="lg">
                <Input type={show ? "text" : "password"} name="password" value={value || ""} onChange={handleValueInput} />
                <InputRightElement color="black">
                    <IconButton onClick={handleShow} aria-label="Show password" icon={show ? <ViewOffIcon /> : <ViewIcon />} />
                </InputRightElement>
            </InputGroup>
            <FormErrorMessage>필수항목입니다.</FormErrorMessage>
        </FormControl>
    )
}

export const AuthNumFormControl = () => {
    const [value, setValue] = useState("");
    const handleValueInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
        <FormControl marginY="5" isRequired={true}>
            <FormLabel>인증번호</FormLabel>
            <InputGroup size="lg">
                <Input type="number" name="authNum" value={value || ""} onChange={handleValueInput} />
            </InputGroup>
            <FormErrorMessage>필수항목입니다.</FormErrorMessage>
        </FormControl>
    )
}