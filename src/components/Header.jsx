import React from 'react'
import { useState } from 'react'
import logo from "../assets/Vector.png"
import { Link } from 'react-router-dom'
import { Menu , X  } from 'lucide-react'

const Header = () => {
const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex justify-between items-center lg:py-11 py-2 max-w-7xl mx-auto  px-10 '>
             {/* hambugger  */}
             <button
                 className='text-white font-bold absolute top-4 left-0 md:hidden block '
                 onClick={() => {
                   setIsOpen(!isOpen)
                 }}
                >
                {isOpen ? <X size={30} /> : <Menu size={30} /> }

                </button>
                <div className=''>
                    {isOpen && <ul className=' absolute flex-col items-center bg-black  gap-6 font-normal text-[20px]  '>
                    <li>About</li>
                    <li>Features</li>
                    <li>Resources</li>
                    <li>Pricing</li>

                </ul> }

                </div>

            
            <div className='flex justify-center items-center '>
                <div className='flex  items-center' >

                    <img src={logo} className='bg-[#2770FF] rounded-full' alt="" />
                    <h1 className='font-medium text-[32px] text-[#2770FF]'>ava</h1>
                </div>
               

                {/* show in desktop */}

                <ul className=' md:flex items-center  gap-6 font-normal text-[20px] ml-12 hidden'>
                    <li>About</li>
                    <li>Features</li>
                    <li>Resources</li>
                    <li>Pricing</li>

                </ul>
            </div>


            <div className='flex items-center gap-8'>
                <p className='font-normal text-[20px]'><Link to="/Login">Log in</Link></p>
                <button className='bg-[#2770FF] font-medium lg:text-[20px] text-[16px] lg:py-3 py-1 lg:px-5 px-3 rounded-lg'>Get Demo</button>
            </div>


        </div>
    )
}

export default Header