import { Button, useToast, UseToastOptions } from "@chakra-ui/react"

type CopyButtonType = {
    url: string
}

const CopyButton = ({ url }: CopyButtonType) => {
    const toast = useToast();

    const copyAndAlert = async (url: string) => {
        if (await copyLinkToClipboard(url)) {
            toast(copySuccess);
        }
        else {
            toast(copyFailed);
        }
    }

    return (
        <Button mb={5} onClick={() => { copyAndAlert(url) }}>
            트리에 초대하기
        </Button>
    )
}

const copySuccess: UseToastOptions = {
    title: "링크 복사",
    description: "트리 링크를 클립보드에 복사했어요!",
    status: "success",
    duration: 3000,
    isClosable: true
}

const copyFailed: UseToastOptions = {
    title: "링크 복사",
    description: "트리 링크를 복사하지 못했습니다.",
    status: "error",
    duration: 3000,
    isClosable: true
}

const copyLinkToClipboard = async (url: string) => {
    try {
        await navigator.clipboard.writeText(url);

        return true;
    }
    catch (e) {
        if (e instanceof Error) {
            console.log("Failed to copy link : " + e.message)
        }

        return false;
    }
}

export default CopyButton