import React from 'react'
import { Button } from "@/components/ui/button"

function Header() {
  return (
<>
<header className="px-5 sm:px-10 lg:px-20 flex flex-col lg:flex-row  justify-center items-center  mb-5 mt-14">
    <div className="flex flex-col justify-between gap-10 order-2 lg:order-1">
        <h1 className=" text-xl  md:text-4xl  xl:text-6xl justify-center	mt-5 font-extrabold">
        Scalable Apps 
        <br />
        with frameworks
        </h1>
        <p className='text-lg	'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate et neque earum iste hic
        <br />
         consequatur nulla deserunt architecto numquam!
        </p>
    <div className='w-full flex flex-col md:flex-row gap-2 '>
            <Button  variant="outline" className="bg-gray-900 hover:bg-gray-800 hover:text-white mx-3 text-white min-w-40 min-h-10">Download for Free</Button>
            <Button className="min-w-40 min-h-10" variant="outline">Github Repo</Button>
    </div>
    </div>
<div className="order-1 lg:order-2 ml-20">
   <img className='w-full 'src="https://tailwind-shadcn.netlify.app/hero-source.svg" alt="header-img" />
</div>
    </header>
<div className='container px-5 sm:px-10 lg:px-20 mt-20'>
    <h2 className=" text-2xl  md:text-4xl  xl:text-4xl  font-bold">
    Everything you need to start a website

    </h2>
    <p className='class="mb-10'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, consequuntur.
    </p>
</div>
</>
)
}

export default Header