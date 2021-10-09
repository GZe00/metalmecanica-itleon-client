import React from 'react';
import { NavLink } from "react-router-dom";
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import styled from 'styled-components'

import { connect } from 'react-redux';


const About =  styled(NavLink)`
    color: blue;
    font-style: normal;
    cursor: pointer;
`;

const AcceptTerms = props => {

    // console.log(props)

    const validate = Yup.object({
        hasReadThePurpose: Yup.bool()
    });

    const confirm = () => {
       
        props.dispatch({
            type: 'CONFIRM'
        })
    }

    return (
        <Formik
            initialValues={{
                hasReadThePurpose: ''
            }}
            validationSchema={validate}
            onSubmit={() => {
                confirm()
            }}
        >
            {formik => (
                <Form>
                    <div>
                        <input type="checkbox" name="hasReadThePurpose" required />
                        <label htmlFor="hasReadThePurpose" className="form-check-label">He leído el propósito y objetivo de Metamécanica</label>
                        <p>Haz click <About to="/project-Metamecanica" >aquí</About> para conocer Metamécanica</p>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-2">Página de Inicio</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

const mapStateToProps = state => {
    return {
        initialSetting: state.initialSetting
    }
}

export default connect(mapStateToProps)(AcceptTerms)
