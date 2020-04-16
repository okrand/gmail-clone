import React, { useEffect, useState } from "react"
import { Email } from "../LineItem/LineItem"
import { Segment, List, Label } from "semantic-ui-react"

const getTagsFromEmails = (emails: Email[]) => {
  const tags: string[] = []
  emails.forEach((email) => {
    email.tags.forEach((tag) => tags.indexOf(tag) === -1 && tags.push(tag))
  })
  return tags
}

interface LeftBarProps {
  emails: Email[]
  setFilterBy: (tag: string) => void
}
const LeftBar = (props: LeftBarProps) => {
  const { emails, setFilterBy } = props

  const [availableTags, setAvailableTags] = useState<string[]>([])
  useEffect(() => {
    setAvailableTags(getTagsFromEmails(emails))
  }, [emails])
  const listOfTags = availableTags.map((tag, index) => (
    <List.Item key={index} as="a" onClick={() => setFilterBy(tag)}>
      <Label tag>{tag}</Label>
    </List.Item>
  ))
  return (
    <Segment inverted>
      <List inverted divided relaxed>
        <List.Item as="a" onClick={() => setFilterBy("")}>
          <Label tag>Inbox</Label>
        </List.Item>
        {listOfTags}
      </List>
    </Segment>
  )
}

export default LeftBar
