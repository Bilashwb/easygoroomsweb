import TeamCard from '@/app/components/Cards/TeamCard'
import Link from 'next/link'
import React from 'react'

export default function page() {
  const team=[
  {image:'/images/team/Ritu-Da.png',name:'Rituraj Dasgupta',desg:'Head Of Sales'},
  {image:'/images/team/Pitam.png',name:'Pritam Sen',desg:'Revenue Manager'},
  {image:'/images/team/Indranil-Da.png',name:'Indranil Kanjilal',desg:'Digital Marketing Specialist'},
  {image:'/images/team/Indradeep-Da.png',name:'Indradeep Dasgupta',desg:'Reservation Manager'}];
  return (
    <>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-2 mx-auto">

<div class="relative overflow-hidden">
  <div class="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-2 mx-auto">

    <div aria-hidden="true" class="flex absolute left-0 -z-[1]">
      <div class="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px] dark:bg-purple-900 dark:opacity-20"></div>
    </div>

    <div class="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
      <div class="hidden lg:block lg:col-span-2">
        <img class="rounded-xl h-2/4" src="/images/team/Jyoti.png"  alt="Image Description"/>
      </div>

      <div class="lg:col-span-4">
        <blockquote>
          <p class="text-xl  text-gray-800 lg:text-lg text-justify lg:leading-normal dark:text-gray-200">
          When I first envisioned Easygorooms Hospitality Pvt Ltd, it was a dream fueled by a passion for hospitality and a vision for creating unforgettable experiences for our guests. Today, that dream is a reality, thanks to the unwavering dedication and hard work of our exceptional team.
          </p>

          <footer class="mt-6">
            <div class="flex items-center">
              <div class="ml-4 lg:ml-0">
                <p class="font-medium text-gray-800 dark:text-gray-200">
                Jyoti Das
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                Founder & CEO
                </p>
              </div>
            </div>
          </footer>
        </blockquote>

      </div>
    </div>
  </div>
</div>

  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our leadership</h2>
    <p class="mt-1 text-gray-600 dark:text-gray-400">Creative people</p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
   
{
  team.map((item)=>{
    return <TeamCard name={item.name} image={item.image} desg={item.desg}/>;
  })
}
   

 


    <Link class="col-span-full lg:col-span-1 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-gray-200 hover:shadow-sm dark:border-gray-700" href="/pages/careers">
      <h3 class="text-lg text-gray-800 dark:text-gray-200">
        We are hiring!
      </h3>
      <div>
        <span class="inline-flex items-center gap-x-2 text-blue-600 group-hover:text-blue-700 dark:text-blue-500 dark:group-hover:text-blue-400">
          See all opening positions
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
      </div>
    </Link>
  </div>

</div>

    </>
  )
}
