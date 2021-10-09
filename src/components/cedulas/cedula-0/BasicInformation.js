import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import FieldInput from "../../FieldInput";
import Help from "../../Help";

import { MdLiveHelp } from "@react-icons/all-files/md/MdLiveHelp";

const Container = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: max-content;
  h4 {
    margin-right: 20px;
    margin-bottom: 0;
  }
  margin-bottom: 10px;
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

  const [helpShow, setHelpShow] = useState(false);

  const handleShow = () => (helpShow ? setHelpShow(false) : setHelpShow(true));

  const title = "1. Información Básica ";
  const description =
    "Información registrada por el usuario, no es necesario modificar.";

  return (
    <>
      <Formik
        initialValues={{
          names: "",
          firstlastname: "",
          secondlastname: "",
          controlnumber: "",
          email: "",
          birthday: "",
          age: "",
        }}
        // validationSchema={validate}
        // onSubmit={(values) => {
        //     console.log(values)
        // }}
      >
        {(formik) => (
          <Container>
            <Title>
              <h4>{`${title}`} </h4>
              <MdLiveHelp style={{cursor: 'pointer '}} onClick={handleShow} />
            </Title>
            <Form>
              <StyleForm>
                <FieldInput
                  label=""
                  name="names"
                  type="text"
                  placeholder={`Miguel Ángel`}
                  disabled
                />
                <FieldInput
                  label=""
                  name="firstlastname"
                  type="text"
                  placeholder={`Casillas`}
                  disabled
                />
                <FieldInput
                  label=""
                  name="secondlastname"
                  type="text"
                  placeholder={`Araiza`}
                  disabled
                />
                <FieldInput
                  label=""
                  name="controlnumber"
                  type="text"
                  placeholder={`16240732`}
                  disabled
                />
                <FieldInput
                  label=""
                  name="email"
                  type="text"
                  placeholder={`16240732@leon.tecnm.mx`}
                  disabled
                />
                <FieldInput
                  label=""
                  name="birthday"
                  type="text"
                  placeholder={`25-06-1999`}
                  disabled
                />
                <FieldInput
                  label=""
                  name="age"
                  type="text"
                  placeholder={`18 años`}
                  disabled
                />
              </StyleForm>
              {/* <Select
                            label='Género'
                            name='gender'
                            
                        /> */}
            </Form>
          </Container>
        )}
      </Formik>
      {helpShow ? <Help title={title} description={description} /> : null}
    </>
  );
};

export default BasicInformation;
