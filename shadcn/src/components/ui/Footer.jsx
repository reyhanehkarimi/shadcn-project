import React from 'react'
import { Button } from "@/components/ui/button"


function Footer() {
  return (
    <>
    <section className=" px-10 sm:px-20 md:px-36 lg:px-48 xl:px-60 mt-6">
    <p className="text-center text-lg font-bold	">"Works with your technologies"</p>
    <div className="flex justify-evenly mt-10">
        <img className="hover:scale-125  transition-all" src="https://tailwind-shadcn.netlify.app/images/js.png" alt="js" />
        <img className="hover:scale-125  transition-all" src="https://tailwind-shadcn.netlify.app/images/ts.png" alt="ts" />
        <img className="hover:scale-125  transition-all" src="https://tailwind-shadcn.netlify.app/images/react.png" alt="react" />
        <img className="hover:scale-125  transition-all" src="https://tailwind-shadcn.netlify.app/images/redux.png" alt="redux" />
        <img className="hover:scale-125  transition-all" src="https://tailwind-shadcn.netlify.app/images/tailwind.png" alt="tailwind" />
        <img className="hover:scale-125  transition-all" src="https://tailwind-shadcn.netlify.app/images/nextjs.png" alt="nextjs" />
    </div>
    </section>
    <section className=" px-10 sm:px-20 md:px-36 lg:px-48 xl:px-60 mt-10">
        <div className="w-full bg-black text-white p-5 sm:p-10 lg:p-20 py-20 rounded-xl flex items-center gap-10 flex-col">
             <h2 className=" text-7xl  text-center ">
             Build faster websites
             </h2>
             <p className='text-lg'>
             Pull content from anywhere and serve it fast with Astro's next-gen island architecture
             </p>
        <div>
        <Button className="min-w-40 min-h-10 text-slate-950" variant="outline">Get Started</Button>
        </div>
        </div>
        <div className="py-20 flex flex-col items-center">
            <p className='text-lg'>Copyright © 2024. All rights reserved</p>
            <p className='text-md'>Made by Web3Templates</p>
        </div>
    </section>
    </>
  )
}

export default Footer