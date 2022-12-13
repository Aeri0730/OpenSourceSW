import { useAtomValue } from "jotai"
import { userAtom } from "../backend/User"
import CopyButton from "./CopyButton"
import DecorateButton from "./DecorateButton"

type TreeButtonType = {
    treeId: number
    userId?: number
}

const TreeButton = ({ treeId }: TreeButtonType) => {
    const user = useAtomValue(userAtom);

    return (
        treeId == user.userIdx ? <CopyButton url={window.location.href} /> : <DecorateButton />
    )
}

export default TreeButton