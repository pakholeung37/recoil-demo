import React from "react"
import Element, { ElementProps } from "./Element"

type ImageProps = ElementProps &
  Partial<{
    uri: string
  }>
export default function Image({ width, height, uri }: ImageProps) {
  return (
    <Element width={width} height={height}>
      <img src={uri}></img>
    </Element>
  )
}
