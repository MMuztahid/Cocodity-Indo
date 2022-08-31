import React from "react";

import SwiperProduk1 from "../SwiperProduk1";
import SwiperProduk2 from "../SwiperProduk2";
import SwiperProduk3 from "../SwiperProduk3";
import SwiperProduk4 from "../SwiperProduk4";

import Gambar1 from "../../media/foto7.webp";
import Gambar2 from "../../media/foto8.webp";
import Gambar3 from "../../media/foto9.webp";
import Gambar4 from "../../media/foto10.webp";
import Gambar5 from "../../media/foto11.webp";
import Gambar6 from "../../media/foto12.webp";
import Gambar7 from "../../media/foto13.webp";
import Gambar8 from "../../media/foto14.webp";
import Gambar9 from "../../media/foto15.webp";
import Gambar10 from "../../media/foto16.webp";
import Gambar11 from "../../media/foto17.webp";


import './page.css';
import { Container, Stack } from "@mui/material";

const Product = () => {
    return(
        <div className="main-content">
            <h1>Product</h1>
            <Container maxWidth='xl'>
            <div className="row">
                <div className="column">
                    <Stack spacing={2}>
                    <img src={Gambar1} alt="" width="300px"/>
                    <img src={Gambar2} alt="" width="300px"/>
                    <img src={Gambar3} alt="" width="300px"/>
                    </Stack>
                </div>
                <div className="column">
                    <h4>Activated Coconut Charcoal</h4>
                    <div className="row">
                    <ul>
                        <p>Granular activated carbon (GAC):</p>
                        <li>Weight per pack: 1100 gr / 5200gr</li>
                        <li>Net per pack: 1000 gr / 5000gr</li>
                        <li>Ingredient: 100% Coconut Shell</li>
                        <li>Charcoal Type: Granular </li>
                        <li>Mesh: 6 - 12 (3,3mm - 1,6 mm) & 4 - 8 (4,7mm - 2,3mm)</li>
                        <li>Iodine Number: 800 -1000 mg/g</li>
                        <li>Moisture content: under 4 %</li>
                        <li>Ash content: under 5%</li>
                        <li>Hardness: 90%</li>
                        <li>Apparent Density: 550Kg/m3</li>
                        <li>pH: 8 – 10</li>
                        <li>Packing Sizes available - 25, 50, 500, 550 & 600 Kgs</li>
                    </ul>
                    </div>
                    <div className="row">
                    <ul>
                        <p>Powder activated carbon (PAC):</p>
                        <li>Weight per pack: 1200 gr</li>
                        <li>Net per pack: 1000 gr.</li>
                        <li>Ingredients: 100% Coconut Shell Activated Carbon</li>
                        <li>Charcoal Type: Powder </li>
                        <li>Mesh: over 500</li>
                        <li>Iodine Number: 800 -1000 mg/g</li>
                        <li>Moisture content: under 4 %</li>
                        <li>Food-Grade</li>
                        <li>Apparent Density: 550Kg/m3</li>
                        <li>pH: 8 – 10</li>
                        <li>Packing Sizes available - 25, 50, 500, 550 & 600 Kgs</li>
                    </ul>
                    </div>
                </div>
            </div>
            </Container>
            <div>
                <SwiperProduk1/>
            </div>
            <div className="row">
                <div className="column">
                <Stack spacing={2}>
                    <img src={Gambar6} alt="" width="300px"/>
                    <img src={Gambar5} alt="" width="300px"/>
                    <img src={Gambar4} alt="" width="300px"/>
                    </Stack>
                </div>
                <div className="column">
                    <h4>Liquid Smoke Coconut Vinegar</h4>
                    <ul>
                        <div className="row">
                            <p>
                                Grade 2 liquid smoke is a purified liquid smoke obtained from the distillation of grade 3 liquid smoke. 
                                It has a transparent brownish color. Can be used in the livestock sector for deodorizing in cattle pens, 
                                scabies, and inflammatory drugs. While in other sectors it is used for wood preservatives to make it 
                                resistant to termites and in rubber processing as a substitute for formic acid (ants) to speed up the 
                                process of Ribbed Smoked Sheet (RSS) rubber. In agriculture, it is used as a pesticide containing 
                                insecticides and fungicides, which is organic.
                            </p>
                        </div>
                        <div className="row">
                        <p>
                            Grade 1 liquid smoke is a purified liquid smoke obtained from the distillation of grade 2 liquid smoke. 
                            It has a transparent yellowish color, moderate sour taste, and a weak smoke aroma. Used as a pharmaceutical 
                            and food preservative. In the pharmaceutical industry, grade 1 liquid smoke is used as the main raw material 
                            for natural disinfectants and antiseptics, such as antiseptics for wounds caused by diabetes mellitus, 
                            disinfectants in the medical field (rooms and equipment), formalin, and many others.
                        </p>
                        </div>
                        <div className="row">
                        <p>
                            Food Grade liquid smoke is obtained from the distillation of grade 1 liquid smoke. It has a clear color, 
                            slightly sour taste, neutral aroma, does not contain harmful compounds, and has the best quality. In the 
                            food industry, it is used as a food preservative to replace non-natural preservatives. Speeds up the 
                            smoking process of food. Gives a smoky taste to food. Can be used as vinegar.
                        </p>
                        </div>
                    </ul>
                </div>
            </div>
            <div><SwiperProduk2/></div>
            <div className="row">
                <div className="column">
                    <Stack spacing={2}>
                        <img src={Gambar7} alt="" width="300px"/>
                        <img src={Gambar8} alt="" width="300px"/>
                    </Stack>
                </div>
                <div className="column">
                    <h4>Cocopeat/Cocopith</h4>
                    
                        <Stack spacing={2} sx={{marginTop: '60px'}}>
                            <p>Specification</p>
                            <li>Ph = 5 - 7 </li>
                            <li>Color = Gold Brown</li>
                            <li>Impurity = less than 7%</li>
                            <li>Water content = 30%-50%</li>
                            <li>Packaging = 40Kgs / bag</li>
                            <p>Quantity</p>
                            <li>20ft = +-224 Bags / 6930Kgs </li>
	                        <li>40ft = +-476 Bags / 19.040Kgs </li>
                        </Stack>
                    
                </div>
            </div>
            <div><SwiperProduk3/></div>
            <div className="row">
                <div className="column">
                    <Stack spacing={2}>
                        <img src={Gambar9} alt="" width="300px"/>
                        <img src={Gambar10} alt="" width="300px"/>
                    </Stack>
                </div>
                <div className="column">
                    <h4>CocoFiber</h4>
                    <p>Specification</p>
                    <ul>
                        <li>Block size (Bale) = 45 x 50 x 100</li> 
                        <li>Block weight (Bale) = 55Kgs</li>
                        <li>Color = Gold Brown / Light Brown</li>
                        <li>Impurity = less than 5%</li>
                        <li>Water content = 18% - 25% </li>
                        <li>Fiber’s length = 5 - 30cm (80% more than 20cm)</li>
                        <p>Quantity :</p>
                        <li>20ft = +- 126 Bales / 8960Kgs</li>
                        <li>40ft = +- 240 Bales / 13.200Kgs</li>
                    </ul>
                </div>
            </div>
            <div><SwiperProduk4/></div>
            <div className="row">
                <div className="column">
                    <img src={Gambar11} alt="" width="300px"/>
                </div>
                <div className="column">
                    <h4>Coconut Shell Charcoal</h4>
                </div>
            </div>
        </div>
    );
}


export default Product;