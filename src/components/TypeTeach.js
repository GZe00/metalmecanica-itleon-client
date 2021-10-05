import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Select from '../components/Select'

const TypeTeach = () => {

    const levels = [
        { key: '--', value: '' },
        { key: 'Jefe de departamento', value: '01' },
        { key: 'Jefatura de docencia', value: '02' },
        { key: 'Jefatura de vinculacion', value: '03' },
        { key: 'Jefatura de investigacion', value: '04' },
        { key: 'Jefatura de laboratorio', value: '05' },
        { key: 'Docente', value: '06' },
    ]

    const validate = Yup.object({
        levels: Yup.string(),

    });

    return (
        <Formik
            initialValues={{
                levels: '',
            }}
            validationSchema={validate}
            // onSubmit={(values) => {
            //     console.log(values)
            // }}
        >
            {formik => (
                <>
                    <Form>
                        <Select
                            label='Selecciona a que grupo perteneces:'
                            name='levels'
                            options={levels}
                        />
                    </Form>
                </>
            )}
        </Formik >

    )
}

export default TypeTeach;
