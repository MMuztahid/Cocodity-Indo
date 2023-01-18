import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "./component.css";

// import required modules
import { Container } from "@mui/material";
import { EffectFade } from "swiper";

function SwiperProduk3() {
  return (
    <>
      <Swiper
        spaceBetween={30} 
        effect={'fade'}       
        modules={[EffectFade]}
        className="swiper-product"
      >
        <SwiperSlide>
          <Container sx={{width:{xs: '70%', sm:'70%', md: '80%'} }}>
            <p>
              Cocopeat is an organic growing medium made from coconut coir powder that is finely ground. It has a good water absorption 
              and storage capacity when compared to soil. Cocopeat is a very good medium for any plant which has a pH between 5.0 to 
              6.8 and it also has the potential to reduce the use of topsoil. Having pores and crumb texture, cocopeat makes it easier 
              for water, air, and sunlight to enter the soil.
            </p>
            <p>
              This growing medium is usually mixed with other materials before use, such as roasted husks with a ratio of 50:50 which 
              aims to increase aeration in the growing media. But there are also those who use only cocopeat as a substitute for soil.
            </p>
          </Container>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwiperProduk3;
