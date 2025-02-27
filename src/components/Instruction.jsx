import React from 'react'
import img1 from '../assets/Docs/LogIn1.png'
import img2 from '../assets/Docs/LogIn2.png'


const Instruction = () => {
    return (
        <div className='lg:mt-20 md:mt-10 mt-5 lg:pl-15 lg:pr-22 px-5 '>

            <div className='flex-col lg:flex-row md:flex-row flex  justify-between lg:items-start md:items-start items-center   '>

                <div className='flex justify-center items-start gap-5  '>
                    <div className='relative'>
                        <div className='h-30 z-10 w-30 bg-[#2770FF80] rounded-full lg:flex items-center justify-center hidden '>
                            <div className=' h-15 w-15 bg-[#2770FF] rounded-full '></div>
                        </div>
                        <div className='absolute z-0 left-14 top-28 lg:block hidden'>
                            <div className=' border-l-[2px]  border-dashed border-b-[2px] h-[500px] w-[1034px] border-[#133880]'></div>
                            <div className=' border-r-[2px]  border-dashed w-[1034px] h-[300px] border-[#133880]'></div>
                        </div>
                    </div>
                    <div>
                        <p className='font-normal lg:text-2xl text-base text-[#2770FF]'>Step 1</p>
                        <h1 className='font-medium lg:text-2xl text-base '>Log in to your account</h1>
                        <p className='font-normal lg:text-2xl text-base text-[#D6D6D6] lg:w-90 w-auto'>Start by logging in to your Ava account, where you'll have access to our advanced AI-powered writing tools.</p>
                    </div>


                </div>
                <div className='lg:mt-0 mt-10'>
                    <img src={img1} alt="" className='w-full' />
                </div>



            </div>
            <div className='lg:mt-[362px] md:mt-20 mt-15 lg:mb-30 mb-10'>
                <div className='flex lg:flex-row flex-col-reverse justify-between lg:items-start items-center '>


                    <div className='lg:mt-0 mt-10'>
                        <img src={img1} alt="" className='w-full h-auto' />
                    </div>
                    <div className='flex justify-center items-start gap-5 '>


                        <div>
                            <p className='font-normal  lg:text-2xl text-base text-[#2770FF] uppercase'>Step 2</p>
                            <h1 className='font-medium lg:text-2xl text-base '>Generate exceptional content</h1>
                            <p className='font-normal lg:text-2xl text-base text-[#D6D6D6] lg:w-90 w-auto'>With our AI-powered writing tools, you'll be able to create high-quality content quickly and efficiently, saving you time and increasing your productivity. Customize your content to your specific needs, whether you're looking to generate ideas, refine your writing, or optimize for SEO.</p>
                        </div>
                        <div className='h-30 w-30 bg-[#2770FF80] rounded-full lg:flex items-center justify-center hidden'>
                            <div className='h-15 w-15 bg-[#2770FF] rounded-full '></div>
                        </div>


                    </div>


                </div>

            </div>
        </div>
    )
}

export default Instruction