import React from "react";
import { FP } from "../FP";
import EmailForm from "../EmailForm";

import './page.css';
import { Container, Divider } from "@mui/material";

const Contact = () => {
    return(
        <div className="main-content">
            <Divider variant="middle" sx={{
                marginBottom: '50px',
                background: '#28282b',
            }}/>
            <h1>Contact</h1>
            <Container maxWidth="md">
                <EmailForm/>
            </Container>
            <Divider variant="middle" sx={{
                marginTop: '100px',
                marginBottom: '100px',
            }}/>
            <FP/>
            <Divider variant="middle" sx={{
                marginTop: '100px',
            }}/>
        </div>
    );
}


export default Contact;