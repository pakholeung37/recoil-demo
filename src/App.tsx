import React from "react"
import { RecoilRoot } from "recoil"
import "./App.css"
import LeftPanel from "./components/left-panel/LeftPanel"
import RightPanel from "./components/right-panel/RightPanel"
import Sketch from "./components/sketch/Sketch"

function App() {
  return (
    <RecoilRoot>
      <div className="main">
        <div className="left-panel-container">
          <LeftPanel></LeftPanel>
        </div>
        <div className="sketch-container">
          <Sketch></Sketch>
        </div>
        <div className="right-panel-container">
          <RightPanel></RightPanel>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App
