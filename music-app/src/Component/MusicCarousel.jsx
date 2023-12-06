import React from "react";
import {Autoplay, EffectFlip, Navigation, Pagination} from "swiper/modules";
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Box, Stack} from "@mui/material";

function MusicCarousel({style}) {
  return(
      <>
          <Swiper
              spaceBetween={30}
              effect={'fade'}
              grabCursor={true}
              pagination={{clickable:true}}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFlip, Pagination,Autoplay,]}
              className="mySwiper"
              style={style}
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
          </Swiper>
      </>
  )
}
export default MusicCarousel;