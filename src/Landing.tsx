import { Box, Button, Center, Flex, Image, Link, Text, VStack } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom";

import { useWindowSize } from "./useWindowSize"

import decoratedTree from "./assets/decorated-tree.svg"
import resourcesImage from "./assets/resources.svg"
import wreathImage from "./assets/wreath.svg"
import { useAtom } from "jotai";
import { userAtom } from "./backend/User";

const Landing = () => {
    const { height } = useWindowSize();

    const [user] = useAtom(userAtom);

    return (
        <Box textStyle="landing">
            <Center w="full" h="64px" px="5" textStyle="landing" bgColor="brand.fallingSnow">
                <Text fontSize={["24px", "32px"]} textStyle="logo" color="brand.santaSock">GNU-MAS <Text as="span" color="brand.christmasTree">Tree</Text></Text>
            </Center>
            <Flex h={height} wrap="wrap" alignContent="center" alignItems="center" justifyContent="center" gap="5em" color="brand.fallingSnow" bgColor="brand.nightSky">
                <Center boxSize={["xs", "sm"]}>
                    <Image w="85%" h="85%" src={wreathImage} />
                </Center>
                <VStack spacing="10">
                    <Text fontSize={["24px", "32px"]}>
                        특별한 날에만 전하는<br />말하지 못한 마음 속 이야기<br />학우들과 나누어보아요!
                    </Text>
                    {
                        user.userIdx === -1 ? <Button as={RouterLink} to="signin" color="brand.nightSky" w="full">로그인해서 확인하기</Button>
                        : <Button as={RouterLink} to={`trees/${user.userIdx}`} color="brand.nightSky" w="full">내 트리 확인하기</Button>
                    }
                </VStack>
            </Flex>
            <Flex h={height} wrap="wrap" alignContent="center" alignItems="center" justifyContent="center" gap="5em" color="brand.fallingSnow" bgColor="brand.dawnSky">
                <VStack spacing="10">
                    <Text fontSize={["24px", "32px"]}>
                        원본 서비스인<br />"내 트리를 꾸며줘"에도<br />많은 관심 부탁드려요!
                    </Text>
                    <Button as={Link} href="https://colormytree.me/" color="brand.nightSky" w="full">보러가기</Button>
                </VStack>
                <Box boxSize={["xs", "sm"]}>
                    <Image src={decoratedTree} />
                </Box>
            </Flex>
            <Flex h={height} wrap="wrap" alignContent="center" alignItems="center" justifyContent="center" gap="5em" color="brand.fallingSnow" bgColor="brand.nightSky">
                <Center boxSize={["xs", "sm"]}>
                    <Image w="85%" h="85%" src={resourcesImage} objectFit="contain" />
                </Center>
                <VStack spacing="10">
                    <Text fontSize={["24px", "32px"]}>
                        서비스 제작에 사용된<br />리소스들의 출처는<br />다음과 같습니다!
                    </Text>
                </VStack>
            </Flex>
        </Box>
    )
}

export default Landing