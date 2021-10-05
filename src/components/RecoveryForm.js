import React from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import styled from 'styled-components';
import * as Yup from 'yup';
import "../Fonts.css"

    const Title = styled.div`
        text-align:center;
    `;

    const Buttons = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 15px;
        button{
            width: 150px;
            font-weight: 400;
            font-weight: bold;
            font-family: 'Andada Pro', serif;
            background-color: #FFFFFF00;
            padding: 7px 10px;
            margin: 4px 10px;
            border: none;
            border-bottom: 2px solid #000;
        }
        button:hover {
            cursor: pointer;
        }

        button:active {
            transform: translateY(4px);
        }
        .on{
            color: rgb(42, 148, 0);
            font-size: 1rem;
            border-bottom: 2px solid rgb(42, 148, 0);
            margin-left: 15px;
        }

        .reset{
            color: rgb(148, 0, 0);
            font-size: 1rem;
            border-bottom: 2px solid rgb(148, 0, 0);
        }
    `;

const RecoveryForm = () => {
    const validate = Yup.object({
        email: Yup.string()
            .email('Correo inválido')
            .required('Ingresa tu correo'),
    });

    return (
        <Formik
            initialValues={{
                email: '',
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => (
                <div>
                    <Title><h2>Recuperación de contraseña</h2></Title>
                    <Form>
                        <TextField label="" name="email" type="email" placeholder="Correo Institucional registrado" />
                        <Buttons>
                            <button className="on" type="submit">Enviar</button>
                            <button className="reset" type="reset">Cancelar</button>
                        </Buttons>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default RecoveryForm;