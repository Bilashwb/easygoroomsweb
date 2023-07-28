import React from 'react'
import FeatureCard from '../Cards/FeatureCard';

export default function OurFeature() {
  const Feature1=[{
    title:'Hotel Registration',
    desc:'Expand your reach with OTA hotel registration for increased bookings and global visibility.'
  },{
    title:'Ranking & Visibility',
    desc:'Boost hotel visibility and ranking with strategies that attract more guests and increase bookings.'
  },
  {
    title:'Reputation Management',
    desc:"Proactively manage and enhance your hotel's online reputation to build trust and attract more guests."
  }
  ];
  
  const Feature2=[
    {
    title:"System Mapping & Set-Up",
    desc:"Efficiently map and set up your hotel systems for seamless operations and improved guest experiences."
    },
    {
    title:"Rate Parity",
    desc:"Maintain consistent rates across all distribution channels to ensure rate parity and avoid price discrepancies."
    },
    {
    title:"Performa & Productivity Report",
    desc:"Access comprehensive performance and productivity reports to analyze hotel operations and make data-driven decisions."
    }];
    return (
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 wow bounceInUp"   data-wow-duration="2s" data-wow-delay="1s" >
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Easy Go Rooms
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-900 sm:text-4xl md:mx-auto">

            Things what we do !
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Exceptional hospitality services with personalized care, luxurious amenities,
           and a dedicated team committed to creating unforgettable experiences.
          </p>
        </div>
        <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
          <div className="space-y-6 sm:px-16 wow slideInLeft" data-wow-duration="3s" data-wow-delay="1s">
          {
            Feature1.map((item)=>{
              return  <FeatureCard title={item.title} desc={item.desc}/>
            })
          }
          </div>
          <div className="space-y-6 sm:px-16 wow slideInRight" data-wow-duration="3s" data-wow-delay="1s">
          {
            Feature2.map((item)=>{
              return  <FeatureCard title={item.title} desc={item.desc}/>
            })
          }

            
          </div>
        </div>
      </div>
    );
}
