import React from 'react';
import { ErrorMessage, useField } from 'formik';
import styled from 'styled-components';

const Form = styled.div`
    width: 90%;
    
    
`;

const Fields = styled.div`
    width: 100%;
    textarea{
        width: 100%;
    }
`;

const Error = styled.div`
    color: red;
    font-size: 1rem;
`;

const FieldTextArea = ({ label, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <Form>
            <Fields>
                <label htmlFor={field.name}>{label}</label>
                <textarea
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

export default FieldTextArea
