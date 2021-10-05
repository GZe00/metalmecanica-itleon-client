import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';


const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 20px 0;
`;

const Label = styled.div`
    margin: 5px 0;
`;

const Error = styled.div`
    color: red;
    font-size: 1rem;
`;

const Select = props => {
    const { label, name, options, ...rest } = props;
    return (
        <Form>
            <Label htmlFor={name}>{label}</Label>

            <Field as='select' id={name} name={name} {...rest}>
                {
                    options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.key}
                            </option>
                        )
                    })
                }
            </Field>

            <Error>
                <ErrorMessage name={name} />
            </Error>
        </Form>
    )
}

export default Select
