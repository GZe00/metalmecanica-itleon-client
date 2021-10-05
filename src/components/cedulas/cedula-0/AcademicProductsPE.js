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

const AcademicProductsPE = () => {

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
                    <h4>6. Productos académicos relevantes en los últimos cinco (5) años, relacionados con el PE</h4>
                    <p>Incluir los datos relevantes, tales como: para publicaciones titulo, autor(es), dónde se publicó o presentó, fecha de publicación o presentación, etc.; para patentes o desarrollos tecnológicos, tipo, número de registro, alcance, etc.</p>
                    <Form>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <th>Número</th>
                                    <th>Descripción del producto académico</th>
                                </tr>
                                <tr>
                                    <td><FieldInput label="" name="typeTrain" type="text" /></td>
                                    <td><FieldTextArea label="" name="institution" type="text" /></td>
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

export default AcademicProductsPE
