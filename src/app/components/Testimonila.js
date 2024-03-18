import Image from 'next/image'
import React from 'react'

const Testimonila = () => {
    return (
        <div className=' mx-6 rounded h-[455px] bg-white shadow-[0px_3.200000047683716px_3.200000047683716px_0px_#00000040] flex flex-col justify-between '>

            <div className='bg-testimonial-gradient flex rounded  h-[146px] flex-col'>
                <span className='place-self-start p-4'>{UpperComma()}</span>

                <div className='flex justify-between items-center gap-4 px-4'>
                    <Image src='/images/testimonial.png' alt='testimonial' width={150} height={75} className='rounded-lg ' />
                    <div className='flex flex-col gap-4'>
                        <div>
                            <h1 className='font-semibold leading-[41.62px] text-[28.8px]  text-white'>Carpediem</h1>
                            <p className='font-normal leading-[27.7px] text-[19.2px]  text-white'>TEAM</p>
                        </div>
                        <div className='flex gap-2 py-4'>
                            {
                                Array.from({ length: 5 }, (_, i) => <span key={i}>{star()}</span>)
                            }
                        </div>
                    </div>
                </div>
            </div>

            <p className='text-lg leading-[26.1px] px-4 mt-16'>
                “It felt like the auditing team was available within a short timeframe, which was excellent. The auditing process looked thorough, and I really appreciate the fact that you took time to investigate GAS optimizations.”
            </p>

            <span className='place-self-end p-4'>{LowerComma()}</span>

        </div>
    )
}

export default Testimonila

function UpperComma() {
    return (
        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.71481 3.6672C4.9589 1.2336 8.35463 0 12.806 0H14.4055V4.5104L13.1195 4.768C10.9282 5.2064 9.4039 6.0688 8.58816 7.3344C8.16252 8.01621 7.92112 8.79687 7.88758 9.6H12.806C13.2302 9.6 13.6371 9.76857 13.937 10.0686C14.237 10.3687 14.4055 10.7757 14.4055 11.2V22.4C14.4055 24.1648 12.9708 25.6 11.2065 25.6H1.60955C1.18534 25.6 0.778503 25.4314 0.478539 25.1314C0.178575 24.8313 0.0100574 24.4243 0.0100574 24V16L0.0148559 11.3296C0.000460419 11.152 -0.303444 6.944 2.71481 3.6672ZM28.801 25.6H19.204C18.7798 25.6 18.373 25.4314 18.073 25.1314C17.773 24.8313 17.6045 24.4243 17.6045 24V16L17.6093 11.3296C17.5949 11.152 17.291 6.944 20.3093 3.6672C22.5534 1.2336 25.9491 0 30.4005 0H32V4.5104L30.714 4.768C28.5227 5.2064 26.9984 6.0688 26.1826 7.3344C25.757 8.01621 25.5156 8.79687 25.482 9.6H30.4005C30.8247 9.6 31.2316 9.76857 31.5315 10.0686C31.8315 10.3687 32 10.7757 32 11.2V22.4C32 24.1648 30.5653 25.6 28.801 25.6Z" fill="white" />
        </svg>

    )
}

function star() {
    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.87831 1.68328C9.35727 0.209181 11.4427 0.209184 11.9217 1.68328L13.2738 5.84458C13.488 6.50382 14.1023 6.95016 14.7955 6.95016H19.1709C20.7209 6.95016 21.3653 8.93354 20.1114 9.84458L16.5716 12.4164C16.0108 12.8238 15.7761 13.546 15.9903 14.2053L17.3424 18.3666C17.8214 19.8407 16.1342 21.0665 14.8803 20.1554L11.3405 17.5836C10.7797 17.1762 10.0203 17.1762 9.45954 17.5836L5.91973 20.1554C4.66579 21.0665 2.97862 19.8407 3.45758 18.3666L4.80967 14.2053C5.02387 13.546 4.78922 12.8238 4.22844 12.4164L0.688621 9.84458C-0.565321 8.93354 0.0791221 6.95016 1.62908 6.95016H6.00453C6.69769 6.95016 7.31202 6.50382 7.52622 5.84458L8.87831 1.68328Z" fill="url(#paint0_linear_564_79)" />
            <defs>
                <linearGradient id="paint0_linear_564_79" x1="10.4" y1="-3" x2="10.4" y2="25.8" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCE50" />
                    <stop offset="1" stop-color="#FE9D0B" />
                </linearGradient>
            </defs>
        </svg>

    )
}

function LowerComma() {
    return (
        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.2852 21.9344C27.0411 24.368 23.6454 25.6016 19.194 25.6016H17.5945V21.0912L18.8805 20.8336C21.0718 20.3952 22.5961 19.5328 23.4118 18.2672C23.8375 17.5854 24.0789 16.8047 24.1124 16.0016H19.194C18.7698 16.0016 18.3629 15.833 18.063 15.5329C17.763 15.2329 17.5945 14.8259 17.5945 14.4016V3.20156C17.5945 1.43676 19.0292 0.00156212 20.7935 0.00156212H30.3904C30.8147 0.00156212 31.2215 0.170132 31.5215 0.47019C31.8214 0.770248 31.9899 1.17722 31.9899 1.60156V9.60156L31.9851 14.272C31.9995 14.4496 32.3034 18.6576 29.2852 21.9344ZM3.19899 0.00156212H12.796C13.2202 0.00156212 13.627 0.170132 13.927 0.47019C14.227 0.770248 14.3955 1.17722 14.3955 1.60156V9.60156L14.3907 14.272C14.4051 14.4496 14.709 18.6576 11.6907 21.9344C9.44663 24.368 6.0509 25.6016 1.5995 25.6016H0V21.0912L1.286 20.8336C3.47731 20.3952 5.00163 19.5328 5.81737 18.2672C6.24301 17.5854 6.48441 16.8047 6.51795 16.0016H1.5995C1.17528 16.0016 0.768444 15.833 0.468481 15.5329C0.168516 15.2329 0 14.8259 0 14.4016V3.20156C0 1.43676 1.43475 0.00156212 3.19899 0.00156212Z" fill="#204ECF" />
        </svg>

    )
}