import React from 'react';
import { ErrorMessage, useField } from 'formik';
import styled from 'styled-components';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    input{
        
        margin: 5px 10px;
        padding: 5px;
        /* border-radius: 5px; */
}
`;

const Fields = styled.div`
    width: 100%;
`;

const Error = styled.div`
    color: red;
    font-size: 1rem;
`;

const FieldInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <Form>
            <Fields>
                <label htmlFor={field.name}>{label}</label>
                <input
                    className={`${meta.touched && meta.error && 'is-invalid'} `}
                    {...field} {...props}
                    autoComplete="off"
                />
            </Fields>
            <Error>
                <ErrorMessage name={field.name} />
            </Error>
        </Form>
    )
}

export default FieldInput
