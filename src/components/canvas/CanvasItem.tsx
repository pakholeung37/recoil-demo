import React, { useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { itemWithId } from "../../recoil/selectors"
import { createShape } from "../shapes"

const CanvasItem: React.FC<{ id: number }> = ({ id }) => {
  const [itemSnapshot, setItemSnapshot] = useState<>(null)
  const itemState = useRecoilValue(itemWithId(id))
  const Shape = createShape(itemState)
  return <Shape {...itemState} />
}

export default CanvasItem
