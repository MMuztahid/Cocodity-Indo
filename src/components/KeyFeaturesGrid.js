import React from "react";
import { KeyFeatures } from "./KeyFeatures";
import { Container } from "@mui/material";

export const keyFeatures = KeyFeatures.map(({ img, title, content },index) => {
    return (
        <div className="column-feature" key={index}>
            <Container maxWidth="md" sx={{
                height: '300px',
            }}>
                <img src={img} alt={title} width="100px" height="100px"/>
                <h2>{title}</h2>
                <Container maxWidth="md" sx={{marginTop: '20px',}}>
                    <p>{content}</p>
                </Container>
            </Container>
        </div>
    );
});


