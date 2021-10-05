import React from 'react';
import {Redirect} from 'react-router'
import { NavLink } from "react-router-dom";


import Card from 'react-bootstrap/Card';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = styled(NavLink)`
    width: max-content;
    height: max-content;
    background-color: green;
    color: #fff;
    padding: 8px 12px;
    border-radius: 10px;
`;

const Cards = ({ title, description, to }) => {
    return (
        <Card style={{
            width: '18rem',
            borderRadius: '15px',
            boxShadow: '6px 6px 6px -2px rgba(0,0,0,0.55)',
            margin: '15px 10px',
        }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body
                style={{ textAlign: 'center' }}
            >
                <Card.Title style={{ textAlign: 'left' }} >{`${title}`}</Card.Title>
                <Card.Text style={{ textAlign: 'left' }}>
                    {`${description}`}
                </Card.Text>
                <Button
                    to={`${to}`}
                    style={{cursor: 'pointer '}}
                >Seleccionar</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards
