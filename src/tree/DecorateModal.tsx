import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useToast } from "@chakra-ui/react"
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { useParams } from "react-router-dom";

import bgImage from "../assets/letter-background.jpg"
import { createDecoration } from "../backend/Backend";
import { decoAtom, decoMessageAtom, decoNicknameAtom, decoTypeAtom } from "../backend/Tree";
import { userAtom } from "../backend/User";
import DecorationCard from "./DecorationCard";
type DecorateModalType = {
    isOpen: boolean
    onClose: () => void
}

export const progressAtom = atom(0);

const DecorateModal = ({ isOpen, onClose }: DecorateModalType) => {
    const [progress, setProgress] = useAtom(progressAtom);

    const [deco, setDeco] = useAtom(decoAtom);
    const setDecotype = useSetAtom(decoTypeAtom);
    const [message, setMessage] = useAtom(decoMessageAtom);
    const [nickname, setNickname] = useAtom(decoNicknameAtom);

    const user = useAtomValue(userAtom);

    const { index } = useParams();

    const toast = useToast();

    const onCloseModal = () => {
        setDeco(0);
        setDecotype(0);
        setMessage("");
        setNickname("");

        setProgress(0);
        onClose();
    }

    const onSubmit = async () => {
        try {
            const createDecorateResponse = await createDecoration(parseInt(index!), user.jwt, deco, nickname, message);

            if (createDecorateResponse?.isSuccess) {
                toast({
                    title: "꾸미기 성공",
                    description: "성공적으로 장식품을 달아드렸어요!",
                    status: "success",
                    duration: 3000,
                    isClosable: true
                });

                onCloseModal();
            }
            else {
                toast({
                    title: "꾸미기 실패",
                    description: createDecorateResponse?.message,
                    status: "error",
                    duration: 3000,
                    isClosable: true
                });
            }
        }
        catch {
            toast({
                title: "꾸미기 실패",
                description: "알 수 없는 오류입니다.",
                status: "error",
                duration: 3000,
                isClosable: true
            });
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" isCentered>
            <ModalOverlay />
            <ModalContent textStyle="tree" fontSize={["24px", "28px"]} bgImage={bgImage} bgPos="30%">
                <ModalHeader as={Flex} flexDirection="column">
                    <ModalCloseButton onClick={onCloseModal} />
                </ModalHeader>
                <ModalBody flexDirection="column" overflowX="hidden">
                    <DecorationCard />
                </ModalBody>
                <ModalFooter>
                    {
                        progress === 2 ? <Button w="full" mb={3} onClick={onSubmit}>전송</Button> :
                            <Button w="full" mb={3} onClick={() => setProgress(Math.min(progress + 1, 2))}>다음</Button>
                    }
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default DecorateModal