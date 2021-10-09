import React, { useState } from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import styled from "styled-components";
import Select from "./Select";

import Spinner from "./Spinner";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

//Servicio de registro hacia la DB
import createUser from "../services/userRegisterService";

const StudentOrTeach = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
  margin: 10px 0;
`;

const Fomulario = styled.div`
  min-width: 100%;
`;

const Buttons = styled.div`
  text-align: center;
  button {
    width: 150px;
    font-weight: 400;
    font-weight: bold;
    font-family: "Andada Pro", serif;
    background-color: #ffffff00;
    padding: 7px 10px;
    margin: 4px 10px;
    border: none;
    border-bottom: 2px solid #000;
  }
  button:hover {
    cursor: pointer;
  }

  button:active {
    transform: translateY(4px);
  }
  .on {
    color: rgb(42, 148, 0);
    font-size: 1rem;
    border-bottom: 2px solid rgb(42, 148, 0);
    margin-left: 15px;
  }

  .reset {
    color: rgb(148, 0, 0);
    font-size: 1rem;
    border-bottom: 2px solid rgb(148, 0, 0);
  }
`;

const RegisterForm = () => {
  const dateMax = () => new Date().toISOString().split("T")[0];

  const validate = Yup.object({
    names: Yup.string()
      .max(20, "Acorta tus nombres")
      // .min(3, 'Nombre demasiado corto')
      .required("Nombre es requerido"),
    lastnames: Yup.string()
      .max(20, "Acorta tus apellidos")
      // .min(3, 'Apellido demasiado corto')
      .required("Apellido es requerido"),
    email: Yup.string()
      .email("Ingrese un correo válido")
      // .max(22, 'Correo inválido')
      // .min(22, 'Ingrese un correo válido')
      .required("Correo es obligatorio"),
    birthday: Yup.string().required("Ingrese su fecha de nacimiento"),
    controlnumber: Yup.number()
      .max(30000000, "Número de control inválido")
      .required("Número de control obligatorio"),
    password: Yup.string()
      .min(8, "Contraseña debe ser mínima de 8 carácteres")
      .required("Contraseña es obligatoria"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Contraseñas no coinciden")
      .required("Confirma tu contraseña"),
    gender: Yup.string().required("Seleccione una opción"),
    typeuser: Yup.string().oneOf(["student", "teach"]),
  });

  const genders = [
    { key: "--", value: "" },
    { key: "Masculino", value: "M" },
    { key: "Femenino", value: "F" },
    { key: "Prefiero no responder", value: "N" },
  ];

  const [data, setData] = useState(undefined);

  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // console.log(data)

  return (
    <>
      <Formik
        initialValues={{
          names: "",
          lastnames: "",
          controlnumber: "",
          email: "",
          password: "",
          birthday: "",
          gender: "",
          typeuser: "",
        }}
        validationSchema={validate}
        onSubmit={async (values) => {
          setShow("LOADING");
          setData({
            name: values.names,
            lastname: values.lastnames,
          });
          await createUser(values);
          setShow("FINISH");
        }}
      >
        {(formik) => (
          <Fomulario>
            <Title>
              <h3>Registro</h3>
            </Title>
            <Form>
              <TextField
                label=""
                name="names"
                type="text"
                placeholder="Nombre(s)*"
              />
              <TextField
                label=""
                name="lastnames"
                type="text"
                placeholder="Apellidos(s)*"
              />
              <TextField
                label=""
                name="controlnumber"
                type="number"
                placeholder="Número de control*"
              />
              <TextField
                label=""
                name="email"
                type="email"
                placeholder="Correo Insitucional*"
              />
              <TextField
                label="Fecha de Nacimiento"
                name="birthday"
                type="date"
                min="1950-01-01"
                max={dateMax()}
              />
              <TextField
                label=""
                name="password"
                type="password"
                placeholder="Contraseña"
              />
              <TextField
                label=""
                name="confirmPassword"
                type="password"
                placeholder="Confirmar contraseña"
              />

              <Select label="Género" name="gender" options={genders} />

              <StudentOrTeach>
                <p>Soy: </p>
                <TextField
                  label="Alumno"
                  type="radio"
                  name="typeuser"
                  value="student"
                  id=""
                  placeholder="Alumno"
                  required
                />
                <TextField
                  label="Docente"
                  type="radio"
                  name="typeuser"
                  value="teach"
                  id=""
                  placeholder="Docente"
                  required
                />
              </StudentOrTeach>

              <Buttons>
                <button className="on" type="submit">
                  Enviar
                </button>
                <button className="reset" type="reset">
                  Cancelar
                </button>
              </Buttons>
            </Form>
          </Fomulario>
        )}
      </Formik>
      {show === "LOADING" ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <Spinner />
          </Modal.Body>
        </Modal>
      ) : null}
      {show === "FINISH" ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            {/* Funcion para regresar el primer npmbre y primer apellido */}
            <Modal.Title>{`Bienvenid@ ${data.name} ${data.lastname}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Se ha enviado un link de confirmación al correo registrado.
            Verifique en su bandeja de entrada o en Spam dicho correo para
            iniciar sesión. En caso de no haber recibido el correo intente de
            nuevo con el registro.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="info"
              href="https://gmail.com/"
              target="_blank"
              role="button"
            >
              Ir a GMail
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
};

export default RegisterForm;
