import { selector } from "recoil"
import { ElementProps } from "../components/shapes/Element"
import { memoize } from "../utils"
import { privateItemStateWithId } from "./atoms"

export const itemWithId = memoize(id =>
  selector<ElementProps>({
    key: `item${id}`,
    get: ({ get }) => {
      const state = get(privateItemStateWithId(id))
      return state
    },
    set: ({ set }, newValue) => {
      const state = privateItemStateWithId(id)
      set(state, newValue)
    },
  }),
)
