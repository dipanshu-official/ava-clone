import React from 'react'
import img1 from '../assets/card/Facebook.png'
import img2 from '../assets/card/Layer.png'
import img3 from '../assets/card/Amazon.png'
import img4 from '../assets/card/Instagram.png'
import img5 from '../assets/card/Youtube.png'
import img6 from '../assets/card/Frame.png'


const Card = () => {
    const iteam =[
        {
            img:img1,
            bgColor:"#1877F280",
            name:'Facebook Ads',
            details:'Facebook  ad copies that make your ads stand out.',
        },
        {
            img:img2,
            bgColor:"#303A3F80",
            name:'Blog Post Intro Paragraph',
            details:'Entice your audience with captivating blog intros using our AI-powered writing techniques.',
        },
        {
            img:img3,
            bgColor:"#FF990080",
            name:'Amazon Product Description',
            details:'Description for amazon that ranks first on the first page.',
        },
        {
            img:img4,
            bgColor:"#A51D92",
            name:'Instagram Post Captions',
            details:'Captions that grabs everyone’s attention and make your posts go viral.',
        },
        {
            img:img5,
            bgColor:"#FF000080",
            name:'Youtube script',
            details:'Create youtube scripts that is engaging for viewers.',
        },
        {
            img:img6,
            bgColor:"#00000080",
            name:'Personalized Cold  Emails',
            details:'Personalized cold emails that resonate with your target audience.',
        },
    ]
  return (
    <div className='grid grid-cols-3 items-center gap-6 pl-4 pr-[89px]'>
        {iteam.map((data , index) =>(
            <div className='px-4 pt-6 border border-[#9CA3AF] h-[180px] rounded-lg'>
            <div 
            className='flex items-center gap-4'
            >
            
            <img src={data.img} alt="" className='h-12 w-12 p-[10px] rounded-2xl' style={{backgroundColor:data.bgColor }}/>
                <p className='font-medium text-[20px]'>{data.name}</p>
            </div>
            <div className='mt-4'> 
                <p className='font-light text-sm '>{data.details}</p>
            </div>
        </div>

        ))
            
        
        }



    </div>
  )
}

export default Card