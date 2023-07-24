'use client'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header class="fixed top-0 bg-white flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-3 md:py-0">
    <nav class="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
      <div class="relative md:flex md:items-center md:justify-between">
        <div class="flex items-center justify-between">
          <Link class="flex-none" href="/">
         <img src='/images/logos/header-logo-easy-go-rooms.png' height={80} width={170}/>
          </Link>

          <div class="md:hidden">
            <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-violet-900 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
              <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>
        </div>

        <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
          <div class="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
            <div class="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
              <Link class="font-medium text-gray-600 hover:text-gray-500 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="/" aria-current="page">
                Home
              </Link>

              <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button type="button"
                 class="flex items-center w-full text-black/[.8] hover:text-black font-medium">
                  About
                  <svg class="ml-2 w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                </button>
      
                <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
                  <Link class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/pages/about">
                    About Us
                  </Link>
      
                  <Link class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/pages/team">
                    Our Team
                  </Link>
                </div>
              </div>

              <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                <button type="button" class="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500">
                  Services
                  <svg class="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                </button>

                <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                  <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="flex flex-col mx-1 md:mx-0">
                      <Link class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900" href="/pages/services/revenue">
                     <img src="/images/services/revenue-icon.png" alt=""  height={40} width={40}/>
                        <div class="grow">
                          <p class="font-medium text-gray-800 dark:text-gray-200">Revenue Management</p>
                          <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Dynamically manage rates with competition analysis</p>
                        </div>
                      </Link>

                      <Link class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900" href="/pages/services/ota">
                      <img src="/images/services/ota-logo.png" alt=""  height={40} width={40}/>
                       
                        <div class="grow">
                          <p class="font-medium text-gray-800 dark:text-gray-200">OTA Management</p>
                          <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Managing OTA pricing to get more bookings</p>
                        </div>
                      </Link>

                      <Link class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900" href="/pages/services/booking">
                  
                        <img src="/images/services/booking-logo.png" alt=""  height={20} width={30}/>
                       
                        <div class="grow">
                          <p class="font-medium text-gray-800 dark:text-gray-200">Booking Engine</p>
                          <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Managing rates on website to get more direct bookings</p>
                        </div>
                      </Link>
                    </div>

                    <div class="flex flex-col mx-1 md:mx-0">
                      <Link class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900" href="#">
                      <img src="/images/services/digital-marketing-logo.png" alt=""  height={20} width={30}/>
                     
                        <div class="grow">
                          <p class="font-medium text-gray-800 dark:text-gray-200">Digital Marketing</p>
                          <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Help your guests to find your hotel</p>
                        </div>
                      </Link>

                      <Link class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900" href="#">
                      <img src="/images/services/web-development-logo.png" alt=""  height={20} width={40}/>
                        <div class="grow">
                          <p class="font-medium text-gray-800 dark:text-gray-200">Website Design & Development</p>
                          <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">An intuitive and easy-to-navigate website to get more bookings.</p>
                        </div>
                      </Link>

                      <Link class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900" href="/pages/services/photography">
                      <img src="/images/services/photography-logo.png" alt=""  height={20} width={30}/>
                        
                        <div class="grow">
                          <p class="font-medium text-gray-800 dark:text-gray-200">Photography & Promotion</p>
                          <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Elevate your hotel with captivating photography</p>
                        </div>
                      </Link>
                    </div>

                    <div class="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                      <span class="text-sm font-semibold  text-gray-800 dark:text-gray-200">Property Management System PMS</span>

                      <Link class="mt-4 group flex gap-x-5 items-center" href="/pages/services/pms">
                        <img class="w-32 h-32 rounded-lg" src="/images/services/pms-menu-easy-go-rooms.png" alt="Image Description"/>
                        <div class="grow">
                          <p class="text-gray-800 dark:text-gray-200">Your ultimate partner for efficient hotel management, enhancing guest satisfaction, and elevating your business in the ever-evolving hospitality industry</p>
                          <p class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                            View more
                            <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                            </svg>
                          </p>
                        </div>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>

              <Link class="font-medium text-gray-600 hover:text-gray-500 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="/pages/contact">
                Contact Us
              </Link>

              <div class="pt-3 md:pt-0">
              <button type="button"
     class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      data-hs-overlay="#hs-slide-down-animation-modal">
  Request Demo
</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  )
}
