import React from 'react'

const BeforeAfter = () => {
    return (
        <div className='px-6 py-16 pb-10 flex flex-col sm:flex-row xl:px-[20%] sm:px-[5%] md:px-[10%] ld:px-[13%] gap-20 sm:gap-0'>
            <div className='flex flex-col gap-6 sm:pr-10 md:pr-20'>
                <h1 className='bg-gradient-to-r from-[#FFABC9] to-[#FFABC9] font-bold font-inter text-xl px-1 '>Before QuillAudits</h1>

                <div className='font-poppins font-normal text-lg leading-[24px] flex flex-col gap-4'>
                    <p className=''>Exploits like reentrancy and front-running can let attackers withdraw extra funds and manipulate transaction timing for unfair gains.</p>
                    <p className=''>Vulnerabilities could allow users to mint CDP tokens or pension shares indefinitely, disrupting the system&apos;s economic balance.</p>
                </div>
            </div>

            <div className='flex flex-col gap-6 sm:border-l-2 sm:pl-10 md:pl-20'>
                <h1 className='bg-[#ABCDFF] font-bold font-inter text-xl px-1 '>After QuillAudits</h1>

                <div className='font-poppins font-normal text-lg leading-[24px] flex flex-col gap-4 sm:gap-12'>
                    <p className=''>Implementation of reentrancy protection mechanisms.</p>
                    <p className='  '>Ensure precision in decimal handling with standard libraries, recalculate accurately, fix logic errors, and secure referral systems against exploitation.</p>
                </div>
            </div>

            <div className="bg-gradient-to-b from-[#7184FD] to-[#2D83EE] p-[1px] rounded shadow-beforeafter-shadow sm:hidden">
                <div className="bg-white rounded px-6 py-4 flex flex-col gap-6">
                    <div className='w-fit h-fit font-inter'>
                        <h1 className=' font-normal text-sm text-[#808080]  leading-[21px]  '>Headquarters</h1>
                        <p className='font-medium text-base leading-6 text-[#00000A]'>Switzerland</p>
                    </div>
                    <div className='w-fit h-fit font-inter'>
                        <h1 className=' font-normal text-sm  leading-[21px]  text-[#808080] '>Chain</h1>
                        <p className='font-medium text-base leading-6 text-[#00000A]'>Pulse Blockchain</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeforeAfter