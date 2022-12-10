import { Card, Flex, HStack, IconButton, Text } from "@chakra-ui/react"

import Decoration, { DecorationType } from "./Decoration"

import treeImage from "../assets/tree.svg"
import { useWindowSize } from "../useWindowSize"
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

type Paginator = {
    length: number
    pages: DecorationType[][]
}

const paginate = (input: DecorationType[], size: number): Paginator => {
    const chunks = [];

    for (let i = 0; i < input.length; i += size) {
        chunks.push(input.slice(i, i + size));
    }

    return {
        length: Math.ceil(input.length / size),
        pages: chunks
    }
}

type Decorated = {
    length: number
    lines: DecorationType[][]
}

const decorate = (decorations: DecorationType[]): Decorated => {
    const chunks = [];

    let size = 1;

    for (let i = 0; i < decorations.length; i += size - 1) {
        chunks.push(decorations.slice(i, i + size));
        size++;
    }

    return {
        length: Math.ceil(decorations.length / size),
        lines: chunks
    }
}

type TreeBodyType = {
    decorations: DecorationType[]
}

const TreeBody = ({ decorations }: TreeBodyType) => {
    const [pageIndex, setPageIndex] = useState(0);

    // height / 100 * 57은 Firefox 반응형 디자인 모드를 이용하여 발견한 최적 높이
    // https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html
    const { height } = useWindowSize();
    const treeHeight = height / 100 * 57;

    const paginator = paginate(decorations, 10);

    const decorated = decorate(paginator.pages[pageIndex]);

    return (
        <Flex bgImage={treeImage} h={treeHeight} bgPos="center" bgSize="contain" bgRepeat="no-repeat" align="center" justify="space-between">
            <IconButton
                disabled={pageIndex === 0}
                aria-label="Previous page"
                bgColor="transparent"
                onClick={() => setPageIndex(pageIndex - 1)}
                icon={<ArrowLeftIcon />}
            />
            <Flex h="85%" direction="column" justify="space-between" align="center">
                {
                    decorated.lines.map((value, index) => (
                        <HStack key={index} justify="center" spacing={7}>
                            {value.map(item => <Decoration key={item.idx} idx={item.idx} imageUrl={item.imageUrl} nickname={item.nickname} />)}
                        </HStack>
                    ))
                }
                <Card as={Flex} fontSize={["16px", "20px"]} bgColor="whiteAlpha.800" direction="row">
                    {
                        [...Array(paginator.length).keys()].map(
                            item => item === pageIndex ? <Text key={item} fontWeight="bold" color="brand.santaSock" px={3} py={1}>{item + 1}</Text> :
                                <Text key={item} px={3} py={1}>{item + 1}</Text>
                        )
                    }
                </Card>
            </Flex>
            <IconButton
                disabled={pageIndex === paginator.length - 1}
                aria-label="Next page"
                bgColor="transparent"
                onClick={() => setPageIndex(pageIndex + 1)}
                icon={<ArrowRightIcon />}
            />
        </Flex>
    )
}

export default TreeBody