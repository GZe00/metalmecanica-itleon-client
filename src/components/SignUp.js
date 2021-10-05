import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import styled from 'styled-components';

//Consulta a la DB
import loginService from '../services/userLoginService.js';

import '../Fonts.css';



const Title = styled.div`
        text-align:center;
    `;

const Buttons = styled.div`
        display: flex;
        justify-content: row-reverse;
        justify-content: center;
        flex-wrap: wrap;
        margin: 15px;
        button{
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

const Validation = styled.div`
        p{
            text-align: center;
            color: red;
        }
        `;

const SignUp = props => {
    
    const [authUser, setAuthUser] = useState();
    const [login, setLogin] = useState();
    
    
    const validate = Yup.object({
        email: Yup.string()
            .email('Correo inválido')
            .required('Ingresa tu correo'),
        password: Yup.string()
            .required('Ingresa tu contraseña')
    });

    const authentication = ({...data}) => {
        props.dispatch({
            type: data
        })
    }
    
    
    useEffect(() => {
        
        if (authUser === undefined ) {
            setLogin(false);
            return null
        }if (!authUser) {
            console.log(`Correo o contraseña incorrecta, revisa nuevamente.`)
            setLogin(undefined);
        } else {
            // console.log(`Bienvenido(a) ${authUser[0].names} ${authUser[0].lastnames}`);
            // console.log(authUser[0])
            setLogin(true);
            authentication(authUser[0])
            
        }if (login === undefined){
            setLogin(false);
        }

    }, [authUser]);

    

    return (

        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={validate}
                onSubmit={async values => {
                    const data = await loginService(values);
                    if(data && values.password === data[0].password){
                        setAuthUser(data);
                    }else{
                        setAuthUser(false);
                    }
                }}
            >

                {formik => (
                    <div>
                        <Title><h3>Iniciar Sesión</h3></Title>
                        <Form>
                            <TextField label="" name="email" type="email" placeholder="Correo Institucional" />
                            <TextField label="" name="password" type="password" placeholder="Constraseña" />
                            <Buttons>
                                <button className="on" type="submit">Iniciar</button>
                                <button className="reset" type="reset">Cancelar</button>
                            </Buttons>
                        </Form>
                    </div>
                )}
            </Formik>
            {
                login === undefined ? <Validation> <p>Correo o contraseña incorrecta, intente nuevamente.</p> </Validation> : null
            }

        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: state.loggin
    }
}

export default connect(mapStateToProps)(SignUp)
// export default SignUp;