import React from 'react'
import mainscreen from '../assets/Docs/mainscreen.png'

const Hero = () => {
    return (
        <div className='lg:px-0 md:px-10 px-5 max-w-7xl mx-auto '>
            <div>
                <p className='text-center text-[#2770FF] font-medium text-2xl '>Meet AVA</p>
            </div>
            <div>
                <h1 className='font-medium flex-wrap lg:text-[64px] md:text-5xl text-base text-center'>Unlock the Power of AI Writing <br />for Exceptional Content.</h1>
            </div>
            <div className='mt-6 '>
                <p className='font-normal flex-wrap lg:text-2xl md:text-xl text-base text-center text-[#D6D6D6]'>Revolutionize your content creation with advanced AI. Create exceptional content <br /> quickly and easily, and gain a leading edge in your industry.</p>
            </div>

            <div className='text-center lg:mt-12 mt-5'>
                <button className='bg-[#2770FF] py-3 px-5 rounded-lg'>Try For Free</button>
            </div>
            <div className=''>

            <div className='flex items-center justify-center lg:mt-20 md:mt-10 mt-5  '>
                <img src={mainscreen} alt="" className='rounded-[30px] w-full h-auto' />
            </div>
            </div>


        </div>
    )
}

export default Hero