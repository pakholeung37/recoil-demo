import React from "react"
import { RecoilRoot } from "recoil"
import "./App.css"
import LeftPanel from "./components/left-panel/LeftPanel"
import RightPanel from "./components/right-panel/RightPanel"
import Canvas from "./components/canvas/Canvas"

function App() {
  return (
    <RecoilRoot>
      <div className="main">
        <div className="left-panel-container">
          <LeftPanel></LeftPanel>
        </div>
        <div className="canvas-container">
          <Canvas></Canvas>
        </div>
        <div className="right-panel-container">
          <RightPanel></RightPanel>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App
