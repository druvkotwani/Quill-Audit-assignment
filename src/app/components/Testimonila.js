import Image from 'next/image'
import React from 'react'

const Testimonila = () => {
    return (
        <div className='py-8 mx-6 rounded'>

            <div className='bg-testimonial-gradient flex rounded '>
                <span className='top-[0.5rem] left-[0.5rem] relative'>{UpperComma()}</span>
                <div className='flex justify-between items-center gap-4 '>

                    <Image src='/images/testimonial.png' alt='testimonial' width={150} height={75} className='rounded-lg top-[3rem] right-[1rem] relative' />
                    <div className='mt-8'>
                        <h1 className='font-semibold leading-[41.62px] text-[28.8px]  text-white'>Carpediem</h1>
                        <p>TEAM</p>
                    </div>
                </div>
            </div>
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