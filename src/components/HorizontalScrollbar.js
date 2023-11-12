import React from "react";
import { Box } from "@mui/material";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Components
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, bodyParts, bodyPart, setBodyPart }) => {
  return (
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide key={item}>
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 2rem"
          >
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HorizontalScrollbar;
