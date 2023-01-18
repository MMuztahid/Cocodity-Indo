import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./component.css";

// import required modules

import { Container, Typography, Stack } from '@mui/material';
import { Pagination, Navigation } from "swiper";

function SwiperProduk1() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="swiper-product"
      >
        <SwiperSlide>
          <Container sx={{width:{xs: '70%', sm:'70%', md: '80%'} }}>
            <Typography variant="body1" gutterBottom sx={{
              display: 'block',
              alignItems: 'center',
            }}>
              Activated carbon or activated charcoal is generally made from coal and biomass, which contain large levels of carbon 
              elements. “Pure Carbon” activated charcoal uses coconut shell biomass as the basic ingredient. Coconut shell is the 
              best biomass base material because of its large carbon element, high hardness level and it is an organic material, 
              so it can be used for food-grade function classification, medicines, and cosmetics.
            </Typography>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container sx={{width:{xs: '70%', sm:'70%', md: '80%'} }}>
            <Stack direction={{xs:'column',sm: 'column', md: "row"}} spacing={2}>
            <Container>
              <ul>
                <p><b>Granular Activated Carbon application:</b></p>
                <li>Ground or drinking water filter (water treatment)</li>
                <li>Seawater reverse osmosis filter</li>
                <li>Aquarium filter</li>
                <li>Toxic absorption in wastewater treatment</li>
                <li>Deodorizing</li>
                <li>Air filter</li>
              </ul>
            </Container>
            <Container>
              <ul>
                <p><b>Powder Activated Carbon application:</b></p>
                <li>Seawater reverse osmosis filter</li>
                <li>Precious metal mining cleaning media</li>
              </ul>
            </Container>
            </Stack>
          </Container>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwiperProduk1;
