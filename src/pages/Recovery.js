import '../Fonts.css';
import MotionHoc from "./MotionHoc";
import Logo from "../assets/logo-two.png";
import styled from "styled-components";
import RecoveryForm from '../components/RecoveryForm';
import { NavLink } from "react-router-dom";

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
            <img src={Logo} alt="Logo Tecnologico Nacional de México campus León" />
            <RecoveryForm />
            <TagA
                to="/">
                <p>Iniciar Sesión </p>
            </TagA>
            <TagA
                to="/register"
            >
                <p>Darme de alta</p>
            </TagA>
        </Container>
    );
}

const Recovery = MotionHoc(HomeComponent);

export default Recovery;