import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FieldTextArea from '../../FieldTextArea';

import styled from 'styled-components';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const div = styled.div`
    p{
            span{
                font-weight: bold;
                font-style: italic;
            }
    }
    
`;

const Buttons = styled.div`
    Button{
        margin: 0 5px 55px 5px;
}
`;

const ParticipationUpdateActivitiesPE = () => {

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
                <div>
                    <h4>12. Participación en el análisis o actualización del PE, o en actividades extracurriculares relacionadas con el PE</h4>
                    <p>Con un <span>máximo de 200 palabras</span>, reseñe cuál ha sido su <span>participación en actividades relevantes del PE</span>, tales como: diseño el PE, diseño de asignatura(s) del PE, análisis de indicadores del PE, participación en cuerpos colegiados del PE, participación en grupos de mejora continua del PE, etc.; <span>en actividades extracurriculares relacionadas con el PE</span>; o en <span>ambos tipos de actividades</span>.</p>
                    <Form>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td><FieldTextArea label="" name="typeTrain" type="text" /></td>
                                </tr>
                            </tbody>
                        </Table>
                        <Buttons>
                            <Button variant="success" type="submit">Guardar</Button>
                            <Button variant="warning" type="reset">Editar</Button>
                        </Buttons>
                        {/* <button className="on" type="submit">Guardar</button> */}
                        {/* <button className="reset" type="reset">Editar</button> */}
                    </Form>
                </div>
            )}
        </Formik >
    )
}

export default ParticipationUpdateActivitiesPE
