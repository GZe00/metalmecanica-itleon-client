import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FieldInput from "../../FieldInput";

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

const TeacherTraining = () => {
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
  const title = "3. Capacitación docente";
  const description =
    "Ingrese la categoría de contratación actual, usando la siguiente nomenclatura: Profesor de Tiempo Completo (PTC), Profesor de Medio Tiempo (PMT), Profesor por Horas (PPH), Profesor de Asignatura (PDA), Otro (OTR) (especificar).";

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
            <Form>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th>Tipo de capacitación</th>
                    <th>Institución y país</th>
                    <th>Año de obtención</th>
                    <th>Horas</th>
                  </tr>
                  <tr>
                    <td>
                      <FieldInput label="" name="typeTrain" type="text" />
                    </td>
                    <td>
                      <FieldInput label="" name="institution" type="text" />
                    </td>
                    <td>
                      <FieldInput label="" name="year" type="text" />
                    </td>
                    <td>
                      <FieldInput label="" name="hours" type="text" />
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

export default TeacherTraining;
