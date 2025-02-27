import React from 'react'
import logo from "../assets/Vector.png"
import img1 from '../assets/Screen/Vector.svg'
import img2 from '../assets/Screen/Card.svg'
import img3 from '../assets/Screen/File.svg'
import img4 from '../assets/Screen/Group.svg'
import img5 from '../assets/Screen/LogOut.svg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/')
    }
    return (
        
            <nav className='px-6 flex flex-col justify-between  '>
                <div>

                    <div className='flex items-center ' >

                        <img src={logo} className='bg-[#2770FF] rounded-full' alt="" />
                        <h1 className='font-medium text-[32px] text-[#2770FF]'>ava</h1>
                    </div>
                    <div className='bg-[#2C67FF] rounded-lg '>
                        <button>
                            <img src="" alt="" />
                            <p className='font-medium tex-[20px] text-center py-2 px-10 '>New Project</p>
                        </button>
                    </div>
                    <div className='flex flex-col items-start mt-6'>

                        <div className='flex items-center justify-center py-2 gap-2'>
                            <img src={img1} alt="" className='' />
                            <p className='text-[#2C67FF] font-medium text-[20px]'>Dashboard</p>

                        </div>
                        <div className='flex items-center justify-center py-2 gap-2'>
                            <img src={img2} alt="" className='' />
                            <p className='text-[#575757] font-medium text-[20px]'>Request Feature</p>

                        </div>
                        <div className='flex items-center justify-center py-2 gap-2'>
                            <img src={img3} alt="" className='' />
                            <p className='text-[#575757] font-medium text-[20px]'>Guides</p>

                        </div>
                        <div className='flex items-center justify-center py-2 gap-2'>
                            <img src={img4} alt="" className='' />
                            <p className=' text-[#575757] font-medium text-[20px]'>Settings</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className='border-b w-full border-[#8A8A8A]'></div>
                    <div className='flex mt-4 items-center gap-2 py-2'>
                        <img src={img5} alt="" />
                        <p className='font-medium text-[20px] text-[#575757] cursor-pointer' onClick={handleLogout}>Log out</p>
                    </div>
                </div>


            </nav>
    )
}

export default Navbar