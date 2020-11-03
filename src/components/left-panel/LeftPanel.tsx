import React from "react"

const NewItemButton: React.FC = () => {
  return <button className="new-item-button"></button>
}
const LeftPanel: React.FC = () => {
  return (
    <div className="left-panel">
      <div className="new-item-button-group">
        <NewItemButton></NewItemButton>
        <NewItemButton></NewItemButton>
        <NewItemButton></NewItemButton>
      </div>
    </div>
  )
}

export default LeftPanel
