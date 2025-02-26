import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#141414]'>
        <div className='py-20 pl-30 pr-[242px]'>
            <div className='grid grid-cols-4 items-start gap-20'>
                <div>
                    <h1 className='font-medium text-2xl'>Features</h1>
                    <ul className='mt-5 font-normal text-[16px] space-y-2 text-[#D6D6D6]'>
                        <p >Facebook Ads</p>
                        <p>Landing Page Tool</p>
                        <p>Google Ads</p>
                        <p>Cover Letter</p>
                        <p>Product Description Generators</p>
                    </ul>
                </div>
                <div>
                    <h1 className='font-medium text-2xl'>Resources</h1>
                    <ul className='mt-5 font-normal text-[16px] space-y-2 text-[#D6D6D6]'>
                        <p>Guides and Tutorials</p>
                        <p>Blogs</p>
                        <p>Join the Community</p>
                        <p>Roadmap</p>
                        <p>Feedback</p>
                    </ul>
                </div>
                <div>
                    <h1 className='font-medium text-2xl'>Comparison</h1>
                    <ul className='mt-5 font-normal text-[16px] space-y-2 text-[#D6D6D6]'>
                        <p>Jasper</p>
                        <p>Copy.AI</p>
                        <p>Writesonic</p>
                        <p>Rytr</p>
                    </ul>
                </div>
                <div>
                    <h1 className='font-medium text-2xl'>Comparison</h1>
                    <ul className='mt-5 font-normal text-[16px] space-y-2 text-[#D6D6D6]'>
                        <p>About us</p>
                        <p>Customer’s love</p>
                        <p>Contact us</p>
                        <p>Affipate Program</p>
                        <p>Careers</p>
                        <p>Pricing</p>

                    </ul>
                </div>
               
            </div>

        </div>

    </div>
  )
}

export default Footer