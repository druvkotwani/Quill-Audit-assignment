import Image from 'next/image'
import React from 'react'

const About = ({ heading, text, img }) => {
    return (
        <div className='px-4 flex flex-col gap-8 py-6'>
            <h1 className='font-bold text-[#00000a] text-[34px]  leading-[42.5px] '>{heading}</h1>
            <div className='flex flex-col gap-6'>
                <p className='font-poppins text-lg leading-[27px] font-normal '>{text}</p>
                {
                    img && <Image src={img} alt="logo" width={382} height={187} className='rounded-md ' />
                }
            </div>
        </div>
    )
}

export default About