import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import LineItem from "./LineItem"

const dummyEmail = {
  id: "1",
  sender: "me@me.com",
  subject: "IMPORTANT!",
  body: "<p>v important</p>",
  tags: [],
  date: "2017-03-05T10:25:43.511Z",
}

test("it calls onChecked and onUnchecked on click", () => {
  const onChecked = jest.fn()
  const onUnchecked = jest.fn()

  render(
    <LineItem
      email={dummyEmail}
      onChecked={onChecked}
      onUnchecked={onUnchecked}
    />
  )
  const checkBox = screen.getByTestId("ListItem-check")
  fireEvent.click(checkBox)
  expect(onUnchecked).not.toBeCalled()
  expect(onChecked).toBeCalled()
  fireEvent.click(checkBox)
  expect(onUnchecked).toBeCalled()
})
