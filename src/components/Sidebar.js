import React, { useState } from "react";

//All the svg files
import logo from "../assets/logo.png";
import Home from "../assets/home.svg";
import Menu from "../assets/menu.svg";
import Perfil from "../assets/perfil.svg";
import Mensajes from "../assets/mensajes.svg";
import Analisis from "../assets/analisis.svg";
import ProfileImg from "../assets/profile-img.jpg"
import Administracion from "../assets/administracion.svg";
import Guardado from "../assets/guardado.svg"
import LogOut from "../assets/salir.svg";
import Settings from "../assets/settings.svg";
import Avisos from "../assets/alert.svg"

import { connect } from 'react-redux';

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
    position: fixed;
    .active {
        border-right: 4px solid var(--white);
    }
    /* img {
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
            brightness(103%) contrast(103%);
    } */
    @media (max-width: 480px){
        position: relative;
        display: flex;
        flex-direction: row;
        width: 100vw;
        justify-content: center;
    }
    z-index: 100;
`;

const Button = styled.button`
        background-color: var(--black);
        border: none;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        margin: 0.5rem 0 0 0.5rem;
        cursor: pointer;
    
        display: flex;
        justify-content: center;
        align-items: center;
    
        position: relative;
    
        &::before,
        &::after {
            content: "";
            background-color: var(--white);
            height: 2px;
            width: 1rem;
            position: absolute;
            transition: all 0.3s ease;
        }
    
        &::before {
            top: ${(props) => (props.clicked ? "1.5" : "1rem")};
            transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
        }
    
        &::after {
            top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
            transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
        }
        @media screen and (max-width:480px){
            display: none;
        }
    `;

const SidebarContainer = styled.div`
        background-color: var(--black);
        width: 3.5rem;
        height: 86vh;
        margin-top: 1rem;
        border-radius: 0 30px 30px 0;
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
        @media (max-width: 480px){
            height: 12vh;
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            border-radius: 0;
            padding: 0 10px;
            margin: 0;
        }
    `;

const SlickBar = styled.ul`
        color: var(--white);
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: var(--black);
        padding: 2rem 0;
        left: ${(props) => (props.clicked ? "4rem" : "0")};
        width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
        transition: all 500ms ease;
        border-radius: 0 30px 30px 0;
        
        position: relative;
        @media (max-width: 480px){
            left: 0;
            padding: 0;
            border-radius: 0;
            width: 60%;
            justify-content: space-around;
            flex-direction: row;
            
        }
    `;

const Logo = styled.div`
        width: 3rem;
    
        img {
            border-radius: 50%;
            width: 100%;
            height: auto;
        }
    `;

const Item = styled(NavLink)`
        text-decoration: none;
        color: var(--white);
        width: 100%;
        padding: 1rem 0;
        cursor: pointer;
        display: flex;
        padding-left: 1rem;
    
        &:hover {
            border-right: 4px solid var(--white);
        /* img {
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
                brightness(103%) contrast(103%);
        } */
    }
    
        img {
            width: 1.2rem;
            height: auto;
            
            filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
            brightness(78%) contrast(85%);
        
        }
    
        @media (max-width: 480px){
            justify-content: center;
            align-items: center;
            padding: 1rem 0;
            /* border: 0; */
            &:hover{
                border: 0;
                border-bottom: 4px solid var(--white);
            }
        }
    `;

const Text = styled.span`
        width: ${(props) => (props.clicked ? "100%" : "0")};
        overflow: hidden;
        margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
        transition: all 0.3s ease;
    `;

const Profile = styled.div`
        width: ${(props) => (props.clicked ? "14rem" : "3rem")};
        height: 3rem;
        
        padding: 0.5rem 1rem;
      /* border: 2px solid var(--white); */
        border-radius: 20px;
    
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
    
        background-color: var(--black);
        color: var(--white);
    
        transition: all 0.3s ease;
        /* position: relative; */
        img {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            cursor: pointer;
    
        &:hover {
            border: 2px solid var(--grey);
            padding: 2px;
            }
        }
        @media (max-width: 468px){
            margin-left: 0;
            padding: 0 10px;
            z-index: 20;
        }
        @media (max-width: 300px){
            margin-left: ${(props) => (props.clicked ? "-90px" : "0")};
        }
    `;

const Details = styled.div`
        display: ${(props) => (props.clicked ? "flex" : "none")};
        justify-content: space-between;
        align-items: center;
    `;

const Name = styled.div`
        padding: 0 1.5rem;
    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    
        h4 {
        display: inline-block;
        font-size: 0.90rem;
        }
    
        a {
            font-size: 0.75rem;
            text-decoration: none;
            color: var(--grey);
    
        &:hover {
            text-decoration: underline;
            }
        }
    `;

const Logout = styled.div`
        border: none;
        width: 2rem;
        height: 2rem;
        background-color: transparent;
        img {
            width: 100%;
            height: auto;
            filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
                brightness(100%) contrast(126%);
            transition: all 0.3s ease;
        &:hover {
            border: none;
            padding: 0;
            opacity: 0.5;
            }
        }
    `;

const Sidebar = (props) => {


    // console.log(store.getState().loggin)


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [profileClick, setprofileClick] = useState(false);
    const handleProfileClick = () => setprofileClick(!profileClick);

    if (props.state.student) {
        return <Container>
            <Button clicked={click} onClick={() => handleClick()}>
                Click
            </Button>
            <SidebarContainer>
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
                <SlickBar clicked={click}>
                    <Item
                        onClick={() => setClick(false)}
                        exact
                        activeClassName="active"
                        to="/home"
                    >
                        <img src={Home} alt="Home" />
                        <Text clicked={click}>Home</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/menu"
                    >
                        <img src={Menu} alt="Menu" />
                        <Text clicked={click}>Menu</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/perfil"
                    >
                        <img src={Perfil} alt="Perfil" />
                        <Text clicked={click}>Perfil</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/mensajes"
                    >
                        <img src={Mensajes} alt="Mensajes" />
                        <Text clicked={click}>Mensajes</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/analisis"
                    >
                        <img src={Analisis} alt="Analisis" />
                        <Text clicked={click}>Analisis</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/adminsitracion"
                    >
                        <img src={Administracion} alt="Administracion" />
                        <Text clicked={click}>Administracion</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/guardado"
                    >
                        <img src={Guardado} alt="Guardado" />
                        <Text clicked={click}>Guardado</Text>
                    </Item>
                </SlickBar>

                <Profile clicked={profileClick}>
                    <img
                        onClick={() => handleProfileClick()}
                        src={ProfileImg}
                        alt="Profile"
                    />
                    <Details clicked={profileClick}>
                        <Name>
                            <h4>M. Fuentes</h4>
                            <a href="/#">Ing. MXC</a>
                        </Name>

                        <Logout
                            onClick={() => props._logOut()}
                        >
                            <img src={LogOut} alt="logout" />

                        </Logout>
                    </Details>
                </Profile>
            </SidebarContainer>
        </Container>
    } else {
        return <Container>
            <Button clicked={click} onClick={() => handleClick()}>
                Click
            </Button>
            <SidebarContainer>
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
                <SlickBar clicked={click}>
                    <Item
                        onClick={() => setClick(false)}
                        exact
                        activeClassName="active"
                        to="/home"
                    >
                        <img src={Home} alt="Home" />
                        <Text clicked={click}>Home</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/menu"
                    >
                        <img src={Menu} alt="Menu" />
                        <Text clicked={click}>Menu</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/perfil"
                    >
                        <img src={Perfil} alt="Perfil" />
                        <Text clicked={click}>Perfil</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/configuracion"
                    >
                        <img src={Settings} alt="Perfil" />
                        <Text clicked={click}>Configuración</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/avisos"
                    >
                        <img src={Avisos} alt="Perfil" />
                        <Text clicked={click}>Avisos</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/mensajes"
                    >
                        <img src={Mensajes} alt="Mensajes" />
                        <Text clicked={click}>Mensajes</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/analisis"
                    >
                        <img src={Analisis} alt="Analisis" />
                        <Text clicked={click}>Analisis</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/adminsitracion"
                    >
                        <img src={Administracion} alt="Administracion" />
                        <Text clicked={click}>Administracion</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/guardado"
                    >
                        <img src={Guardado} alt="Guardado" />
                        <Text clicked={click}>Guardado</Text>
                    </Item>
                </SlickBar>

                <Profile clicked={profileClick}>
                    <img
                        onClick={() => handleProfileClick()}
                        src={ProfileImg}
                        alt="Profile"
                    />
                    <Details clicked={profileClick}>
                        <Name>
                            <h4>M. Fuentes</h4>
                            <a href="/#">Ing. MXC</a>
                        </Name>

                        <Logout
                            onClick={() => props._logOut()}
                        >
                            <img src={LogOut} alt="logout" />

                        </Logout>
                    </Details>
                </Profile>
            </SidebarContainer>
        </Container>
    }
};


const mapStateToProps = state => {
    return {
        state: state.loggin
    }
}

export default connect(mapStateToProps)(Sidebar)

// export default Sidebar;
