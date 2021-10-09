import React, {useState} from "react";

//Modal
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Help = ({title, description}) => {
  //Modal

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* Funcion para regresar el primer npmbre y primer apellido */}
          <Modal.Title>{`${title}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {
             description
         }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Help;
