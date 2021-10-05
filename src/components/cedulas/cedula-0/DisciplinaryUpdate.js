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

const DisciplinaryUpdate = () => {
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
                typeUpdate: '',
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
                    <h4>4. Actualización disciplinar</h4>
                    <Form>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <th>Tipo de actualización</th>
                                    <th>Institución y país</th>
                                    <th>Año de obtención</th>
                                    <th>Horas</th>
                                </tr>
                                <tr>
                                    <td><FieldInput label="" name="typeUpdate" type="text" /></td>
                                    <td><FieldInput label="" name="institution" type="text" /></td>
                                    <td><FieldInput label="" name="year" type="text" /></td>
                                    <td><FieldInput label="" name="hours" type="text" /></td>
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

export default DisciplinaryUpdate

