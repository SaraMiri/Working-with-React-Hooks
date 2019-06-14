import React from "react"
import ReactDOM from "react-dom"
import State from "./State"
import Effect from "./Effect"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <State/>
      <hr/>
      <Effect/>
      <hr/>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement)