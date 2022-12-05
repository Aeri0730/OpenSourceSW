import { Box, Container, Flex, Image } from "@chakra-ui/react"
import { Navigate, useParams } from "react-router-dom";
import { useWindowSize } from "../useWindowSize";

import bgImage from "../assets/background-day.jpg";

import TreeButton from "./TreeButton";
import TreeHeader from "./TreeHeader";
import TreeBody from "./TreeBody";

const fakeUserResponse = {
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
        <Box h={height} bgImage={bgImage} bgPos="center" bgSize="cover">
            <Container maxWidth="container.sm" h={height} maxW="container.xl" textStyle="tree">
                <Flex h={height} direction="column">
                    <TreeHeader nickname={fakeTreeResponse.treeOwnerNickname} count={fakeTreeResponse.result.length} />
                    <TreeBody list={fakeTreeResponse.result} />
                    <TreeButton treeId={treeId} userId={fakeUserResponse.result.idx} />
                </Flex>
            </Container>
        </Box>
    )
}

export default TreePage