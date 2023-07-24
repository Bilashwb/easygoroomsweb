"use client"
import React from 'react'
import Hero from './components/home/Hero'

export default function page() {
  return (
  <>
<Hero/>

<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-down">
  <div className="grid lg:grid-cols-2 gap-6">
    <a className="group sm:flex" href="#">
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
        <img className="w-full h-full absolute top-0 left-0 object-cover" src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description" />
      </div>
      <div className="grow">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="mb-3">
            <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              Business
            </p>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            Preline becomes an official Instagram Marketing Partner
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Great news we're eager to share.
          </p>
          <div className="mt-5 sm:mt-auto">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-[2.875rem] w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
              </div>
              <div className="ml-2.5 sm:ml-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                  Aaron Larsson
                </h4>
                <p className="text-xs text-gray-500">
                  Feb 15, 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a className="group sm:flex" href="#">
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
        <img className="w-full h-full absolute top-0 left-0 object-cover" src="https://images.unsplash.com/photo-1669824774762-65ddf29bee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description" />
      </div>
      <div className="grow">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="mb-3">
            <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              Announcements
            </p>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            Announcing a free plan for small teams
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            At Wake, our mission has always been focused on bringing openness.
          </p>
          <div className="mt-5 sm:mt-auto">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-[2.875rem] w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
              </div>
              <div className="ml-2.5 sm:ml-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                  Hanna Wolfe
                </h4>
                <p className="text-xs text-gray-500">
                  Feb 4, 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>






  </>
  )
}
