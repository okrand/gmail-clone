import React from "react"
import LineItem, { Email } from "../LineItem/LineItem"
import { List, Segment } from "semantic-ui-react"

interface EmailsListProps {
  filterBy: string
  emails: Email[]
  setEmails: (newEmails: Email[]) => void
}
const EmailsList = (props: EmailsListProps) => {
  const { emails, setEmails, filterBy } = props
  const lineItems =
    emails.length > 0 &&
    emails
      .filter(
        (email) => !(filterBy.length > 0 && email.tags.indexOf(filterBy) === -1)
      )
      .map((email: Email, index: number) => {
        return <LineItem key={index} email={email} />
      })
  return (
    <Segment inverted>
      <List inverted divided relaxed>
        {lineItems}
      </List>
    </Segment>
  )
}

export default EmailsList
