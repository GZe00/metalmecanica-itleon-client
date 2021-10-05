import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import FieldInput from '../../FieldInput';

    const Container = styled.div`
        margin-top: 20px;
    `;

    const StyleForm = styled.div`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    `;

const BasicInformation = () => {


    const validate = Yup.object({
        names: Yup.string(),
        firstlastname: Yup.string(),
        secondlastname: Yup.string(),
        email: Yup.string(),
        birthday: Yup.string(),
        age: Yup.string(),
    });


    return (
        <Formik
            initialValues={{
                names: '',
                firstlastname: '',
                secondlastname: '',
                controlnumber: '',
                email: '',
                birthday: '',
                age: '',
            }}
            // validationSchema={validate}
            // onSubmit={(values) => {
            //     console.log(values)
            // }}
        >
            {formik => (
                <Container>
                    <h4>1. Información Básica</h4>
                    <Form>
                        <StyleForm>
                            <FieldInput label="" name="names" type="text" placeholder={`Miguel Ángel`} disabled />
                            <FieldInput label="" name="firstlastname" type="text" placeholder={`Casillas`} disabled />
                            <FieldInput label="" name="secondlastname" type="text" placeholder={`Araiza`} disabled />
                            <FieldInput label="" name="controlnumber" type="text" placeholder={`16240732`} disabled />
                            <FieldInput label="" name="email" type="text" placeholder={`16240732@leon.tecnm.mx`} disabled />
                            <FieldInput label="" name="birthday" type="text" placeholder={`25-06-1999`} disabled />
                            <FieldInput label="" name="age" type="text" placeholder={`18 años`} disabled />

                        </StyleForm>
                        {/* <Select
                            label='Género'
                            name='gender'
                            
                        /> */}
                    </Form>
                </Container>
            )}
        </Formik >
    )
}

export default BasicInformation
