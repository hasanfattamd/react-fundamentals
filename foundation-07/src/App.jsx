import './App.css'
import { useState } from "react"
import ManualForm from './ManualForm.jsx'
import HookForm from "./HookForm.jsx"


function App() {

  const [tab, setTab] = useState('manual')
  return (
    <>
      <div>
        <div className="shell">
          <h1>Job Application</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eum.</p>
        </div>
        <div className="tab">
          <button style={{ backgroundColor: "green" }, { border: "none" }, { "padding": "10px 10px" }} onClick={() => setTab("manual")}>Controlled-Manual</button>
          <button onClick={() => setTab("rhf")}>React Hook form</button>
        </div>
        <h1>Getting started with React</h1>
        {tab === 'manual' ? <ManualForm /> : <HookForm />}
      </div >
    </>
  )
}

export default App
