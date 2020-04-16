import React, { useEffect, useState } from "react"
import "./App.css"
import EmailsList from "./EmailsList/EmailsList"
import LeftBar from "./LeftBar/LeftBar"
import { Email } from "./LineItem/LineItem"
import mockEmails from "./emails"

const App = () => {
  const [emails, setEmails] = useState<Email[]>([])
  useEffect(() => {
    setEmails(mockEmails)
  }, [])
  return (
    <div className="App">
      <div className="App-left">
        <LeftBar />
      </div>
      <div className="App-list">
        <EmailsList emails={emails} setEmails={setEmails} />
      </div>
    </div>
  )
}

export default App
