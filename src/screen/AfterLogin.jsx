import React from 'react'
import { useState } from 'react'

import profile from '../assets/Screen/profile.png'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { Menu, X } from 'lucide-react'





const AfterLogin = () => {
    const [isOpen, setIsopen] = useState(false)

    return (
        <div className='min-h-screen bg-[#F8FAFB] flex '>

            <button
                className='text-black text-xl md:hidden block absolute top-4  '
                onClick={() => {
                    setIsopen(!isOpen)
                }}
            >
                {isOpen ? <X size={30} /> : <Menu size={30} />}


            </button>

            <div
                className={`absolute top-16 text-black left-0 w-full bg-white  transition-all duration-300 ${isOpen ? "h-auto opacity-100" : "h-0 opacity-0 pointer-events-none"
                    } md:hidden`}
            >
                {isOpen && <Navbar/>}
                
            </div>

            {/* show in desktop navbar  */}
            <div className='hidden md:block'>
                <Navbar/>
            </div>

            <div className='flex-1 text-black '>
                <header className='bg-[#2C67FF1A]'>
                    <div className='py-4 pl-6 flex items-center justify-center gap-10 '>
                        <input type="text"
                            placeholder='What do you want to create'
                            className='w-full outline-none bg-white rounded-[45px] placeholder:text-[#9CA3AF] placeholder:font-normal py-2 placeholder:pl-2 pl-4'

                        />
                        <div className='pr-4'>
                            <img src={profile} alt="" />
                        </div>
                    </div>

                </header>
                <div className='mt-6 pl-6'>

                    <div >
                        <h1 className='font-semibold lg:text-[32px] md:text-2xl text-xl '>Choose Template</h1>
                    </div>
                </div>
                <Card />


            </div>
        </div>
    )
}

export default AfterLogin