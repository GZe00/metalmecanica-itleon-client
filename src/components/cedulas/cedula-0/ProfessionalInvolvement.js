import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FieldInput from '../../FieldInput';

import styled from 'styled-components';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Buttons = styled.div`
    Button{
        margin: 0 5px 55px 5px;
}
`;

const ProfessionalInvolvement = () => {
    
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
                    <h4>10. Membresía o participación en Colegios, Cámaras, asociaciones científicas o algún otro tipo de organismo profesional</h4>
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
    )
}

export default ProfessionalInvolvement
