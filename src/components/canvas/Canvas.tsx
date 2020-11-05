import React, { useRef } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { itemIdsState, backgroundColorState } from "../../recoil/atoms"
import CanvasItem from "./CanvasItem"
const Canvas: React.FC = () => {
  const ref = useRef(null)
  const itemIds = useRecoilValue(itemIdsState)
  const backgroundColor = useRecoilValue(backgroundColorState)
  return (
    <div className="canvas" ref={ref} style={{ backgroundColor }}>
      {itemIds.map(id => (
        <CanvasItem key={`item-${id}`} id={id}></CanvasItem>
      ))}
    </div>
  )
}

export default Canvas
