import React, { useState } from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FieldInput from '../../FieldInput';

import { MdLiveHelp } from "@react-icons/all-files/md/MdLiveHelp";
import Help from "../../Help";

import styled from 'styled-components';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Title = styled.div`
  display: flex;
  align-items: center;
  height: max-content;
  h4 {
      width: 95%;
    margin-right: 20px;
    margin-bottom: 0;
  }
  margin-bottom: 10px;
`;

const Buttons = styled.div`
    Button{
        margin: 0 5px 55px 5px;
}
`;

const ProfessionalInvolvement = () => {

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

    const title = "10. Membresía o participación en Colegios, Cámaras, asociaciones científicas o algún otro tipo de organismo profesional";
  const description =
    "Ingrese la clave o identificadr del tipo de curso impartido durante el periodo escolar 2014-2015, usando la siguiente nomenclatura: Educación Continua (ECO), Otro (OTR) (especificar).";

    return (
        <>
        <Formik
            initialValues={{
                typeTrain: '',
                institution: '',
                year: '',
                hours: '',
            }}
        // validationSchema={validate}
        // onSubmit={(values) => {
        //     console.log(values)
        // }}
        >
            {formik => (
                <>
                    <Title>
              <h4>{`${title}`} </h4>
              <MdLiveHelp style={{cursor: 'pointer '}} onClick={handleShow} />
            </Title>
                    <p>Anotar el nombre del organismo, el tipo de membresía o participación, el número de años y, en su caso, alguna otra información relevante.</p>
                    <Form>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <th>Organismo</th>
                                    <th>Periodo (años)</th>
                                    <th>Nivel de participación</th>
                                </tr>
                                <tr>
                                    <td><FieldInput label="" name="typeTrain" type="text" /></td>
                                    <td><FieldInput label="" name="institution" type="text" /></td>
                                    <td><FieldInput label="" name="year" type="text" /></td>
                                </tr>
                            </tbody>
                        </Table>
                        <Buttons>
                            <Button variant="success" type="submit">Guardar</Button>
                            <Button variant="warning" type="reset">Editar</Button>
                        </Buttons>
                    </Form>
                </>
            )}
        </Formik >
        {helpShow ? <Help title={title} description={description} /> : null}
        </>
    )
}

export default ProfessionalInvolvement
