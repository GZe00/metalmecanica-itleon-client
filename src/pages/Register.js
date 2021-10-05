
import RegisterForm from "../components/RegisterForm";
import MotionHoc from "./MotionHoc";
import Logo from "../assets/logo-form.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
        background-color: #F2F2F2;
        width: 50%;
        margin: 0 auto;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        overflow-y: auto;

        @media (max-width:640px){
            width: 100%;
        }

    img{
        max-width: 210px;
    }
    h2{
        text-align: center;
        margin: 15px 0;
        font-family: 'STIX Two Text';
    }
`;

const Presentation = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        img{
            width: 120px;
            margin-right: 20px;
        }
        margin-bottom: 30px;
    `;

const Back = styled(NavLink)`
        text-align: center ;
        p{
            margin-top: 20px;
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
            <Presentation>
                <img src={Logo} alt="Logo Tecnológico Nacional de México campus León" />
                <div>
                    <h2>Bienvenido a Metamecánica</h2>
                    <h4>Porfavor, conteste el siguiente formulario</h4>
                    <Back
                        to="/"
                    ><p>Iniciar Sesión</p></Back>
                </div>
            </Presentation>
            <RegisterForm />
        </Container>
    );
}


const Register = MotionHoc(HomeComponent);

export default Register;
