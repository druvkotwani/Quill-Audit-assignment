import Image from 'next/image'
import React from 'react'

const Subscribe = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-8 py-8' >
            <h1 className='font-normal text-base text-center '>Security First{' '}
                <span className='inline-block border-b-2 border-[#2D83EE] '> Newsletter </span>
                {' '}by QuillAudits
            </h1>
            <div className='flex flex-col gap-4'>
                <Image src='/images/subscribe.png' alt='subscribe' width={283} height={145} />
                <p className='leading-[18.8px] text-[13px] font-normal text-center '>
                    DeFi & NFT Hacks, CTFs, and
                    <br />
                    Blockchain Security Insights straight to
                    <br />
                    your Inbox. Explore our weekly <br />
                    newsletter: <span className='text-[#2D83EE] font-semibold'>HashingBits</span>. Stay updated <br />
                    on everything we’re publishing. Stand a <br />
                    step ahead.
                </p>
            </div>

            <form className='flex flex-col gap-4 items-center justify-center'>
                <input type="text" placeholder="vitalik@ethereum.org" className='border-2 border-[#5A5A5A] rounded p-2 w-[300px]' style={{ boxShadow: '1.0560001134872437px 1.0560001134872437px 6.336000442504883px 0px #0000000F', textAlign: 'left' }} />

                <button className='text-center w-fit h-fit  shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A]   rounded-[3.86px] bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)] text-white px-8 py-2'>
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default Subscribe

