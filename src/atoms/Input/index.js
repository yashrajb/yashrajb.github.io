import React from "react"
import { Form } from "react-bootstrap"
import * as style from "./style.module.scss"

const Input = (props) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control {...props} className={style.container} />
    </Form.Group>
  )
}

export default Input
