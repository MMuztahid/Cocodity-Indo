import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper-product"
      >
        <SwiperSlide>
          <Container maxWidth='md'>
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
          <Container maxWidth='md'>
            <Stack direction="row" spacing="2">
            <Container>
              <ul>
                <p>Granular activated carbon application:</p>
                <li>Ground or drinking water filter <span>water treatment</span></li>
                <li>Seawater reverse osmosis filter</li>
                <li>Aquarium filter</li>
                <li>Toxic absorption in wastewater treatment</li>
                <li>Deodorizing</li>
                <li>Air filter</li>
              </ul>
            </Container>
            <Container>
              <ul>
                <p>Powder-activated carbon application:</p>
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
