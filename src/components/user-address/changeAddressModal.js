import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

// for style
import "./style.css";

function ChangeAddressModal({ setShow, show }) {
  const handleClose = () => setShow(false);

  const [name, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <Modal
      show={show}
      onClose={() => setShow(false)}
      className="change-address-modal"
    >
      <div className="inner-modal-wrapper">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button> */}
        </Modal.Footer>
      </div>
    </Modal>
  );
}
export default ChangeAddressModal;
