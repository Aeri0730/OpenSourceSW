import { atom } from "jotai";
import { LoaderFunctionArgs } from "react-router-dom";
import { fetchTree, TreeResponse } from "./Backend";

export interface Decoration {
    idx: number
    nickname: string
    imageUrl: string
}

export interface Tree {
    treeOwnerNickname: string
    decorations: Decoration[]
}

export const treeAtom = atom<Tree>({ treeOwnerNickname: "", decorations: [] });

export const treeLoader = async ({ params }: LoaderFunctionArgs) => {
    const { index } = params;

    try {
        const idx = parseInt(index!);

        const treeData = await fetchTree(idx);

        if (treeData) {
            if (treeData.isSuccess) {
                const tree: Tree = { treeOwnerNickname: treeData.treeOwnerNickname, decorations: treeData.result };

                return tree;
            }
            else {
                throw new Response(treeData.message, { status: treeData.code });
            }
        }
    }

    catch (error) {
        throw error;
    }
}