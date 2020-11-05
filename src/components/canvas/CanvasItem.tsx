import React from "react"
import { createShape } from "../shapes"

const CanvasItem: React.FC<{ id: number }> = ({ id }) => {
  const itemState = {
    type: "rect" as const,
  }
  const Shape = createShape(itemState)
  return <Shape {...itemState} />
}

export default CanvasItem
