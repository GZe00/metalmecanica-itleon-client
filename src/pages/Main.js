import '../Fonts.css';

import React from "react";

import { NavLink } from "react-router-dom";
import LogoTec from '../assets/logo-form.png';
import SignUp from '../components/SignUp';
import styled from "styled-components";
import MotionHoc from "./MotionHoc";


const Container = styled.div`
        background-color: #F2F2F2;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        img{
            max-width: 210px;
        }
        h2{
            text-align: center;
            margin: 15px 0;
            font-family: 'STIX Two Text';
        }
    `;

const TagA = styled(NavLink)`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        p{
            margin: 5px 10px;
            color: #1877F2;
            font-family: 'Andada Pro', serif;
            text-decoration: none;
        }
        p:hover{
            cursor: pointer;
        }
        `;


const HomeComponent = () => {
    return (

        <Container>
            <img src={LogoTec} alt="" />
            <h2>Tecnologico Nacional de México: Campus León</h2>

            <SignUp />
            <TagA
                to="/recovery">
                <p>¿Olvidaste tu contraseña? </p>
            </TagA>
            <TagA
                to="/register"
            >
                <p>Darme de alta</p>
            </TagA>

        </Container>




    );
};
const Main = MotionHoc(HomeComponent);

export default Main;