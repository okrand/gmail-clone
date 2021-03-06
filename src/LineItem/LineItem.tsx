import React, { useState, useEffect } from "react"
import "./LineItem.css"
import { Icon, Label, List, Responsive } from "semantic-ui-react"
import moment from "moment"
import EmailModal from "../Modal/Modal"

export interface Email {
  id: string
  subject: string
  sender: string
  body: string
  tags: string[]
  date: string
}

interface LineItemProps {
  email: Email
  onChecked: (email: Email) => void
  onUnchecked: (email: Email) => void
}

const LineItem = (props: LineItemProps) => {
  const { email, onChecked, onUnchecked } = props
  const [checked, setChecked] = useState(false)
  useEffect(() => setChecked(false), [email])
  const sameDay = moment(email.date).isSame(moment(), "day")
  const date = sameDay
    ? moment(email.date).format("hh:mm A")
    : moment(email.date).format("ll")
  return (
    <List.Item>
      <List.Content className="LineItem-container">
        <List.Icon
          data-testid="ListItem-check"
          className="LineItem-check"
          link
          size="big"
          name={checked ? "check circle outline" : "circle outline"}
          onClick={() => {
            !checked ? onChecked(email) : onUnchecked(email)
            setChecked(!checked)
          }}
        />
        <List.Header className="LineItem-sender">{email.sender}</List.Header>
        <EmailModal
          subject={email.subject}
          body={email.body}
          trigger={
            <List.Description as="a" className="LineItem-subject">
              {email.subject}
            </List.Description>
          }
        />
        <Responsive className="LineItem-tags" minWidth={780}>
          {email.tags.map((tag, index) => (
            <Label key={index}>
              <Icon name="tag" />
              {tag}
            </Label>
          ))}
        </Responsive>
        <Responsive minWidth={500} className="LineItem-time">
          <List.Description>{date}</List.Description>
        </Responsive>
      </List.Content>
    </List.Item>
  )
}

export default LineItem
