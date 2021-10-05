import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FieldInput from '../../FieldInput';
import FieldTextArea from '../../FieldTextArea';

import styled from 'styled-components';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Buttons = styled.div`
    Button{
        margin: 0 5px 55px 5px;
}
`;

const ProfessionalExperience = () => {
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

    return (
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
                    <h4>7. Experiencia profesional (no académica)</h4>
                    <p>Anotar las actividades o puestos desempeñados en orden cronológico decreciente: primero la más reciente (o actual) y de último la más antigüa.</p>
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
                                    <td><FieldInput label="" name="typeTrain" type="text" /></td>
                                    <td><FieldInput label="" name="typeTrain" type="text" /></td>
                                    <td><FieldInput label="" name="typeTrain" type="text" /></td>
                                    <td><FieldInput label="" name="typeTrain" type="text" /></td>
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
    )
}

export default ProfessionalExperience
