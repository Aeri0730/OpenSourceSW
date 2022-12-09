import { Box, Container, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react"
import { Link, Navigate, useParams } from "react-router-dom";
import { useWindowSize } from "../useWindowSize";

import bgImage from "../assets/background-day.jpg";

import TreeButton from "./TreeButton";
import TreeInfo from "./TreeInfo";
import TreeBody from "./TreeBody";
import { HamburgerIcon } from "@chakra-ui/icons";

type UserResponse = {
    isSuccess: boolean
    code: number
    message: string
    result: {
        idx: number
        nickname: string
        jwt: string
    }
}

const fakeUserResponse: UserResponse = {
    "isSuccess": true,
    "code": 200,
    "message": "성공",
    "result": {
        "idx": 4,
        "nickname": "도도한도도새",
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWR4Ijo0LCJpYXQiOjE2NzAwNzQ4MzgsImV4cCI6MTcwMTYxMDgzOCwic3ViIjoidXNlciJ9.tDTdXR6nxTcR8AmXSznODyG0CvdEEJl4_bwqG1fXsEo"
    }
}

const fakeTreeResponse = {
    "isSuccess": true,
    "code": 200,
    "message": "성공",
    "treeOwnerNickname": "미미한미현",
    "result": [
        {
            "idx": 1,
            "nickname": "테스트1",
            "imageUrl": "testUrl1"
        },
        {
            "idx": 2,
            "nickname": "테스트2",
            "imageUrl": "testUrl2"
        },
        {
            "idx": 3,
            "nickname": "테스트1",
            "imageUrl": "testUrl3"
        },
        {
            "idx": 4,
            "nickname": "테스트2",
            "imageUrl": "testUrl4"
        },
        {
            "idx": 5,
            "nickname": "테스트1",
            "imageUrl": "testUrl5"
        },
        {
            "idx": 6,
            "nickname": "테스트2",
            "imageUrl": "testUrl6"
        },
        {
            "idx": 7,
            "nickname": "테스트1",
            "imageUrl": "testUrl7"
        },
        {
            "idx": 8,
            "nickname": "테스트2",
            "imageUrl": "testUrl8"
        },
        {
            "idx": 9,
            "nickname": "테스트2",
            "imageUrl": "testUrl8"
        },
        {
            "idx": 10,
            "nickname": "테스트2",
            "imageUrl": "testUrl8"
        },
        {
            "idx": 11,
            "nickname": "테스트2",
            "imageUrl": "testUrl8"
        }
    ]
}

const TreePage = () => {
    const { width, height } = useWindowSize();
    const { id } = useParams();

    const treeId = parseInt(id as string);

    if (isNaN(treeId)) {
        console.log("Failed");
        return <Navigate replace to="/tree" />
    }

    return (
        <Box bgImage={bgImage} bgPos="center" bgSize="cover">
            <Flex h={height} textStyle="tree" direction="column">
                <Flex w={width} h="64px" bgColor="white" px={5} direction="row" align="center">
                    <Text textStyle="logo" fontSize={["24px", "32px"]} color="brand.santaSock">GNU-MAS <Text as="span" color="brand.christmasTree">Tree</Text></Text>
                    <Spacer />
                    <Menu>
                        <MenuButton as={IconButton} bgColor="white" aria-label="Account menu" icon={<HamburgerIcon />} />
                        {
                            typeof fakeUserResponse === "undefined" ?
                                <MenuList textStyle="landing">
                                    <MenuItem as={Link} to="/signin" style={{ textDecoration: "none" }}>
                                        로그인
                                    </MenuItem>
                                </MenuList> :
                                <MenuList textStyle="landing">
                                    <MenuItem>로그아웃</MenuItem>
                                    <MenuItem as={Link} to="/edit" style={{ textDecoration: "none" }}>정보 관리</MenuItem>
                                </MenuList>
                        }
                    </Menu>
                </Flex>
                <Container height={height} p={5}>
                    <Flex h="100%" direction="column" justifyContent="space-between">
                        <TreeInfo nickname={fakeTreeResponse.treeOwnerNickname} count={fakeTreeResponse.result.length} />
                        <Spacer />
                        <TreeBody decorations={fakeTreeResponse.result} />
                        {
                            typeof fakeUserResponse === "undefined" ? <TreeButton treeId={treeId} /> :
                            <TreeButton treeId={treeId} userId={fakeUserResponse.result.idx} />
                        }
                    </Flex>
                </Container>
            </Flex>
        </Box>
    )
}

export default TreePage