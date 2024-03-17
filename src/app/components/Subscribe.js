import Image from 'next/image'
import React from 'react'

const Subscribe = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-8 py-8 mb-8 sm:hidden' >
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
                    <input type="text" placeholder="vitalik@ethereum.org" className='border-[1px] border-[#5A5A5A] rounded p-2 w-[300px]' style={{ boxShadow: '1.0560001134872437px 1.0560001134872437px 6.336000442504883px 0px #0000000F', textAlign: 'left' }} />

                    <button className='text-center w-fit h-fit  shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A]   rounded-[3.86px] bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)] text-white px-8 py-2'>
                        Subscribe
                    </button>
                </form>
            </div>
            {/* Desktop */}
            <div className='sm:flex  items-center justify-center sm:gap-4 lg:gap-8  py-8 hidden bg-gradient px-4' >

                <div className='flex flex-col gap-6'>
                    <h1 className='text-[22px] leading-[25.2px] text-[#407AFF] font-medium'>NEWSLETTER</h1>
                    <h2 className='font-semibold sm:text-2xl md:text-3xl lg:text-5xl leading-[69.36px] text-[#14316C]'>
                        Security First News
                        <br />
                        Letter by QuillAudits
                    </h2>
                    <p className='leading-[24px] text-[16px] font-normal text-[##2D3648]'>
                        Subscribe for the most Exclusive Weekly security
                        <br />
                        based newsletter and covering all the recent hacks
                        <br />
                        up to date.
                    </p>
                </div>

                <div className='flex flex-col gap-2'>
                    <Image src='/images/subscribe.png' alt='subscribe' className='' width={518} height={302} />

                    <form className='flex  flex-col gap-4 items-center justify-center'>
                        <input type="text" placeholder="vitalik@ethereum.org" className=' absolute border-[#5A5A5A] rounded p-2 py-3 md:w-[435px] sm:w-[380px]' style={{ boxShadow: '1.0560001134872437px 1.0560001134872437px 6.336000442504883px 0px #0000000F', textAlign: 'left' }} />

                        <button className='relative left-[26%] text-center w-fit h-fit  shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A]   rounded-[3.86px] bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)] text-white px-8 py-2 hover:scale-105 transform transition-transform duration-300    '>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Subscribe

