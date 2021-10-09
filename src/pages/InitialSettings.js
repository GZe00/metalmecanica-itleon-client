import React, { useState } from "react";

import MotionHoc from "./MotionHoc";
import styled from "styled-components";

import EducationalBackground from "../components/cedulas/cedula-0/EducationalBackground";
import BasicInformation from "../components/cedulas/cedula-0/BasicInformation";
import TeacherTraining from "../components/cedulas/cedula-0/TeacherTraining";
import DisciplinaryUpdate from "../components/cedulas/cedula-0/DisciplinaryUpdate";
import AcademicManagement from "../components/cedulas/cedula-0/AcademicManagement";
import AcademicProductsPE from "../components/cedulas/cedula-0/AcademicProductsPE";
import ProfessionalExperience from "../components/cedulas/cedula-0/ProfessionalExperience";
import EngineeringDesignExperience from "../components/cedulas/cedula-0/EngineeringDesignExperience";
import ProfessionalAchievements from "../components/cedulas/cedula-0/ProfessionalAchievements";
import ProfessionalInvolvement from "../components/cedulas/cedula-0/ProfessionalInvolvement";
import AcknowledgmentsReceived from "../components/cedulas/cedula-0/AcknowledgmentsReceived";
import ParticipationUpdateActivitiesPE from "../components/cedulas/cedula-0/ParticipationUpdateActivitiesPE";
import AcceptTerms from "../components/AcceptTerms";

import TypeTeach from "../components/TypeTeach";


const Container = styled.div`
  height: max-content;
  width: 90%;
  margin: 0 auto;
  /* border: 1px solid #000; */
  text-align: center;
  background: #f2f2f2;
  h5 {
    margin: 25px 0
  }
  p {
    span {
      font-weight: bold;
      font-style: italic;
    }
  }
`;

const Card = styled.div`
  /* height: 100%; */
  background: #f2f2f2;
  width: 95%;
  padding: 15px;
  margin: 0 auto;
  /* border: 1px solid #000; */
  box-shadow: 0px 9px 11px 0px rgba(0, 0, 0, 0.2);
  padding-bottom: 80px;
`;

const HomeComponent = () => {

    // <SpinnerStyled>
    //   <FaSpinner className={styles.spinning} size={60} />
    // </SpinnerStyled>

  return (
    // **mientras gira un spinner**
    // Estamos preparando su nueva cuenta
    // Ya casi está lista
    // Estamos afinando últimos detalles
    // Nueva cuenta agregada
    // Es necesario responder los siguientes formularios
    <>
      <Container>
        <h2>{`Bienvenido Miguel Angel Casillas`}</h2>
        <h5>{`Para un uso correcto de la plataforma, es necesario responder a la siguiente información, de lo contrario, puede responder más tarde yendo a la sección de: Menú > Configuración > Cédulas`}</h5>

    <h3> Cédula 0 - Currículum Vitae </h3>

        <Card>
          <BasicInformation />
          <TypeTeach />
          <EducationalBackground />
          <TeacherTraining />
          <DisciplinaryUpdate />
          <AcademicManagement />
          <AcademicProductsPE />
          <ProfessionalExperience />
          <EngineeringDesignExperience />
          <ProfessionalAchievements />
          <ProfessionalInvolvement />
          <AcknowledgmentsReceived />
          <ParticipationUpdateActivitiesPE />
          <AcceptTerms />
        </Card>
      </Container>
    </>
  );
};

const InitialSettings = MotionHoc(HomeComponent);

export default InitialSettings;
