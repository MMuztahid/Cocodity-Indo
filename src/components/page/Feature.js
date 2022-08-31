import React from "react";
import { keyFeatures } from "../KeyFeaturesGrid";
import './page.css';

const Feature = () => {
    return(
        <div className="main-content">
            <h1>Our KeyFeatures</h1>
            <div className="row-feature">
                {keyFeatures}
            </div>
        </div>
            
    );
}


export default Feature;