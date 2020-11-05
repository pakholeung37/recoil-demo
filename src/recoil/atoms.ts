import { atom } from "recoil"
import { memoize } from "../utils"
import { getDefaultShape } from "./defaults"

export const selectedIdsState = atom<number[]>({
  key: "selectedIdsState",
  default: [],
})

export const itemIdsState = atom<number[]>({
  key: "itemIdsState",
  default: [],
})

export const backgroundColorState = atom({
  key: "backgroundColorState",
  default: "red",
})

export const privateItemStateWithId = memoize(id =>
  atom({
    key: `private-item${id}`,
    default: getDefaultShape(id),
  }),
)
