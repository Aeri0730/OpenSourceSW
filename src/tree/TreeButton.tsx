import CopyButton from "./CopyButton"
import DecorateButton from "./DecorateButton"

type TreeButtonType = {
    treeId: number
    userId?: number
}

const TreeButton = ({ treeId, userId }: TreeButtonType) => {
    return (
        treeId == userId ? <CopyButton url={window.location.href} /> : <DecorateButton userId={userId} />
    )
}

export default TreeButton