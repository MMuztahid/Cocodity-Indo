import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./component.css";

// import required modules
import { Container } from "@mui/material";

import { Pagination, Navigation } from "swiper";

function SwiperProduk2() {
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
            <ul>
              <p>
                Our liquid smoke consists of 3 types based on the amounts of harmful compounds in the liquid smoke, thus affecting the 
                function of the liquid smoke. Which are as follows.
              </p>
              <p>
                Liquid smoke is the result of the distillation or condensation of steam resulting from indirect or direct combustion 
                of materials that contain lots of carbon and other compounds. (Andalyan, B., 2008).
              </p>
            </ul>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container maxWidth='md'>
            <ul>
              <p>In general, the components of liquid smoke consist of:</p>
              <li>Phenol compounds: As an antioxidant that can extend the shelf life of smoked products.</li>
              <li>Carbonyl compounds: As a coloring and taste of smoked products, that has a distinctive aroma like caramel.</li>
              <li>Acid compounds: As an antibacterial and flavor enhancer for smoked products. These acidic compounds include acetic, propionic, butyric, and valeric acid.</li>
              <li>Benzo(a) pyrene compound (contained in grade 2 liquid smoke): Can cause skin cancer if applied directly to the skin’s surface. However, the process that occurs takes a long time. (Winapriliani, 2003).</li>
            </ul>
          </Container>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwiperProduk2;
