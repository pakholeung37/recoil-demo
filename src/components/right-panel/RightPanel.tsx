import React from "react"
import { useRecoilState } from "recoil"
import { backgroundColorState } from "../../recoil/atoms"
const RightPanel: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useRecoilState(
    backgroundColorState,
  )
  return (
    <div className="right-panel">
      <div className="document-input">
        document:
        <div>
          color:{" "}
          <input
            type="text"
            value={backgroundColor}
            onChange={e => setBackgroundColor(e.target.value)}
          />
        </div>
      </div>
      <div className="item-info">
        <div>
          x:
          <input type="text" />
        </div>
        <div>
          y:
          <input type="text" />
        </div>
        <div>
          label:
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default RightPanel
