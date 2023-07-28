import ServiceCard from '@/app/components/Cards/ServiceCard'
import Link from 'next/link';
import React from 'react'

export default function page() {
  const servies = [
    {
        image: '/images/product/Revenue Management.png',
        title: 'Revenue Management',
        subtitle: 'Dynamically manage rates with competition analysis',
        url: '/services/revenue'
    },
    {
        image: '/images/product/ota.png',
        title: 'OTA Management',
        subtitle: 'Managing OTA pricing to get more bookings.',
        url: '/services/ota'
    },
    {
        image: '/images/product/Reservation-Management.png',
        title: 'Reservation Management',
        subtitle: 'Managing OTA pricing to get more bookings.',
        url: '/services/reservation'
    },
    {
        image: '/images/product/Reputation Management.png',
        title: 'Reputation Management',
        subtitle: 'Dynamically manage rates with competition analysis.',
        url: '/services/reputation'
    },
    {
        image: '/images/product/booking-engine.png',
        title: 'Booking Engine',
        subtitle: 'Managing rates on website to get more direct bookings.',
        url: '/services/booking'
    },
    {
        image: '/images/product/digital-marketing.png',
        title: 'Digital Marketing',
        subtitle: 'Help your guests to find your hotel.',
        url: '/services/digital'
    },
    {
        image: '/images/product/google-my-business.png',
        title: 'Google Business',
        subtitle: 'Creating digital marketing plan defining the digital channel strategy.',
        url: '/services/google'
    },
    {
        image: '/images/product/website-design-development.png',
        title: 'Website Design & Development',
        subtitle: 'An intuitive and easy-to-navigate website to get more bookings.',
        url: '/services/website'
    },
    {
        image: '/images/product/photography.png',
        title: 'Photography & Promotion',
        subtitle: 'To elevate your hotel, check out our suggestions for hotel photography.',
        url: '/services/photography'
    }
];
return (
    <div>

        <div class="max-w-[85rem] px-4  mb-7 sm:px-6 lg:px-8 mx-auto">

        <div class="relative overflow-hidden before:absolute before:top-0 ">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10 py-5">

    <div class="flex justify-center">
      
      <Link class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200" href="/pages/services/pms">
        PMS release - New Version Of PMS
        <span class="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
      </Link>
    </div>

    <div class="mt-5 max-w-4xl text-center mx-auto">
      <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
      Elevate Your 
        <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"> Hospitality </span> Experiences
      </h1>
    </div>


    <div class="mt-5 max-w-3xl text-center mx-auto">
      <p class="text-lg text-gray-600 dark:text-gray-400">
      we are dedicated to providing top-notch products and services to
      enhance your hospitality experience. Explore our offerings below
        </p>
    </div>
  </div>
</div>
            <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">

                {
                    servies.map((item) => {
                        return <ServiceCard image={item.image} title={item.title} desc={item.subtitle} url={item.url} />
                    })
                }


            </div>
        </div>
    </div>
)
}
