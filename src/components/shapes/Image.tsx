import React from "react"
import Element, { ElementProps } from "./Element"

type ImageProps = ElementProps &
  Partial<{
    uri: string
  }>
export default function Image({ uri, ...props }: ImageProps) {
  return (
    <Element {...props}>
      <img src={uri}></img>
    </Element>
  )
}
