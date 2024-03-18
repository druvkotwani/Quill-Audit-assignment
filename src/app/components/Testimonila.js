import Image from 'next/image'
import React from 'react'

const Testimonila = () => {
    return (
        <div className=' mx-6 rounded h-[455px] bg-white shadow-[0px_3.200000047683716px_3.200000047683716px_0px_#00000040] flex flex-col justify-between '>

            <div className='bg-testimonial-gradient flex rounded  h-[146px] flex-col '>
                <span className='place-self-start p-4'>{UpperComma()}</span>

                {/* mobile */}
                <div className='flex justify-between items-center gap-4 px-4 sm:px-4  lg:hidden '>
                    <Image src='/images/testimonial.png' alt='testimonial' width={150} height={75} className='rounded-lg ' />
                    <div className='flex flex-col gap-4 '>
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
                {/* Desktop */}
                <div className='lg:flex hidden justify-between items-center gap-4 px-4 lg:px-[11%] xl:px-[15%] '>
                    <div className='flex flex-col gap-4 '>
                        <div>
                            <h1 className='font-semibold leading-[41.62px] text-[28.8px]  text-white'>Sally Radley</h1>
                            <p className='font-normal leading-[27.7px] text-[19.2px]  text-white'>WebGFi - CEO</p>
                        </div>
                        <div className='flex gap-2 py-4'>
                            {stars()}
                        </div>
                    </div>
                    <Image src='/images/testimonial.png' alt='testimonial' width={170} height={95} className='rounded-lg ' />
                </div>

            </div>

            <p className='text-lg leading-[26.1px] px-4 mt-16 sm:px-[5%] lg:px-[15%] '>
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
                    <stop offset="1" stopColor="#FE9D0B" />
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

function stars() {
    return (
        <svg width="171" height="29" viewBox="0 0 171 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6781 4.68328C14.1571 3.20918 16.2425 3.20918 16.7215 4.68328L18.0736 8.84458C18.2878 9.50382 18.9021 9.95016 19.5953 9.95016H23.9707C25.5207 9.95016 26.1651 11.9335 24.9112 12.8446L21.3714 15.4164C20.8106 15.8238 20.5759 16.546 20.7901 17.2053L22.1422 21.3666C22.6212 22.8407 20.934 24.0665 19.6801 23.1554L16.1403 20.5836C15.5795 20.1762 14.8201 20.1762 14.2593 20.5836L10.7195 23.1554C9.46559 24.0665 7.77842 22.8407 8.25739 21.3666L9.60948 17.2053C9.82368 16.546 9.58902 15.8238 9.02824 15.4164L5.48843 12.8446C4.23448 11.9335 4.87893 9.95016 6.42888 9.95016H10.8043C11.4975 9.95016 12.1118 9.50382 12.326 8.84458L13.6781 4.68328Z" fill="url(#paint0_linear_1_701)" />
            <path d="M48.8783 4.68328C49.3573 3.20918 51.4427 3.20918 51.9217 4.68328L53.2738 8.84458C53.488 9.50382 54.1023 9.95016 54.7955 9.95016H59.1709C60.7209 9.95016 61.3653 11.9335 60.1114 12.8446L56.5716 15.4164C56.0108 15.8238 55.7761 16.546 55.9903 17.2053L57.3424 21.3666C57.8214 22.8407 56.1342 24.0665 54.8803 23.1554L51.3405 20.5836C50.7797 20.1762 50.0203 20.1762 49.4595 20.5836L45.9197 23.1554C44.6658 24.0665 42.9786 22.8407 43.4576 21.3666L44.8097 17.2053C45.0239 16.546 44.7892 15.8238 44.2284 15.4164L40.6886 12.8446C39.4347 11.9335 40.0791 9.95016 41.6291 9.95016H46.0045C46.6977 9.95016 47.312 9.50382 47.5262 8.84458L48.8783 4.68328Z" fill="url(#paint1_linear_1_701)" />
            <path d="M84.0775 4.68328C84.5565 3.20918 86.6419 3.20918 87.1209 4.68328L88.473 8.84458C88.6872 9.50382 89.3015 9.95016 89.9947 9.95016H94.3701C95.9201 9.95016 96.5645 11.9335 95.3106 12.8446L91.7708 15.4164C91.21 15.8238 90.9753 16.546 91.1895 17.2053L92.5416 21.3666C93.0206 22.8407 91.3334 24.0665 90.0795 23.1554L86.5397 20.5836C85.9789 20.1762 85.2195 20.1762 84.6588 20.5836L81.1189 23.1554C79.865 24.0665 78.1778 22.8407 78.6568 21.3666L80.0089 17.2053C80.2231 16.546 79.9884 15.8238 79.4277 15.4164L75.8878 12.8446C74.6339 11.9335 75.2783 9.95016 76.8283 9.95016H81.2037C81.8969 9.95016 82.5112 9.50382 82.7254 8.84458L84.0775 4.68328Z" fill="url(#paint2_linear_1_701)" />
            <path d="M119.278 4.68328C119.757 3.20918 121.842 3.20918 122.321 4.68328L123.673 8.84458C123.887 9.50382 124.502 9.95016 125.195 9.95016H129.57C131.12 9.95016 131.765 11.9335 130.511 12.8446L126.971 15.4164C126.41 15.8238 126.176 16.546 126.39 17.2053L127.742 21.3666C128.221 22.8407 126.534 24.0665 125.28 23.1554L121.74 20.5836C121.179 20.1762 120.42 20.1762 119.859 20.5836L116.319 23.1554C115.065 24.0665 113.378 22.8407 113.857 21.3666L115.209 17.2053C115.423 16.546 115.189 15.8238 114.628 15.4164L111.088 12.8446C109.834 11.9335 110.479 9.95016 112.028 9.95016H116.404C117.097 9.95016 117.711 9.50382 117.926 8.84458L119.278 4.68328Z" fill="url(#paint3_linear_1_701)" />
            <path d="M154.478 4.68328C154.957 3.20918 157.042 3.20918 157.521 4.68328L158.873 8.84458C159.088 9.50382 159.702 9.95016 160.395 9.95016H164.771C166.32 9.95016 166.965 11.9335 165.711 12.8446L162.171 15.4164C161.61 15.8238 161.376 16.546 161.59 17.2053L162.942 21.3666C163.421 22.8407 161.734 24.0665 160.48 23.1554L156.94 20.5836C156.379 20.1762 155.62 20.1762 155.059 20.5836L151.519 23.1554C150.265 24.0665 148.578 22.8407 149.057 21.3666L150.409 17.2053C150.623 16.546 150.389 15.8238 149.828 15.4164L146.288 12.8446C145.034 11.9335 145.679 9.95016 147.229 9.95016H151.604C152.297 9.95016 152.912 9.50382 153.126 8.84458L154.478 4.68328Z" fill="url(#paint4_linear_1_701)" />
            <defs>
                <linearGradient id="paint0_linear_1_701" x1="15.1998" y1="0" x2="15.1998" y2="28.8" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCE50" />
                    <stop offset="1" stop-color="#FE9D0B" />
                </linearGradient>
                <linearGradient id="paint1_linear_1_701" x1="50.4" y1="0" x2="50.4" y2="28.8" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCE50" />
                    <stop offset="1" stop-color="#FE9D0B" />
                </linearGradient>
                <linearGradient id="paint2_linear_1_701" x1="85.5992" y1="0" x2="85.5992" y2="28.8" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCE50" />
                    <stop offset="1" stop-color="#FE9D0B" />
                </linearGradient>
                <linearGradient id="paint3_linear_1_701" x1="120.799" y1="0" x2="120.799" y2="28.8" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCE50" />
                    <stop offset="1" stop-color="#FE9D0B" />
                </linearGradient>
                <linearGradient id="paint4_linear_1_701" x1="156" y1="0" x2="156" y2="28.8" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCE50" />
                    <stop offset="1" stop-color="#FE9D0B" />
                </linearGradient>
            </defs>
        </svg>

    )
}