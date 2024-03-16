import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className="my-4">
            {/* Image */}
            <h1 className='font-medium text-[16.84px] inline-block m-4  text-[#fff] leading-[24.33px] border-b-2 border-[#2D83EE] '>Case Studies</h1>

            <div className=''>
                <div class=" bg-gradient-to-r from-custom-black to-custom-green flex items-center justify-center p-16" style={{ backgroundImage: "linear-gradient(140.54deg, var(--tw-gradient-stops))" }}>
                    <Image src={'/images/heroimage.png'} width={326} height={104} alt="heroimage" />
                </div>

                <div className='bg-white rounded bottom-[1rem] left-[55%] p-1 py-[6px] relative w-fit h-fit'>
                    <Image src={'/images/heroimage-small.png'} width={98} height={32} alt="heroimage" />
                </div>
            </div>


            <div className='px-6 py-4 flex items-start justify-center flex-col gap-8'>
                <h2 className='font-medium text-4xl leading-[43.2px] tracking-[1%] text-[#fff] '>
                    Securing Trust : Boosting Security and Strengthening Trust at Carpe Diem Pension
                </h2>

                <p className='font-normal text-xl text-[#fff] leading-[30px]  '>
                    QuillAudits enhances Carpe Diem Pension by addressing 33 vulnerabilities on the Pulse blockchain, boosting security and user trust in digital pensions.
                </p>
                <p className='text-xs text-start leading-[27.72px] text-[#fff] font-medium mt-8 '>
                    <span className='cursor-ponter'> QuillAudits </span>
                    {"-->"}
                    <span className='cursor-ponter'> Resources </span>
                    {"-->"}
                    <span className='cursor-ponter'> Case Studies </span>
                    {"->"}
                    <span className='cursor-ponter'> kucoin</span>
                </p>
            </div>

        </div >
    )
}

export default HeroSection