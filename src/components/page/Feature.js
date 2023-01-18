import { Divider } from "@mui/material";
import React from "react";
import { keyFeatures } from "../KeyFeaturesGrid";
import './page.css';

const Feature = () => {
    return(
        <div className="main-content">
            <Divider variant="middle" sx={{
                marginBottom: '50px',
                background: '#28282b',
            }}/>
            <h1>Our KeyFeatures</h1>
            
            <div className="row-feature">
                {keyFeatures}
            </div>
        </div>
            
    );
}


export default Feature;