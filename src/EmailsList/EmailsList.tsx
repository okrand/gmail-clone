import React, { useEffect, useState } from "react"
import LineItem, { Email } from "../LineItem/LineItem"
import { Button, Icon, List, Segment } from "semantic-ui-react"

interface EmailsListProps {
  filterBy: string
  emails: Email[]
  setEmails: (newEmails: Email[]) => void
}

const EmailsList = (props: EmailsListProps) => {
  const [selectedEmails, setSelectedEmails] = useState<Email[]>([])
  const { emails, setEmails, filterBy } = props
  const onChecked = (email: Email) => {
    setSelectedEmails([...selectedEmails, email])
  }
  const onUnchecked = (email: Email) => {
    setSelectedEmails([
      ...selectedEmails.filter((e: Email) => e.id !== email.id),
    ])
  }
  useEffect(() => setSelectedEmails([]), [filterBy])

  const lineItems =
    emails.length > 0 &&
    emails
      .filter(
        (email) => !(filterBy.length > 0 && email.tags.indexOf(filterBy) === -1)
      )
      .map((email: Email, index: number) => {
        return (
          <LineItem
            key={index}
            email={email}
            onChecked={() => onChecked(email)}
            onUnchecked={() => onUnchecked(email)}
          />
        )
      })
  return (
    <Segment inverted>
      <List inverted divided relaxed>
        <List.Item>
          <Button
            icon
            disabled={selectedEmails.length === 0}
            onClick={() => {
              setEmails(
                emails.filter((email) => !selectedEmails.includes(email))
              )
              setSelectedEmails([])
            }}
          >
            <Icon name="trash" size="large" />
          </Button>
        </List.Item>
        {lineItems}
      </List>
    </Segment>
  )
}

export default EmailsList
