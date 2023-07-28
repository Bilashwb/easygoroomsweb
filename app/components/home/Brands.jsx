"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay,Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Brands() {

  return (
    <div className="wow fadeIn py-6 mt-8" data-wow-duration="4s">
        <section class="bg-white dark:bg-gray-900">
        <div class="mx-auto max-w-screen-xl">
        <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-blue-900 sm:text-4xl md:mx-auto wow bounceInUp"  data-wow-duration="1s">
         
            Our OTA Brand Partner
          </h2>
            <Swiper
                        
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={3}
                            breakpoints={{
                                '@0.00': {
                                  slidesPerView: 1,
                                  spaceBetween: 10,
                                },
                                '@0.75': {
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                                },
                                '@1.00': {
                                  slidesPerView: 3,
                                  spaceBetween: 40,
                                },
                                '@1.50': {
                                  slidesPerView: 6,
                                  spaceBetween: 50,
                                },
                              }}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                            loop={true}
                        >
                            <SwiperSlide> <img className='filter grayscale hover:grayscale-0' src="/images/ota/1 (1).png" alt="" /> </SwiperSlide>
                            <SwiperSlide> <img className='filter grayscale hover:grayscale-0' src="/images/ota/1 (2).png" alt="" /> </SwiperSlide>
                            <SwiperSlide> <img className='filter grayscale hover:grayscale-0' src="/images/ota/1 (3).png" alt="" /> </SwiperSlide>
                            <SwiperSlide> <img className='filter grayscale hover:grayscale-0' src="/images/ota/1 (5).png" alt="" /> </SwiperSlide>
                            <SwiperSlide> <img className='filter grayscale hover:grayscale-0' src="/images/ota/1 (6).png" alt="" /> </SwiperSlide>
                            <SwiperSlide> <img className='filter grayscale hover:grayscale-0' src="/images/ota/1 (7).png" alt="" /> </SwiperSlide>
                        </Swiper>
        </div>
    </section>
    </div>
  )
}
