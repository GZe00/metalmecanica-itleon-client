import React from "react";
import MotionHoc from "./MotionHoc";
import styled from "styled-components";
import Cards from "../components/Cards";

const Page = styled.div`
  width: 100%;
  height: 100vh;
  border-bottom: 1px solid #000;
  overflow: auto;

  h1{
      margin: 20px 0;
  }

`;

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  height: max-content;
  /* border: 1px solid #000; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

const HomeComponent = () => {
  return (
    <Page>
      <h1 style={{ textAlign: "center" }}>Cédulas</h1>
      <Container>
        <Cards
          title="Cédula 0 - Currículum Vitae Resumido"
          subtitle="F-CACEI-DAC-102"
          description="Complete la información incluyendo a todos los profesores que han impartido uno o más cursos durante los últimos dos periodos lectivos anuales; es decir, el anterior (2014-2015) y el actual (2015-2016)."
          to="/cedula/0"
        />
        <Cards
          title="Cédula 1.1.1 - Resumen de la Planta Académica"
          subtitle="F-CACEI-DAC-103"
          description="Complete la Cédula 1.1.1 incluyendo a todos los profesores que han impartido uno o más cursos durante los últimos dos periodos lectivos anuales; es decir, el anterior (2014-2015) y el actual (2015-2016)."
          to="/configuracion/grupos"
        />
        <Cards
          title="Cédula 3.3.1b - Cursos Optativos"
          subtitle="F-CACEI-DAC-104"
          description="Organización curricular de los cursos, asignaturas o unidades de aprendizaje por área."
          to="/configuracion/calificaciones"
        />
        <Cards
          title="Cédula 3.3.2 – Programa de asignatura, curso o unidad de aprendizaje"
          subtitle="F-CACEI-DAC-105"
          description="Utilice la siguiente cédula para recopilar la información de los cursos, asignaturas, o unidades de aprendizaje que integran el programa educativo. Se debe incluir todos los cursos obligatorios y optativos: una cédula individual por cada curso."
          to="/configuracion/inventario"
        />
        <Cards
          title="Cédula 3.4.2  Mapa de los Atributos de egreso respecto a los Objetivos educacionales"
          subtitle="F-CACEI-DAC-106"
          description="Incluir todos los Objetivos educacionales del PE. Añadir tantas columnas como sea necesario.					
                    Incluir todos los Atributos de egreso del PE. Añadir tantas filas como sea necesario."
          to="/configuracion/otros"
        />
        <Cards
          title="Cédula 3.4.3 Mapa de los Atributos de egreso propuestos por el CACEI respecto a los Atributos de egreso del PE."
          subtitle="F-CACEI-DAC-107"
          description="Incluir todos los Atributos de egreso del PE. Añadir tantas filas como sea necesario.						
          Cuando exista una relación entre los Atributos de egreso propuestos por el CACEI y los del PE, escribir la justificación en la(s) celda(s) correspondiente(s)."
          to="/configuracion/otros"
        />
        <Cards
          title="Cédula 4.2.1 Mapa de aportación de los Cursos del PE a los Atributos de egreso del CACEI."
          subtitle="F-CACEI-DAC-108"
          description="Listar todos los cursos del PE (obligatorios, optativos, etc.) del primero al último semestre/trimestre/etc. Añadir filas si se requiere. Cruzar todas las celdas en las que se muestre el aporte de cada curso para lograr los atributos de egreso del CACEI."
          to="/configuracion/otros"
        />
        <Cards
          title="Cédula 4.2.1a Mapa de aportación de los Cursos del PE a los Atributos de egreso del PE"
          subtitle="F-CACEI-DAC-109"
          description="Listar todos los cursos del PE (obligatorios, optativos, etc.) de cada periodo, del primero al último. Añadir filas y columnas en caso de ser necesario."
          to="/configuracion/otros"
        />
        <Cards
          title="Cédula 4.2.1b Herramientas de Valoración de los Atributos de egreso por cursos del PE"
          subtitle="F-CACEI-DAC-110"
          description="Listar los cursos del PE donde se apliquen Herramientas de Valoración para los Atributos de egreso."
          to="/configuracion/otros"
        />
        <Cards
          title="Cédula 4.4.1 - Plan de Mejora "
          subtitle="F-CACEI-DAC-111"
          description="Plan de mejora."
          to="/configuracion/otros"
        />
        <Cards
          title="Cédula 5.1.1 - Características de las aulas"
          subtitle="F-CACEI-DAC-112"
          description="Caracteristicas del aula"
        />
        <Cards
          title="Cédula 5.1.2 - Equipamiento en laboratorios"
          subtitle="F-CACEI-DAC-113"
          description="Equipamiento en laboratorios"
          to="/configuracion/otros"
        />
        <Cards
          title="Cédula 5.1.3 - 3. Características de los laboratorios y talleres"
          subtitle="F-CACEI-DAC-114"
          description="Características de los laboratorios y talleres"
          to="/configuracion/otros"
        />
        <Cards
          title="Cédula 4.3.1 Valoración de los Índices de rendimiento escolar por cohorte"
          subtitle="F-CACEI-DAC-116"
          description="Complete la Cédula 4.3.1 incluyendo la información solicitada en las siguientes tablas. La eficiencia terminal deberá calcularse a 1.5 la duración del plan de estudios."
          to="/configuracion/otros"
        />
      </Container>
    </Page>
  );
};

const Cedulas = MotionHoc(HomeComponent);

export default Cedulas;
