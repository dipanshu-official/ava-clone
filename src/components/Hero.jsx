import React from 'react'
import mainscreen from '../assets/Docs/mainscreen.png'

const Hero = () => {
    return (
        <div>
            <div>
                <p className='text-center text-[#2770FF] font-medium text-2xl '>Meet AVA</p>
            </div>
            <div>
                <h1 className='font-medium text-[64px] text-center'>Unlock the Power of AI Writing <br />for Exceptional Content.</h1>
            </div>
            <div className='mt-6'>
                <p className='font-normal text-2xl text-center text-[#D6D6D6]'>Revolutionize your content creation with advanced AI. Create exceptional content <br /> quickly and easily, and gain a leading edge in your industry.</p>
            </div>

            <div className='text-center mt-12'>
                <button className='bg-[#2770FF] py-3 px-5 rounded-lg'>Try For Free</button>
            </div>
            <div className=''>

            <div className='flex items-center justify-center mt-20 '>
                <img src={mainscreen} alt="" className='rounded-[30px]' />
            </div>
            </div>


        </div>
    )
}

export default Hero