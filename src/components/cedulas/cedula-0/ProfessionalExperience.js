import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FieldInput from "../../FieldInput";
import FieldTextArea from "../../FieldTextArea";

import { MdLiveHelp } from "@react-icons/all-files/md/MdLiveHelp";
import Help from "../../Help";

import styled from "styled-components";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Title = styled.div`
  display: flex;
  align-items: center;
  height: max-content;
  h4 {
    margin-right: 20px;
    margin-bottom: 0;
  }
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  Button {
    margin: 0 5px 55px 5px;
  }
`;

const ProfessionalExperience = () => {
  const [helpShow, setHelpShow] = useState(false);

  const handleShow = () => (helpShow ? setHelpShow(false) : setHelpShow(true));

  // const validate = Yup.object({
  // names: Yup.string(),
  // lastnames: Yup.string(),
  // email: Yup.string(),
  // birthday: Yup.string(),
  // controlnumber: Yup.number(),
  // password: Yup.string(),
  // confirmPassword: Yup.string(),
  // gender: Yup.string(),
  // typeuser: Yup.string(),

  // });

  const title = "7. Experiencia profesional (no académica)";
  const description =
    "Ingrese el nombre de la(s) instancia(s) a la(s) que pertence el profeso (Colegios y asociaciones profesionales, Cámaras empresariales, etc.).";

  return (
    <>
      <Formik
        initialValues={{
          typeTrain: "",
          institution: "",
          year: "",
          hours: "",
        }}
        // validationSchema={validate}
        // onSubmit={(values) => {
        //     console.log(values)
        // }}
      >
        {(formik) => (
          <>
            <Title>
              <h4>{`${title}`} </h4>
              <MdLiveHelp style={{cursor: 'pointer '}} onClick={handleShow} />
            </Title>
            <p>
              Anotar las actividades o puestos desempeñados en orden cronológico
              decreciente: primero la más reciente (o actual) y de último la más
              antigüa.
            </p>
            <Form>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th>Actividad o puesto</th>
                    <th>Organización o empresa</th>
                    <th>De: (mes y año)</th>
                    <th>A: (mes y año)</th>
                  </tr>
                  <tr>
                    <td>
                      <FieldInput label="" name="typeTrain" type="text" />
                    </td>
                    <td>
                      <FieldInput label="" name="typeTrain" type="text" />
                    </td>
                    <td>
                      <FieldInput label="" name="typeTrain" type="text" />
                    </td>
                    <td>
                      <FieldInput label="" name="typeTrain" type="text" />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Buttons>
                <Button variant="success" type="submit">
                  Guardar
                </Button>
                <Button variant="warning" type="reset">
                  Editar
                </Button>
              </Buttons>
            </Form>
          </>
        )}
      </Formik>
      {helpShow ? <Help title={title} description={description} /> : null}
    </>
  );
};

export default ProfessionalExperience;
