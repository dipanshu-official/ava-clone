import React from 'react'
import logo from "../assets/Vector.png"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-11 px-30'>
            <div className='flex justify-center items-center '>
                <div className='flex  items-center' >

                    <img src={logo} className='bg-[#2770FF] rounded-full' alt="" />
                    <h1 className='font-medium text-[32px] text-[#2770FF]'>ava</h1>
                </div>

                <ul className='flex items-center  gap-6 font-normal text-[20px] ml-12'>
                    <li>About</li>
                    <li>Features</li>
                    <li>Resources</li>
                    <li>Pricing</li>

                </ul>
            </div>


            <div className='flex items-center gap-8'>
                <p className='font-normal text-[20px]'><Link to="/Login">Log in</Link></p>
                <button className='bg-[#2770FF] font-medium text-[20px] py-3 px-5 rounded-lg'>Get Demo</button>
            </div>


        </div>
    )
}

export default Header