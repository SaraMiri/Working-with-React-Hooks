import React from "react"
import ReactDOM from "react-dom"
import State from "./State"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <State/>
      <hr/>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement)