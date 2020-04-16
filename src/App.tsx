import React, { useState } from "react"
import "./App.css"
import EmailsList from "./EmailsList/EmailsList"
import LeftBar from "./LeftBar/LeftBar"
import { Email } from "./LineItem/LineItem"
import mockEmails from "./emails"

const App = () => {
  const [emails, setEmails] = useState<Email[]>(mockEmails)
  const [filterTag, setFilterTag] = useState("")
  return (
    <div className="App">
      <header className="App-header" />
      <div className="App-left">
        <LeftBar emails={emails} setFilterBy={setFilterTag} />
      </div>
      <div className="App-list">
        <EmailsList
          emails={emails}
          setEmails={setEmails}
          filterBy={filterTag}
        />
      </div>
    </div>
  )
}

export default App
