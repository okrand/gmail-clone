import React from "react"
import LineItem, { Email } from "../LineItem/LineItem"
import { Dimmer, List, Loader, Segment } from "semantic-ui-react"

interface EmailsListProps {
  emails: Email[]
  setEmails: (newEmails: Email[]) => void
}
const EmailsList = (props: EmailsListProps) => {
  const { emails, setEmails } = props
  const lineItems =
    emails.length > 0 ? (
      emails.map((email: Email, index: number) => (
        <Segment inverted key={index}>
          <List divided inverted relaxed>
            <LineItem email={email} />
          </List>
        </Segment>
      ))
    ) : (
      <Dimmer active>
        <Loader size="big">Loading</Loader>
      </Dimmer>
    )
  return <ul className="list-group">{lineItems}</ul>
}

export default EmailsList
