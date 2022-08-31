import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./component.css";

// import required modules

import { Container, Typography } from '@mui/material';
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
              Coconut fiber is processed coir from coconut skin which has many benefits and can be used in various industries. 
              It has a high lignin content and low cellulose content, which makes it ductile, strong, and very durable. Coconut 
              fiber has a lightness that is exceptional due to the voids arising from drying sieve cells. Therefore, it can be 
              used as a raw material for products, such as ropes, doormats, brooms, car seats, and others. The demand for coconut 
              fiber increases each year because of its benefits, quality, and affordable price. Indonesia itself has become the 
              largest coconut producer in the world.
            </Typography>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container maxWidth='md'>
            Coconut fiber is also useful in irrigation systems because it has good quality as a barrier to retaining water. 
            People also often use coconut fiber as a growing medium, especially in the hydroponic industry. Thus, the coconut 
            fiber market does not only go to factories, but also to household or retail consumers.
          </Container>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwiperProduk1;
