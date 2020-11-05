import { ElementProps } from "../components/shapes/Element"

export const shapes = {}
export const defaultShape: ElementProps = {
  type: "rect",
  x: 0,
  y: 0,
  label: "Recoil",
  fill: "#e0e1e8",
  width: 200,
  height: 100,
}
export function getDefaultShape(id: number) {
  return defaultShape
}
