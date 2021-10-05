import MotionHoc from "./MotionHoc";
import styled from "styled-components";
import Profile from "../components/ViewProfile"

    const Container = styled.div`
        position: relative;
        width: 77%;
        margin: 0 auto;
        height: 100vh;
        padding: 15px;
        border: 1px solid #000;
        overflow: scroll;
        z-index: 1;
        @media (max-width: 480px){
            width: 100%;
        }
    `;

const HomeComponent = () => {


    let name = `Moises`,
        lastname = `Fuentes`;


    return (
        <Container>
            <Profile 
                name = {name} 
                lastname = {lastname} />
        </Container>
    );
}

const Perfil = MotionHoc(HomeComponent);

export default Perfil;