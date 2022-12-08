import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";

type ResetFormType = {
    password: string
}

const ResetForm = () => {
    const [password, setPassword] = useState("");
    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const { handleSubmit, register, formState: { errors } } = useForm<ResetFormType>();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));

    return (
        <Form method="post" action="" onSubmit={onSubmit}>
            <FormControl marginY="5" isInvalid={Boolean(errors.password)}>
                <FormLabel htmlFor="password">비밀번호</FormLabel>
                <InputGroup size="lg">
                    <Input type={show ? "text" : "password"} {...register("password", {
                        required: "비밀번호는 꼭 입력해주세요",
                        minLength: { value: 8, message: "비밀번호는 8자 이상으로 입력해주세요" },
                        maxLength: { value: 16, message: "비밀번호는 16자 이하로 입력해주세요" }
                    })} value={password || ""} onChange={handlePasswordInput} />
                    <InputRightElement color="black">
                        <IconButton onClick={handleShow} aria-label="Show password" icon={show ? <ViewOffIcon /> : <ViewIcon />} />
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            <Button type="submit" size="lg" width="full" marginY="5" color="black">비밀번호 재설정</Button>
        </Form>
    )
}

export default ResetForm