import React from 'react';
import { ErrorMessage, useField } from 'formik';
import styled from 'styled-components';
import "../Forms.css";

const Form = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        input{
            margin: 5px 0;
            padding: 5px 0;
        }
    `;
    
    const Fields = styled.div`
        width: 100%;
        position: relative;
        .effect {
            border: 1px solid #ccc;
            padding: 7px 14px 9px;
            transition: 0.4s;
        }
        .effect~.focus-border:before,
        .effect~.focus-border:after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 0;
            height: 2px;
            transition: 0.2s;
            transition-delay: 0.2s;
        }
    
        .blue~.focus-border:before,
        .blue~.focus-border:after {
            background-color: #3399FF;
        }
    
        /* .red~.focus-border:before,
        .red~.focus-border:after {
            background-color: #ff3333;
        }
    
        .yellow~.focus-border:before,
        .yellow~.focus-border:after {
            background-color: #a09d00;
        } */
    
        .effect~.focus-border:after {
            top: auto;
            bottom: 0;
            right: auto;
            left: 0;
            transition-delay: 0.6s;
        }
    
        .effect~.focus-border i:before,
        .effect~.focus-border i:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 2px;
            height: 0;
            transition: 0.2s;
        }
    
        .blue~.focus-border i:before,
        .blue~.focus-border i:after {
            background-color: #3399FF;
        }
    
    
        /* .red~.focus-border i:before,
        .red~.focus-border i:after {
            background-color: #ff3333;
        }
    
        .yellow~.focus-border i:before,
        .yellow~.focus-border i:after {
            background-color: #a09d00;
        } */
    
        .effect~.focus-border i:after {
            left: auto;
            right: 0;
            top: auto;
            bottom: 0;
            transition-delay: 0.4s;
        }
    
        .effect:focus~.focus-border:before,
        .effect:focus~.focus-border:after {
            width: 100%;
            transition: 0.2s;
            transition-delay: 0.6s;
        }
    
        .effect:focus~.focus-border:after {
            transition-delay: 0.2s;
        }
    
        .effect:focus~.focus-border i:before,
        .effect:focus~.focus-border i:after {
            height: 100%;
            transition: 0.2s;
        }
    
        .effect:focus~.focus-border i:after {
            transition-delay: 0.4s;
        }
        input{
            width: 100%;
        }
    `;

    const Error = styled.div`
        color: red;
        font-size: 1rem;
    `;
    
const TextField = ({ label, ...props }) => {

    
    const [field, meta] = useField(props);
    // const [color] = useState(["blue", "red", "yellow"]);
    // // const [color, setColor] = useState(["blue", "red", "yellow"]);

    // //Problema de rendimiento

    // const colorField = () => {
    //     // console.log(color[Math.round(Math.random() * 2)].toString())
    //     return color[Math.round(Math.random() * 2)].toString();
    // }

    return (
        <Form>
            <Fields>
                <label htmlFor={field.name}>{label}</label>
                <input
                    className= {`${meta.touched && meta.error && 'is-invalid'} effect blue`}
                    {...field} {...props}
                    autoComplete="off"
                />
                <span className={!(label === "Alumno" || label === "Docente") ? "focus-border" : ""}>
                    <i></i>
                </span>
            </Fields>
            <Error>
                <ErrorMessage name={field.name} />
            </Error>
        </Form>
    )
}

export default TextField;
