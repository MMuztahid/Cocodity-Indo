import React from "react";
import { FP } from "../FP";
import EmailForm from "../EmailForm";

import './page.css';
import { Container, Divider,Link } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
                marginBottom: '100px',
            }}/>
            <div className="row">
                <div className="column">
                    <h4>Address</h4>
                    <div className="row">
                        Jl. Raya Cijujung Blok.C-16 Sukaraja, Kab. Bogor, Jawa Barat, Indonesia (16710)
                    </div>
                </div>
                <div className="column">
                    <h4>Email</h4>
                    <div className="row">
                    cocodityindo@gmail.com & info@cocodityindo.com
                    </div>
                </div>
                <div className="column">
                    <h4>social media</h4>
                    <div className="row" style={{justifyContent: 'center'}}>
                    
                        <Link href="https://instagram.com/arengasugarindo?igshid=YmMyMTA2M2Y=" target="blank">
                            <InstagramIcon sx={{color: 'black', paddingRight: '10px'}}/>
                        </Link> 
                        <Link href="https://www.linkedin.com/company/indo-export-group/" target="blank">
                            <LinkedInIcon sx={{color: 'black'}}/>
                        </Link>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contact;