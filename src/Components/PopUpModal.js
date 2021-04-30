import React from 'react'
import { Button, Modal, Form } from "react-bootstrap";

function PopUpModal(props) {
  return (
    <div>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered="true"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Type here...."
          
          />
        </Modal.Body>
        <Modal.Footer style={{ marginBottom: "20px" }}>
          <Button
            style={{
              marginRight: "20px",
              padding: "0px 35px",
              background: "rgb(1, 202, 202)",
              border: "none",
            }}
          >
            Create
          </Button>
          <Button
            style={{ padding: "0px 35px" }}
            variant="light"
            onClick={props.onHide}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PopUpModal
