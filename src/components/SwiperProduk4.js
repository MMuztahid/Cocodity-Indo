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

function SwiperProduk4() {
  return (
    <>
      <Swiper
        spaceBetween={30} 
        effect={'fade'}       
        modules={[EffectFade]}
        className="swiper-product"
      >
        <SwiperSlide>
          <Container sx={{width:{xs: '90%', sm:'90%', md: '80%'} }}>
          <p>
            Coconut fiber is processed coir from coconut skin which has many benefits and can be used in various industries. 
            It has a high lignin content and low cellulose content, which makes it ductile, strong, and very durable. Coconut 
            fiber has a lightness that is exceptional due to the voids arising from drying sieve cells. Therefore, it can be 
            used as a raw material for products, such as ropes, doormats, brooms, car seats, and others. The demand for coconut 
            fiber increases each year because of its benefits, quality, and affordable price. Indonesia itself has become the 
            largest coconut producer in the world.
          </p>
          <p>
              Coconut fiber is also useful in irrigation systems because it has good quality as a barrier to retaining water. 
              People also often use coconut fiber as a growing medium, especially in the hydroponic industry. Thus, the coconut 
              fiber market does not only go to factories, but also to household or retail consumers.
          </p>
          </Container>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwiperProduk4;
