import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FieldInput from '../../FieldInput';
import Select from '../../Select';

import styled from 'styled-components';

import { CgAddR } from '@react-icons/all-files/cg/CgAddR';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Format = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Buttons = styled.div`
    Button{
        margin: 0 5px 55px 5px;
}
`;

const EducationalBackground = () => {

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

    const educationaLevels = [
        { key: '--', value: '' },
        { key: 'Licenciatura', value: 'L' },
        { key: 'Maestría', value: 'M' },
        { key: 'Especialidad', value: 'E' },
        { key: 'Doctorado', value: 'D' }
    ]

    return (
        <Formik
            initialValues={{
                level: '',
                nameSpecialty: '',
                institution: '',
                year: '',
                license: ''
            }}
        // validationSchema={validate}
        // onSubmit={(values) => {
        //     console.log(values)
        // }}
        >
            {formik => (
                <>
                    <h4>2. Formación Acádemica</h4>
                    <Form>
                        <Format>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <th>Nivel</th>
                                        <th>Nombre (incluir especialidad)</th>
                                        <th>Institución y país</th>
                                        <th>Año de obtención</th>
                                        <th>Cédula Profesional</th>
                                    </tr>
                                    <tr>
                                        <td><Select
                                            name='gender'
                                            options={educationaLevels} /></td>
                                        <td><FieldInput label="" name="nameSpecialty" type="text" /></td>
                                        <td><FieldInput label="" name="institution" type="text" /></td>
                                        <td><FieldInput label="" name="year" type="text" /></td>
                                        <td><FieldInput label="" name="license" type="text" /></td>
                                    </tr>
                                </tbody>
                            </Table>

                            <CgAddR variant="warning"/>

                            <Buttons>
                                <Button variant="success" type="submit">Guardar</Button>
                                <Button variant="warning" type="reset">Editar</Button>
                            </Buttons>
                        </Format>
                    </Form>
                </>
            )}
        </Formik >
    )
}

export default EducationalBackground
