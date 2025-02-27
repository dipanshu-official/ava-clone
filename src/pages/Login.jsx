import React from 'react'
import logo from "../assets/Vector.png"
import google from '../assets/Google.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (user === "admin@123" && password === "1234") {
            navigate("/AfterLogin"); // Redirect to Dashboard after successful login
        } else {
            alert("Invalid Credentials!");
        }
    };


    return (
        <div className='h-screen flex items-center justify-center   '>
            <div className='bg-white text-black lg:px-15 px-10 lg:py-6 py-0'>
                <div className='flex items-center gap-4 '>

                    <img src={logo} className='bg-[#2770FF] rounded-full' alt="" />
                    <h1 className='font-medium text-[32px] text-[#2770FF]'>ava</h1>
                </div>
                <div>
                    <h1 className='font-medium text-[32px]'>Welcome back</h1>
                    <p className='font-normal text-sm text-[#575757] mt-2'>Unlock the power of AI for your writing</p>
                </div>

                <form >
                    <div>
                        <label className=' font-medium text-[16px] px-2 relative left-2 top-3 bg-white'>Email address</label>

                        <input
                            type="email"
                            required
                            placeholder='dipanshu@gmail.com'
                            value={user}
                            onChange={(e)=>setUser(e.target.value)}
                            className='border w-full outline-none border-[#575757] py-2 rounded-lg'
                        />
                    </div>

                    <div>
                        <label className=' font-medium text-[16px] px-2 relative left-2 top-3 bg-white mt-6'>Password</label>

                        <input
                            type="password"
                            required
                            placeholder='**********'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className='border w-full outline-none border-[#575757] py-2 rounded-lg placeholder:font-medium placeholder:text-[20px]'
                        />
                    </div>

                    <div>
                        <button className='bg-[#2770FF] w-full rounded-lg py-2 mt-6 font-medium text-[20px] text-white ' onClick={handleLogin}>Login</button>
                        <p className='text-[#2770FF] font-medium text-[16px] mt-6 text-end'>Forgot Password?</p>
                    </div>

                    <div class="flex items-center mt-6">
                        <div class="flex-grow border-t "></div>
                        <span class="mx-4 font-normal text-[16px] ">or</span>
                        <div class="flex-grow border-t "></div>
                    </div>

                    <div className='flex items-center justify-center gap-2 border border-[#575757] rounded-lg py-2 mt-6'>
                        <img src={google} alt="" />
                        <p className='font-medium text-[20px]'>Continue with Google</p>
                    </div>

                    <div className='mt-12 text-center'>
                        <p className='font-normal text-[16px] '>Don’t have an account? <span className='font-medium text-[16px] text-[#2770FF]'>Sign up</span></p>
                    </div>
                </form>



            </div>

        </div >
    )
}

export default Login