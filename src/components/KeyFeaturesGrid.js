import React from "react";
import { KeyFeatures } from "./KeyFeatures";

export const keyFeatures = KeyFeatures.map(({ img, title, content },index) => {
    return (
        <div className="column-feature" key={index}>
            <img src={img} alt={title} width="100px"/>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
});


