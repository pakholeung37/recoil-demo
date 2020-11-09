import { useCallback, useEffect, useState } from "react"

type Origin = {
  clientX: number
  clientY: number
  metaKey?: boolean
  shiftKey?: boolean
}
type Position = { x: number; y: number }
interface MoveFunc {
  (opt: {
    status: string
    isMoving: boolean
    offset: Position
    origin: Origin
  }): void
}
export default function useMove(func: MoveFunc) {
  const [isMoving, setIsMoving] = useState(false)
  const [origin, setOrigin] = useState<Origin>({ clientX: 0, clientY: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const callback = useCallback(
    (status: string, isMoving: boolean, origin: Origin, offset: Position) => {
      func({ status, isMoving, origin, offset })
    },
    [func],
  )

  const handleMouseDown = useCallback(
    ({ clientX, clientY, metaKey, shiftKey }: MouseEvent) => {
      const origin = { clientX, clientY, metaKey, shiftKey }
      setIsMoving(true)
      setOrigin(origin)
      callback("start", true, origin, offset)
    },
    [callback, offset],
  )

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      if (!isMoving) {
        return
      }
      const offset = {
        x: clientX - origin.clientX,
        y: clientY - origin.clientY,
      }
      callback("moving", true, origin, offset)
    },
    [callback, isMoving, origin],
  )
  const handleMouseUp = useCallback(() => {
    if (!isMoving) {
      return
    }
    setIsMoving(false)
    setOffset({ x: 0, y: 0 })
    callback("end", false, origin, offset)
  }, [callback, isMoving, offset, origin])

  useEffect(() => {
    function addEventListeners() {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }
    function removeEventListeners() {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
    if (isMoving) {
      addEventListeners()
    } else {
      removeEventListeners()
    }

    return removeEventListeners
  }, [handleMouseMove, handleMouseUp, isMoving])

  return {
    onMouseDown: handleMouseDown,
  }
}
