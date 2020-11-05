import React, { ReactNode } from "react"

export type ElementProps = Partial<{
  x: number
  y: number
  width: number
  height: number
  fill: string
  label: string
  onMouseDown: () => void
  onClick: () => void
  children: ReactNode
  type: string
}>

const Element: React.FC<ElementProps> = ({
  x,
  y,
  width,
  height,
  fill,
  label,
  onMouseDown,
  onClick,
  children,
}) => {
  return (
    <div
      style={{
        top: y,
        left: x,
        width,
        height,
        backgroundColor: fill,
      }}
      onMouseDown={onMouseDown}
      onClick={onClick}
    >
      {children}
      {label && <span>{label}</span>}
    </div>
  )
}

export default Element
