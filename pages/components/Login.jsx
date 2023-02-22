import React, { useRef, useState } from 'react'
import Image from "next/image"
import { signIn } from 'next-auth/react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const [passwordType, setPasswordType] = useState(true)

    return (
        <div className='bg-gray-50 h-screen flex justify-center items-center'>
            <div className='h-4/5 w-2/3 flex justify-between shadow-xl shadow-slate-400 bg-white'>
                <div className='flex-1 relative w-1/2 bg-blue-600'>
                    <Image
                        src="https://links.papareact.com/t4i"
                        fill
                        style={{ objectFit: "contain" }}
                        alt=""
                    />
                </div>
                <div className='flex-1 flex flex-col justify-around items-center '>
                    <div className='flex justify-center items-center'>
                        <Image
                            src="https://links.papareact.com/t4i"
                            height={30}
                            width={30}
                            style={{ objectFit: "contain" }}
                            alt=""
                        />
                        <div className='text-sm lg:base xl:text-xl font-serif'>My Facebook</div>
                    </div>
                    <p className='text-sm lg:base xl:text-xl  font-serif font-medium text-blue-600 bg-gray-100 w-full text-center'>Sign in</p>
                    <div className='flex flex-col justify-around space-y-4 p-2'>
                        <div className='flex items-center gap-2 flex-wrap'>
                            <div className='flex-1 text-xs lg:text-sm font-medium'>Email</div>
                            <input ref={emailRef} type="email" name="email" className='flex-1 p-1 lg:px-2 lg:py-1 text-xs lg:text-sm border outline-[2px] outline-blue-300 rounded' />
                        </div>
                        <div className='flex items-center gap-2 flex-wrap'>
                            <div className='flex-1 text-xs lg:text-sm font-medium'>Password</div>
                            <div className='relative'>
                                <input ref={passwordRef} type={passwordType ? "password" : "text"} name="password" className='flex-1 p-1 lg:px-2 lg:py-1 text-xs lg:text-sm border outline-[2px] outline-blue-300 rounded' />
                                <div className=' absolute right-1 bottom-2' onClick={() => setPasswordType(!passwordType)}>{
                                    !passwordType ? <EyeIcon className='h-4 text-blue-500' /> : <EyeSlashIcon className='h-4 text-blue-500' />
                                }</div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between flex-wrap'>
                            <div className='flex items-center gap-1'>
                                <input type="checkbox" id="remember" name="remember" checked />
                                <label for="remember" className='text-gray-500 lg:text-sm text-xs'>Remember me</label>
                            </div>
                            <div className='lg:px-2 lg:py-1 p-1 text-white bg-blue-700 hover:bg-blue-500 rounded text-xs lg:text-sm font-medium'>Login</div>
                        </div>
                        <div className='flex items-center justify-between flex-wrap text-xs lg:text-sm'>
                            <div className='text-blue-500 hover:underline hover:text-blue-400 cursor-pointer'>Register now</div>
                            <div className='text-gray-500 hover:underline hover:text-gray-400 cursor-pointer'>Forgot password ?</div>
                        </div>
                        <hr class="my-10" data-content="OR" />
                        <div onClick={signIn} className='lg:p-2 py-1 px-2 font-medium lg:text-sm text-xs bg-blue-700 hover:bg-blue-500 rounded text-white text-center cursor-pointer flex items-center gap-1'><Image
                            src="https://links.papareact.com/t4i"
                            width={20}
                            height={20}
                            style={{ objectFit: "contain" }}
                            alt="" /> <span>Login with Facebook</span>
                        </div>
                        <div onClick={signIn} className='lg:p-2 py-1 px-2 font-medium lg:text-sm text-xs bg-red-600 hover:bg-red-500 rounded text-white text-center cursor-pointer flex items-center gap-1'><Image
                            src="/g.png"
                            width={20}
                            height={20}
                            style={{ objectFit: "contain" }}
                            alt="" /> <span>Login with Google</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login