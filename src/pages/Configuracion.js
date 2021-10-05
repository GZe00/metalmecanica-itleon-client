import React from 'react';
import MotionHoc from "./MotionHoc";
import styled from 'styled-components';
import Cards from '../components/Cards';


const Container = styled.div`
    width: 90vw;
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
        <>
            <h1 style={{ textAlign: 'center' }}>Configuracion</h1>
            <Container>
                <Cards
                    title='Cedulas'
                    description='Información que el docente tiene que responder para la generación de reportes de acuerdo al tema solicitado.'
                    to='/cedulas'/>
                <Cards
                    title='Grupos'
                    description='Información que el docasdhkajshdkjashkdasente tiene que responder para la generación de reportes de acuerdo al tema solicitado.'
                    to='/configuracion/grupos' />
                <Cards
                    title='Calificaciones'
                    description='Informaciónajsgdjahkgdsjhgdasjhdgaskjhdgkasjhdgakjshgdjk que el docente tiene que responder para la generación de reportes de acuerdo al tema solicitado.' 
                    to='/configuracion/calificaciones' />
                <Cards
                    title='Inventario'
                    description='Inforcuerdo al tema solicitado.' 
                    to='/configuracion/inventario'/>
                <Cards
                    title='Otros'
                    description='Información que el docente tiene que responder para la generación de reportes de acuerdo al tema solicitado.' 
                    to='/configuracion/otros'/>
            </Container>
        </>
    );
}

const Configuracion = MotionHoc(HomeComponent);

export default Configuracion;