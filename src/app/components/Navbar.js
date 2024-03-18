'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = ({ hasbackground }) => {
    const menuItems = [
        {
            title: 'Services',
            items: [
                { name: 'Option 1', link: '#' },
                { name: 'Option 2', link: '#' },
            ],
            show: false
        },
        {
            title: 'Pricing',
        },
        {
            title: 'Our Audits',
        },
        {
            title: 'Tools',
            items: [
                { name: 'Option 1', link: '#' },
                { name: 'Option 2', link: '#' },
            ],
            show: false

        },
        {
            title: 'Resources',
            items: [
                { name: 'Option 1', link: '#' },
                { name: 'Option 2', link: '#' },
            ],
            show: false

        },
        {
            title: 'Refer-Earn-Secure',
        }

    ]
    const [isOpen, setIsOpen] = useState(false)
    const [show, setShow] = useState({})
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    const handleShow = (index) => {
        setShow(prevState => {
            const updatedState = { ...prevState };
            Object.keys(updatedState).forEach(key => {
                if (key !== index.toString()) {
                    updatedState[key] = false; // Close all other submenus
                }
            });
            updatedState[index] = !prevState[index]; // Toggle visibility for the clicked item
            return updatedState;
        });
    };

    return (
        <>
            {/* Mobile devices */}
            <div className="flex  justify-between items-center p-4 sm:hidden">
                <Image src={'/images/quillauditsicon.png'} alt="logo" width={41} height={39} />
                <button className='font-medium text-[12.7px] leading-[17.4px] text-white  text-center shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A] py-2 px-3 rounded-[4.39px] bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)]'>
                    Request An Audit
                </button>
                <button onClick={handleToggle} className=''>{hamburger()}</button>
            </div>

            {isOpen && (
                <div className={`fixed inset-y-0 right-0 w-[80vw] flex z-50 bg-white  transition-all  animate-fadeInRight animation-duration-100 sm:hidden`}>
                    <div className="fixed inset-0">
                        <div className={`absolute inset-0 ${hasbackground ? `transparent` : `bg-gray-600`} opacity-75`}></div>
                    </div>

                    <div className={`relative flex-1 flex flex-col  z-50 w-full bg-[url('/images/herobg.png')]`}  >
                        <div className="absolute top-0 right-0 -ml-14 p-3">
                            <button
                                onClick={handleToggle}
                                className={`flex items-center justify-center h-12 w-12 rounded-full ${hasbackground ? '' : 'text-white'}  focus:outline-none focus:bg-gray-600`}
                            >
                                <svg
                                    className="h-6 w-6 "
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="pt-4 ">
                            <div className=" mt-1 ml-4">
                                <Image width={155} height={50} src='/images/QuillAudits.png' alt="logo" />
                            </div>
                            <div className={`pt-8 px-4 text-white flex flex-col space-y-3 items-start`}>
                                <ul className='flex flex-col w-fit h-fit items-start justify-center gap-6 leading-[32.13px] text-[19.42px] z-[100]    text-white'>
                                    {
                                        menuItems.map((item, index) => (
                                            <li key={index} className='cursor-pointer w-fit h-fit'>
                                                <span onClick={() => handleShow(index)} className='flex justify-start items-center gap-1'>{item.title} {item.items && downArrow()}</span>
                                                {item.items && show[index] && <HoveredItem items={item.items} />}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop */}
            <div className='hidden sm:block md:px-[4%] sm:px-[2%] lg:px-[8%] py-4'>
                <div className='flex justify-between items-center border-b-2 pb-4 border-b-[#8a8a8a] border-opacity-15'>
                    <Image src={'/images/QuillAudits.png'} alt="logo" className='lg:w-40 md:w-32 sm:hidden lg:block   ' width={217} height={43} />
                    <Image src={'/images/quillauditsicon.png'} alt="logo" className='  lg:hidden sm:block  ' width={47} height={23} />

                    <ul className='flex items-center justify-center sm:gap-2 md:gap-3 xl:gap-6 sm:leading-[26.3px] xl:leading-[32.13px] sm:text-[14.5px]  xl:text-[19.42px] text-white'>
                        {
                            menuItems.map((item, index) => (
                                <li key={index} className='cursor-pointer w-fit h-fit '>
                                    <span onClick={() => handleShow(index)} className='flex justify-start items-center gap-1'>{item.title} {item.items && downArrow()}</span>
                                    {item.items && show[index] && <ClickItem items={item.items} />}
                                </li>
                            ))
                        }
                    </ul>

                    <button className='cursor-pointer font-medium md:text-[15px] sm:text-[13px]  xl:text-[20px] leading-[30px] text-white  text-center shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A] py-2 md:px-3 xl:px-6 rounded-[6px]  bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)] hover:scale-105 transform transition-transform duration-300 sm:px-2'>
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

function downArrow(width = "18", height = "11") {
    return (
        <svg width={width} height={height} className='mt-1' viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25668 2.28062L1.16184 2.37493L1.25605 2.46986L9.28852 10.5632L9.38354 10.659L9.47856 10.5632L17.5111 2.46986L17.6053 2.37493L17.5105 2.28062L16.2253 1.00272L16.1303 0.908238L16.0359 1.00335L9.38357 7.70603L2.73127 1.00335L2.63687 0.908241L2.54185 1.00272L1.25668 2.28062Z" fill="white" stroke="white" strokeWidth="0.26775" />
        </svg>

    )
}

const HoveredItem = ({ items }) => {
    return (
        <div className={`peer-hover:block hover:block origin-top   rounded-md `}>
            <div className=" rounded-md  shadow-xs">

                {items.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="w-fit h-fit block  text-left ml-4  py-2 text-lg leading-5 text-theme-purple hover:text-gray-100 focus:outline-none  transition duration-150 ease-in-out"
                    >
                        {item.name}
                    </a>
                ))}

            </div>
        </div>
    )
}
const ClickItem = ({ items }) => {
    return (
        <div className={`peer-hover:block hover:block origin-top  absolute bg-[url('/images/footer-md-image.png')] px-12 py-2 rounded-md `}>
            <div className=" rounded-md  shadow-xs">

                {items.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="w-full block  text-left   py-2 text-lg leading-5 text-theme-purple hover:text-gray-300  transition duration-150 ease-in-out"
                    >
                        {item.name}
                    </a>
                ))}

            </div>
        </div>
    )
}