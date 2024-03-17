import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className="my-4 sm:flex justify-center items-center sm:py-8 sm:pb-4 sm:px-4">

            <h1 className='font-medium sm:hidden text-[16.84px] inline-block m-4  text-[#fff] leading-[24.33px] border-b-2 border-[#2D83EE] '>Case Studies</h1>


            {/* mobile */}
            <div className='sm:hidden'>
                <div className="bg-gradient-to-r from-custom-black to-custom-green  flex items-center justify-center sm:rounded-md p-16" style={{ backgroundImage: "linear-gradient(140.54deg, var(--tw-gradient-stops))" }} >
                    <Image src={'/images/heroimage.png'} width={326} height={104} alt="heroimage" className='sm:hidden' />
                    <Image src={'/images/heroimage.png'} width={438} height={140} alt="heroimage" className='hidden sm:block' />
                </div>
                <p className='hidden sm:block text-base leading-6 font-normal '>Carpe Diem Pension, a blockchain-based <br />
                    retirement fund, offers permanent <br />
                    payouts through CDP deposits, with a <br />
                    4.32% annual inflation claimable by <br />
                    depositors.</p>
                <div className='bg-white rounded bottom-[1rem] left-[55%] p-1 py-[6px] relative w-fit h-fit'>
                    <Image src={'/images/heroimage-small.png'} width={98} height={32} alt="heroimage" />
                </div>
            </div>

            {/* Dekstop */}
            <div>
                <div className='hidden h-[460px] bg-gradient-to-r from-custom-black sm:flex flex-col items-end justify-end to-custom-green rounded-lg lg:px-4 sm:px-2 ' style={{ backgroundImage: "linear-gradient(140.54deg, var(--tw-gradient-stops))" }} >
                    <div className=" flex items-center justify-center sm:rounded-md px-4  pb-0"  >
                        <Image src={'/images/heroimage.png'} width={398} height={120} alt="heroimage" />
                    </div>
                    <p className='text-white font-poppins hidden sm:block text-base leading-6 font-normal w-full px-4 py-4'>Carpe Diem Pension, a blockchain-based <br />
                        retirement fund, offers permanent <br />
                        payouts through CDP deposits, with a <br />
                        4.32% annual inflation claimable by <br />
                        depositors.</p>
                    <div className='bg-white rounded bottom-[1rem] left-[55%] p-1 py-[6px] relative w-fit h-fit sm:hidden'>
                        <Image src={'/images/heroimage-small.png'} width={98} height={32} alt="heroimage" />
                    </div>

                    <div className='bg-white rounded hidden  sm:block top-[170px] left-[40%] p-1 py-[6px] absolute w-fit h-fit'>
                        <Image src={'/images/heroimage-small.png'} width={118} height={42} alt="heroimage" className='p-1' />
                    </div>
                </div>
                <p className='text-xm text-start leading-[27.72px] text-[#fff] font-medium mt-8 ml-4 hidden sm:block'>
                    <span className='cursor-ponter opacity-[46%]'> QuillAudits {"-->"}</span>

                    <span className='cursor-ponter opacity-[46%]'> Resources  {"-->"}</span>

                    <span className='cursor-ponter'> Case Studies </span>

                </p>
            </div>

            <div className='px-6 py-4 sm:pr-0 flex items-start justify-center flex-col lg:pt-20 gap-8'>
                <h2 className='font-medium text-4xl sm:hidden leading-[43.2px] tracking-[1%] text-[#fff] sm:text-5xl sm:leading[57.6px] '>
                    Securing Trust : Boosting

                    Security and Strengthening
                    Trust at Carpe Diem Pension
                </h2>
                <h2 className='font-medium hidden sm:block text-4xl leading-[43.2px] tracking-[1%] text-[#fff] sm:pt-10 md:pt-8 lg:pt-0 sm:text-3xl md:text-4xl pr-0 lg:text-5xl sm:leading[57.6px] '>
                    Securing Trust : Boosting
                    <br />
                    Security and Strengthening
                    <br />
                    Trust at Carpe Diem Pension
                </h2>

                <p className='font-normal text-xl sm:text-base md:text-xl text-[#fff] leading-[30px]  '>
                    QuillAudits enhances Carpe Diem Pension by <br />
                    addressing 33 vulnerabilities on the Pulse blockchain,<br />
                    boosting security and user trust in digital pensions.
                </p>
                <p className='text-xs text-start leading-[27.72px] text-[#fff] font-medium mt-8 sm:hidden'>
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