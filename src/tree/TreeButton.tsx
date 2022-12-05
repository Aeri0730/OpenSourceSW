import CopyButton from "./CopyButton"
import DecorateButton from "./DecorateButton"

type TreeButtonType = {
    treeId: number
    userId: number | undefined
}

const TreeButton = ({ treeId, userId }: TreeButtonType) => {
    if (treeId == userId) {
        return (
            <CopyButton url={window.location.href} />
        )
    }
    else {
        return (
            <DecorateButton userId={userId} />
        )
    }
}

export default TreeButton