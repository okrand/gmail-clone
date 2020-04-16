import React from "react"
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react"
interface ModalProps {
  subject: string
  body: string
  trigger: JSX.Element
}

const EmailModal = (props: ModalProps) => {
  const { subject, body, trigger } = props
  return (
    <Modal trigger={trigger}>
      <Modal.Header>{subject}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}
export default EmailModal
