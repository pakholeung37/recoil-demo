import React from "react"

const RightPanel: React.FC = () => {
  return (
    <div className="right-panel">
      <div className="document-input">
        document:
        <div>
          color: <input type="text" />
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
