"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Autoplay,Pagination,Scrollbar } from 'swiper/modules';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
///pages/services










const servies=[
    {
        image:'/images/product/Revenue Management.png',
        title:'Revenue Management',
        subtitle:'Dynamically manage rates with competition analysis',
        url:'/pages/services/revenue'
    },
    {
        image:'/images/product/ota.png',
        title:'OTA Management',
        subtitle:'Managing OTA pricing to get more bookings.',
        url:'/pages/services/ota'
    },
    {
        image:'/images/product/Reservation-Management.png',
        title:'Reservation Management',
        subtitle:'Managing OTA pricing to get more bookings.',
        url:'/pages/services/reservation'
    },
    {
        image:'/images/product/Reputation Management.png',
        title:'Reputation Management',
        subtitle:'Dynamically manage rates with competition analysis.',
        url:'/pages/services/reputation'
    },
    {
        image:'/images/product/booking-engine.png',
        title:'Booking Engine',
        subtitle:'Managing rates on website to get more direct bookings.',
        url:'/pages/services/booking'
    },
    {
        image:'/images/product/digital-marketing.png',
        title:'Digital Marketing',
        subtitle:'Help your guests to find your hotel.',
        url:'/pages/services/digitalmarketing'
    },
    {
        image:'/images/product/google-my-business.png',
        title:'Google Business',
        subtitle:'Creating digital marketing plan defining the digital channel strategy.',
        url:'/pages/services/googlebusiness'
    },
    {
        image:'/images/product/website-design-development.png',
        title:'Website Design & Development',
        subtitle:'An intuitive and easy-to-navigate website to get more bookings.',
        url:'/pages/services/webdev'
    },
    {
        image:'/images/product/photography.png',
        title:'Photography & Promotion',
        subtitle:'To elevate your hotel, check out our suggestions for hotel photography.',
        url:'/pages/services/photography'
    }
];
const Services = () => {

    return (
        <div>
            <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-900 sm:text-4xl md:mx-auto wow bounceInUp"  data-wow-duration="1s">
         
            Our Offered Services
          </h2>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap wow slideInRight"  data-wow-duration="3s">
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
                                  slidesPerView: 1.3,
                                  spaceBetween: 20,
                                },
                                '@1.00': {
                                  slidesPerView: 3,
                                  spaceBetween: 40,
                                },
                                '@1.50': {
                                  slidesPerView: 3.5,
                                  spaceBetween: 50,
                                },
                              }}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination,Autoplay]}
                            className="mySwiper"
                            loop={true}
                        >

                            {
                                servies.map((item)=>{
                                    return <SwiperSlide><ProductCard image={item.image} title={item.title} subtitle={item.subtitle} url={item.url} /></SwiperSlide>
                                })
                            }
                            
            
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
