import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SingleCardSwiper.scss';

// Import required modules
import { FreeMode, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import AddToCartCard from '../AddToCartCard/AddToCartCard';
import { Swiper as TSwiper } from 'swiper/types';

export default function SingleCardSwiper() {
  const swiperRef = useRef<TSwiper | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(true);

  useEffect(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);

      swiperRef.current.on('slideChange', () => {
        setIsBeginning(swiperRef.current!.isBeginning);
        setIsEnd(swiperRef.current!.isEnd);
      });
    }
  }, []);

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.custom-swiper-button-prev',
          nextEl: '.custom-swiper-button-next',
        }}
        modules={[FreeMode, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
      >
        <SwiperSlide>
          <AddToCartCard id="525" />
        </SwiperSlide>
        <SwiperSlide>
          <AddToCartCard id="525" />
        </SwiperSlide>
        <SwiperSlide>
          <AddToCartCard id="525" />
        </SwiperSlide>
        <SwiperSlide>
          <AddToCartCard id="525" />
        </SwiperSlide>
        <SwiperSlide>
          <AddToCartCard id="525" />
        </SwiperSlide>
        <SwiperSlide>
          <AddToCartCard id="525" />
        </SwiperSlide>
      </Swiper>
      <div
        className={`custom-swiper-button-prev ${isBeginning ? 'disabled' : ''}`}
      >
        {"<"}
      </div>
      <div
        className={`custom-swiper-button-next ${isEnd ? 'disabled' : ''}`}
      >
        {">"}
      </div>
    </>
  );
}
