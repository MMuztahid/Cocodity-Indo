import React from "react";
import { KeyFeatures } from "./KeyFeatures";
import { Container } from "@mui/material";

export const keyFeatures = KeyFeatures.map(({ img, title, content },index) => {
    return (
        <div className="column-feature" key={index}>
            <Container sx={{
                width: {xs:'xl',sm:'lg',md:'lg'},
                height: {xs:'400px',sm: '400px',md: '300px',}
            }}>
                <img src={img} alt={title} width="100px" height="100px"/>
                <h2>{title}</h2>
                <Container  sx={{ width: {xs: 'xl',sm: 'xl', md: 'md' },marginTop: '20px',}}>
                    <p>{content}</p>
                </Container>
            </Container>
        </div>
    );
});


