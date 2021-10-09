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

const EngineeringDesignExperience = () => {
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

  const title = "8. Experiencia en diseño ingenieril";
  const description =
    "Ingrese la clave o identificador del curso de LICENCIATURA, impartido durante el periodo escolar 2014-2015, incluyendo el número de horas totales de cada curso.";

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
              Anotar el tipo de experiencia en diseño, el lugar donde se
              realizó, el número de años y, en su caso, asi alguna otra
              información relevante.
            </p>
            <Form>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th>Organismo</th>
                    <th>Periodo (años)</th>
                    <th>Nivel de experiencia</th>
                  </tr>
                  <tr>
                    <td>
                      <FieldInput label="" name="typeTrain" type="text" />
                    </td>
                    <td>
                      <FieldTextArea label="" name="institution" type="text" />
                    </td>
                    <td>
                      <FieldInput label="" name="experiencie" type="text" />
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

export default EngineeringDesignExperience;
