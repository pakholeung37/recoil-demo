import Rectangle from "./Rectangle"
import Ellipse from "./Ellipse"
import Image from "./Image"

export type ShapeType = keyof typeof shapes
const shapes = {
  rect: Rectangle,
  ellipse: Ellipse,
  image: Image,
}

function createShape(shape: { type: keyof typeof shapes }) {
  const { type } = shape
  return shapes[type]
}
export { Rectangle, Ellipse, createShape }
