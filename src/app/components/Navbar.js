import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <>
            {/* Mobile devices */}
            <div className="flex  justify-between items-center p-4 sm:hidden">
                <Image src={'/images/quillauditsicon.png'} alt="logo" width={41} height={39} />
                <button className='font-medium text-[12.7px] leading-[17.4px] text-white  text-center shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A] py-2 px-3 rounded-[4.39px] bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)]'>
                    Request An Audit
                </button>
                <button className=''>{hamburger()}</button>
            </div>

            {/* Desktop */}
            <div className='hidden sm:block  xl:px-[8%] py-4'>
                <div className='flex justify-between items-center border-b-2 pb-4 border-b-[#8a8a8a] border-opacity-15'>
                    <Image src={'/images/QuillAudits.png'} alt="logo" width={217} height={43} />

                    {/* <ul className='flex items-center justify-center gap-6 leading-[32.13px] text-[19.42px] text-white'>
                        <li className='cursor-pointer'>Services</li>
                        <li className='cursor-pointer'>Pricing</li>
                        <li className='cursor-pointer'>Our Audits</li>
                        <li className='cursor-pointer'>Tools</li>
                        <li className='cursor-pointer'>Resources</li>
                        <li className='cursor-pointer'>Refer-Earn-Secure</li>
                    </ul> */}

                    <button className='font-medium leading-[32.13px] text-[19.42px] text-white  text-center shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A] py-2 rounded-lg bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)] hover:scale-105 transform transition-transform duration-300 px-4'>
                        Request An Audit
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar

function hamburger() {
    return (
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="1.69278" rx="0.846392" fill="white" />
            <rect y="5.15332" width="20" height="1.69278" rx="0.846392" fill="white" />
            <rect y="10.3076" width="20" height="1.69278" rx="0.846392" fill="white" />
        </svg>

    )
}