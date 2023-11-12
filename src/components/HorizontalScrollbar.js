import React from "react";
import { Box } from "@mui/material";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Components
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar]}
      spaceBetween={10}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      scrollbar={{ draggable: true }}
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
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HorizontalScrollbar;
