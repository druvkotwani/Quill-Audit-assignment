import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="absolute bg-[url('/images/footerBg.png')] px-4 lg:px-16 flex flex-col gap-8">

            {/* Logo */}
            <div className='flex flex-col w-fit h-fit mx-auto sm:mx-0 mt-8'>
                <Image src="/images/QuillAudits.png" alt="logo" width={250} height={23} />
                <p className='font-normal text-sm text-right text-[#eaeaea] text-[12.94px]  leading-[18.69px] '>Making Web3 a safer place</p>
            </div>

            {/* Boxes */}
            <div className='grid grid-cols-2 text-[#fff] font-medium text-[13.52px] leading-[19px] gap-4 sm:hidden'>
                <div className='text-center shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A]  p-2 rounded-[3.86px] bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)]'>
                    WAGSI Grants
                </div>
                <div className='text-center shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A]  p-2 rounded-[3.86px]  bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)]'>
                    Ambassador Program
                </div>
                <div className='text-center shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A]  p-2 rounded-[3.86px] bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)]'>
                    Refer-Earn-Secure
                </div>
                <div className='text-center shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A] p-2 rounded-[3.86px] bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)]'>
                    Partnership Program
                </div>
            </div>

            {/* Services */}
            {/* Mobile */}
            <div className='flex flex-wrap justify-between gap-4 px-4 sm:hidden '>
                <div className='flex flex-col gap-3 w-fit h-fit '>
                    <div>
                        <h1 className='font-medium text-[16.84px] inline-block text-[#fff] leading-[24.33px] border-b-2       border-[#2D83EE] '>Audit Services</h1>
                    </div>

                    <div className='text-[#F1F1F1] font-medium text-[13.1px] leading-[18.93px] flex flex-col gap-3'>
                        <p>Ethereum Audit</p>
                        <p>Polygon Audit</p>
                        <p>BSC Audit</p>
                        <p>Solana Audit</p>
                        <p>NEAR Audit</p>
                        <p>Algorand Audit</p>
                        <p>Tezos Audit</p>
                        <p>Hyperledger Fabric Audit</p>
                        <p>L1 Audit</p>
                        <p>Polkadot Audit</p>
                        <p>Wallet Audit</p>
                        <p>ZkSync Audit</p>
                        <p>Starknet Audit</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3 w-fit h-fit   '>
                    <div>
                        <h1 className='font-medium text-[16.84px] inline-block text-[#fff] leading-[24.33px] border-b-2       border-[#2D83EE] '>Quill Ecosystem</h1>
                    </div>

                    <div className='text-[#F1F1F1] font-medium text-[13.1px] leading-[18.93px] flex flex-col gap-3 '>
                        <p>QuillAI</p>
                        <p>QuillCheck</p>
                        <p>QuillShield</p>
                        <p>QuillAcademy</p>
                        <p>QuillMonitor</p>
                        <p>Web3Suggest</p>
                        <p>Explore All Tools</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3 w-fit h-fit '>
                    <div>
                        <h1 className='font-medium text-[16.84px] inline-block text-[#fff] leading-[24.33px] border-b-2 border-[#2D83EE] '>Other Services</h1>
                    </div>

                    <div className='text-[#F1F1F1] font-medium text-[13.1px] leading-[18.93px] flex flex-col gap-3'>
                        <p>Red Teaming</p>
                        <p>dApp Pentesting</p>
                        <p>DeFi Diligence</p>
                        <p>NFT Due Diligence</p>
                        <p>Rug Pull Due Diligence</p>
                        <p>Security Consultation</p>
                        <p>Blockchain Forensics</p>
                        <p>KYC (Know Your Customer)</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3 w-fit h-fit '>
                    <div>
                        <h1 className='font-medium text-[16.84px] inline-block text-[#fff] leading-[24.33px] border-b-2 border-[#2D83EE] '>Quick Links</h1>
                    </div>

                    <div className='text-[#F1F1F1] font-medium text-[13.1px] leading-[18.93px] flex flex-col gap-3'>
                        <p>Pricing</p>
                        <p>Audit Process</p>
                        <p>Our Audits</p>
                        <p>Testimonials</p>
                        <p>Security Synopsis</p>
                        <p>Blog</p>
                        <p>Clients</p>
                        <p>
                            Careers
                            <button className='bg-[#2d83ee] p-1 px-2 ml-2 rounded-md '>Hiring</button>
                        </p>
                    </div>
                </div>

                <div className='flex flex-col gap-3 w-fit h-fit '>
                    <div>
                        <h1 className='font-medium text-[16.84px] inline-block text-[#fff] leading-[24.33px] border-b-2 border-[#2D83EE] '>More About Quill</h1>
                    </div>

                    <div className='text-[#F1F1F1] font-medium text-[13.1px] leading-[18.93px] flex flex-col gap-3'>
                        <p>About Us</p>
                        <p>FAQs</p>
                        <p>Blockchains We Audit</p>
                    </div>

                    <div className='text-[#F1F1F1] text-[14.97px]  leading-[21.63px] flex flex-col justify-center items-start gap-2 mt-4'>
                        <h1 className=' font-medium '>Contact Us:</h1>

                        <div className=' font-normal flex flex-col gap-2 '>
                            <p className='italic flex gap-2 items-center justify-start '>
                                {emailSVg()}
                                <span className='border-b'>audits@quillhash.com</span>
                            </p>
                            <p className='italic flex gap-2 items-center justify-start '>
                                {telegramSvg()}
                                <span className='border-b'>t.me/quillaudits</span>
                            </p>

                            <p className='flex flex-col  gap-4 mt-4'>
                                <span className='flex gap-2 justify-start items-center font-medium '>{locationSvg()}Our Location:</span>
                                <span className='font-normal '>
                                    Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed Bin Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box : 416654
                                </span>
                            </p>

                        </div>
                    </div>


                </div>
            </div>

            {/* Desktop */}
            <div className='sm:grid sm:grid-cols-3 lg:grid-cols-5  sm:gap-4 lg:gap-8 hidden '>
                <div className='flex flex-col gap-3 w-fit h-fit '>
                    <div>
                        <h1 className='font-medium text-[16.84px] inline-block text-[#fff] leading-[24.33px] border-b-2 border-[#2D83EE] '>More About Quill</h1>
                    </div>

                    <div className='text-[#F1F1F1] font-medium text-[13.1px] leading-[18.93px] flex flex-col gap-3'>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>About Us</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit '>FAQs</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Blockchains We Audit</p>
                    </div>

                    <div className='text-[#F1F1F1] text-[14.97px]  leading-[21.63px] flex flex-col justify-center items-start gap-2 mt-4'>
                        <h1 className=' font-medium '>Contact Us:</h1>

                        <div className=' font-normal flex flex-col gap-2 '>
                            <p className='italic flex gap-2 items-center justify-start cursor-pointer hover:text-gray-300 w-fit h-fit'>
                                {emailSVg()}
                                <span className='border-b  '>audits@quillhash.com</span>
                            </p>
                            <p className='italic flex gap-2 items-center justify-start cursor-pointer hover:text-gray-300 w-fit h-fit'>
                                {telegramSvg()}
                                <span className='border-b '>t.me/quillaudits</span>
                            </p>

                            <p className='flex flex-col  gap-4 mt-4'>
                                <span className='flex gap-2 justify-start items-center font-medium '>{locationSvg()}Our Location:</span>
                                <span className='font-normal '>
                                    Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed Bin Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box : 416654
                                </span>
                            </p>

                        </div>
                    </div>


                </div>
                <div className='flex flex-col gap-3 w-fit h-fit '>
                    <div>
                        <h1 className='font-medium text-[16.84px] inline-block text-[#fff] leading-[24.33px] border-b-2       border-[#2D83EE] '>Audit Services</h1>
                    </div>

                    <div className='text-[#F1F1F1] font-medium text-[13.1px] leading-[18.93px] flex flex-col gap-3'>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Ethereum Audit</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Polygon Audit</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>BSC Audit</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Solana Audit</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>NEAR Audit</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Algorand Audit</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Tezos Audit</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Hyperledger Fabric Audit</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>L1 Audit</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Polkadot Audit</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Wallet Audit</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>ZkSync Audit</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Starknet Audit</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3 w-fit h-fit   '>
                    <div>
                        <h1 className='font-medium text-[16.84px] inline-block text-[#fff] leading-[24.33px] border-b-2       border-[#2D83EE] '>Quill Ecosystem</h1>
                    </div>

                    <div className='text-[#F1F1F1] font-medium text-[13.1px] leading-[18.93px] flex flex-col gap-3 '>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>QuillAI</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>QuillCheck</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>QuillShield</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>QuillAcademy</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>QuillMonitor</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Web3Suggest</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Explore All Tools</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3 w-fit h-fit '>
                    <div>
                        <h1 className='font-medium text-[16.84px] inline-block text-[#fff] leading-[24.33px] border-b-2 border-[#2D83EE] '>Other Services</h1>
                    </div>

                    <div className='text-[#F1F1F1] font-medium text-[13.1px] leading-[18.93px] flex flex-col gap-3'>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Red Teaming</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>dApp Pentesting</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>DeFi Diligence</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>NFT Due Diligence</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Rug Pull Due Diligence</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Security Consultation</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Blockchain Forensics</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>KYC (Know Your Customer)</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3 w-fit h-fit '>
                    <div>
                        <h1 className='font-medium text-[16.84px] inline-block text-[#fff] leading-[24.33px] border-b-2 border-[#2D83EE] '>Quick Links</h1>
                    </div>

                    <div className='text-[#F1F1F1] font-medium text-[13.1px] leading-[18.93px] flex flex-col gap-3'>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Pricing</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Audit Process</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Our Audits</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Testimonials</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Security Synopsis</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Blog</p>
                        <p className='cursor-pointer hover:text-gray-300 w-fit h-fit'>Clients</p>
                        <p className='cursor-pointer w-fit h-fit'>
                            <span className='hover:text-gray-300'>Careers</span>
                            <button className='bg-[#2d83ee] hover:text-white p-1 px-2 ml-2 rounded-md '>Hiring</button>
                        </p>
                    </div>
                </div>


            </div>

            <div className='sm:flex flex-col hidden gap-4 w-fit h-fit  lg:left-[40%]   bottom-[9rem] lg:relative'>
                <h1 className='font-medium text-[16.84px] inline-block text-[#fff] w-fit h-fit leading-[24.33px] border-b-2 border-[#2D83EE] '>Our Programmes</h1>

                <div className='xl:flex flex text-[#fff] lg:grid grid-cols-3 font-medium txt-[16.52px] leading-[23px] gap-4 '>
                    <div className='cursor-pointer hover:scale-105 transform transition-transform duration-300   text-center shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A]  p-2 lg:px-3 rounded-[3.86px] bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)]'>
                        Refer-Earn-Secure
                    </div>
                    <div className='cursor-pointer hover:scale-105 transform transition-transform duration-300   text-center shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A]  p-2 lg:px-3 rounded-[3.86px] bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)]'>
                        WAGSI Grants
                    </div>
                    <div className='cursor-pointer hover:scale-105 transform transition-transform duration-300   text-center shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A]  p-2 lg:px-3 rounded-[3.86px]  bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)]'>
                        Ambassador Program
                    </div>
                    <div className='cursor-pointer hover:scale-105 transform transition-transform duration-300  text-center shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A] p-2 rounded-[3.86px] lg:px-3 bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)]'>
                        Partnership Program
                    </div>
                </div>
            </div>

            <div className='flex sm:flex-row flex-col justify-between gap-6 sm:gap-4'>
                {/* Images */}
                <div className='flex justify-between sm:justify-center sm:w-fit sm:h-fit items-center gap-6 px-4 sm:px-0 '>
                    <Image src="/images/footer1.png" alt="footerImages" className='sm:w-[200px] sm:h-[50px]' width={1110} height={150} />
                    <Image src="/images/footer2.png" alt="footerImages" className='sm:w-[180px] sm:h-[50px]' width={1110} height={150} />
                </div>

                {/* Social Media */}
                <div className='flex gap-2 sm:gap-6 justify-between items-center px-4 sm:px-0  '>
                    <span className='cursor-pointer transform transition-transform duration-300 hover:scale-125 '>{twitter()}</span>
                    <span className='cursor-pointer transform transition-transform duration-300 hover:scale-125 '>{linkedin()}</span>
                    <span className='cursor-pointer transform transition-transform duration-300 hover:scale-125 '>{telegram()}</span>
                    <span className='cursor-pointer transform transition-transform duration-300 hover:scale-125 '>{reddit()}</span>
                    <span className='cursor-pointer transform transition-transform duration-300 hover:scale-125 '>{medium()}</span>
                    <span className='cursor-pointer transform transition-transform duration-300 hover:scale-125 '>{discord()}</span>
                    <span className='cursor-pointer transform transition-transform duration-300 hover:scale-125 '>{youtube()}</span>
                </div>
            </div>

            {/* Privacy Policy */}
            <div className='text-[#fff] sm:hidden font-medium text-[13.86px] leading-[20.03px] border-t border-t-[#F1F1F180] flex flex-col gap-2 py-4 my-4'>
                <h1 className='text-center'>Privacy Policy</h1>
                <p className='font-normal text-[12.86px] text-center '>All Rights Reserved. © Copyright 2023. QuillAudits - LLC</p>
            </div >
            <div className='text-[#fff] font-medium text-[13.86px]  hidden leading-[20.03px] border-t border-t-[#F1F1F180] sm:flex justify-between flex-row gap-2 py-4 mb-4'>
                <p className='font-normal text-[12.86px] text-center '>All Rights Reserved. © Copyright 2023. QuillAudits - LLC</p>
                <h1 className='text-center cursor-pointer hover:text-gray-300 w-fit h-fit'>Privacy Policy</h1>
            </div>
        </div>
    )
}

export default Footer

function emailSVg() {
    return (
        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.27417 7.5911C8.57876 7.81698 8.96027 7.9404 9.3539 7.9404C9.74754 7.9404 10.129 7.81698 10.4336 7.5911L17.9046 2.03162C17.5887 1.68432 17.1922 1.40435 16.7433 1.21161C16.2944 1.01888 15.8042 0.91812 15.3074 0.916504H3.4004C2.90365 0.91812 2.41339 1.01888 1.9645 1.21161C1.51561 1.40435 1.11912 1.68432 0.803223 2.03162L8.27417 7.5911Z" fill="#DDDDDD" />
            <path d="M11.515 8.78205C10.9056 9.23337 10.1426 9.47992 9.3555 9.47992C8.56837 9.47992 7.80544 9.23337 7.19603 8.78205L0.0589737 3.47095C0.0224382 3.64483 0.00270558 3.82126 0 3.99825V10.9324C0.000961316 11.7495 0.359694 12.5329 0.997485 13.1107C1.63528 13.6884 2.50003 14.0134 3.402 14.0143H15.309C16.211 14.0134 17.0757 13.6884 17.7135 13.1107C18.3513 12.5329 18.71 11.7495 18.711 10.9324V3.99825C18.7083 3.82126 18.6886 3.64483 18.652 3.47095L11.515 8.78205Z" fill="#DDDDDD" />
        </svg>
    )
}

function telegramSvg() {
    return (
        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.6733 1.10396C18.6582 1.03692 18.6251 0.974957 18.5773 0.92434C18.5295 0.873731 18.4688 0.836263 18.4012 0.815739C18.1554 0.768496 17.9011 0.785994 17.6645 0.866424C17.6645 0.866424 1.27087 6.58472 0.334603 7.2179C0.133473 7.35407 0.0656495 7.4335 0.0321278 7.52655C-0.130024 7.98044 0.374361 8.17562 0.374361 8.17562L4.59966 9.51158C4.6711 9.52398 4.74457 9.51982 4.81404 9.49947C5.77448 8.91017 14.4808 3.57314 14.9867 3.39385C15.0647 3.37116 15.1247 3.39385 15.1091 3.45059C14.908 4.13521 7.38431 10.6206 7.34299 10.6599C7.32286 10.6759 7.30718 10.6965 7.29737 10.7199C7.28758 10.7433 7.28396 10.7687 7.28686 10.7938L6.89239 14.7972C6.89239 14.7972 6.72712 16.0431 8.01106 14.7972C8.9216 13.9128 9.79551 13.1805 10.2321 12.8242C11.6852 13.7978 13.2482 14.8743 13.9226 15.4379C14.036 15.5444 14.1704 15.6277 14.3177 15.6827C14.4651 15.7376 14.6224 15.7633 14.7801 15.7579C14.9744 15.7349 15.1569 15.6551 15.3032 15.529C15.4496 15.4029 15.5529 15.2365 15.5994 15.0521C15.5994 15.0521 18.5852 3.38477 18.685 1.82187C18.6951 1.67057 18.7084 1.57071 18.71 1.46556C18.7149 1.34397 18.7025 1.22231 18.6733 1.10396Z" fill="#DDDDDD" />
        </svg>

    )
}

function locationSvg() {
    return (
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3635 4.18291C11.8761 3.21457 11.155 2.38524 10.2664 1.77115C9.37778 1.15706 8.35026 0.777931 7.27826 0.668609C6.79331 0.619578 6.30472 0.619578 5.81978 0.668609C4.7478 0.778003 3.7203 1.15712 2.83168 1.77114C1.94306 2.38515 1.22182 3.21436 0.734242 4.18259C0.120792 5.41798 -0.116159 6.80868 0.0532352 8.17951C0.222629 9.55035 0.790792 10.84 1.68616 11.8861L6.05233 17.2353C6.11263 17.3092 6.18843 17.3688 6.27428 17.4097C6.36013 17.4505 6.4539 17.4717 6.54886 17.4717C6.64381 17.4717 6.73758 17.4505 6.82344 17.4097C6.90929 17.3688 6.98509 17.3092 7.04538 17.2353L11.4116 11.8861C12.3069 10.8401 12.8751 9.55047 13.0445 8.17968C13.2139 6.8089 12.9769 5.41825 12.3635 4.18291ZM6.54886 9.69913C6.04036 9.69913 5.54328 9.54718 5.12048 9.2625C4.69768 8.97782 4.36814 8.57319 4.17355 8.09978C3.97895 7.62637 3.92804 7.10545 4.02724 6.60288C4.12644 6.10031 4.37131 5.63867 4.73087 5.27634C5.09044 4.91401 5.54855 4.66726 6.04728 4.56729C6.54601 4.46733 7.06295 4.51863 7.53274 4.71473C8.00254 4.91082 8.40407 5.24289 8.68658 5.66894C8.96909 6.095 9.11988 6.59591 9.11988 7.10832C9.11908 7.7952 8.84795 8.45371 8.36596 8.93941C7.88397 9.4251 7.23049 9.69832 6.54886 9.69913Z" fill="#DDDDDD" />
        </svg>

    )
}

function twitter() {
    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.2945 18.6691L12.3295 8.77872L11.5419 7.66021L6.55792 0.586631L6.14492 0H0.0234375L1.51617 2.12072L8.14169 11.5288L8.92919 12.6456L14.2527 20.2049L14.6657 20.7898H20.7889L19.2945 18.6691ZM15.3919 19.4353L9.86192 11.5818L9.07442 10.4633L2.65719 1.35279H5.41695L10.6074 8.72228L11.3949 9.84076L18.1534 19.437H15.3919V19.4353Z" fill="#DDDDDD" />
            <path d="M9.0755 10.4651L9.86301 11.5836L8.93028 12.6456L1.76575 20.7898H0L8.14277 11.5289L9.0755 10.4651Z" fill="#DDDDDD" />
            <path d="M20.0524 0L12.3314 8.77872L11.3969 9.84076L10.6094 8.72228L11.5439 7.66021L16.7746 1.71027L18.2867 0H20.0524Z" fill="#DDDDDD" />
        </svg>

    )
}

function linkedin() {
    return (
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.2691 0C19.8817 0 20.4692 0.24337 20.9025 0.676587C21.3357 1.10979 21.5791 1.69735 21.5791 2.31V18.48C21.5791 19.0926 21.3357 19.6802 20.9025 20.1134C20.4692 20.5466 19.8817 20.79 19.2691 20.79H3.09906C2.48642 20.79 1.89886 20.5466 1.46565 20.1134C1.03243 19.6802 0.789062 19.0926 0.789062 18.48V2.31C0.789062 1.69735 1.03243 1.10979 1.46565 0.676587C1.89886 0.24337 2.48642 0 3.09906 0H19.2691ZM18.6916 17.9025V11.781C18.6916 10.7824 18.2948 9.82466 17.5888 9.11849C16.8826 8.41244 15.9249 8.0157 14.9263 8.0157C13.9445 8.0157 12.8011 8.6163 12.2467 9.5172V8.23515H9.02421V17.9025H12.2467V12.2084C12.2467 11.319 12.9628 10.5914 13.8521 10.5914C14.281 10.5914 14.6923 10.7617 14.9954 11.065C15.2988 11.3682 15.4691 11.7795 15.4691 12.2084V17.9025H18.6916ZM5.27046 6.4218C5.78508 6.4218 6.27864 6.21737 6.64253 5.85347C7.00643 5.48958 7.21086 4.99602 7.21086 4.4814C7.21086 3.40725 6.34461 2.52945 5.27046 2.52945C4.75277 2.52945 4.25629 2.7351 3.89023 3.10116C3.52416 3.46723 3.31851 3.96371 3.31851 4.4814C3.31851 5.55555 4.19631 6.4218 5.27046 6.4218ZM6.87591 17.9025V8.23515H3.67656V17.9025H6.87591Z" fill="#DDDDDD" />
        </svg>

    )
}

function reddit() {
    return (
        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.4354 10.1892C23.4354 8.54244 22.1967 7.20445 20.6721 7.20445C20.0051 7.20445 19.4333 7.41029 18.9569 7.82197C17.2417 6.68985 15.1454 5.9694 12.8585 5.86648L14.0019 1.85257L17.2417 2.67594C17.337 3.91099 18.2899 4.94019 19.5286 4.94019C20.7674 4.94019 21.8155 3.80807 21.8155 2.4701C21.8155 1.13213 20.7674 0 19.5286 0C18.671 0 17.9087 0.514604 17.5276 1.33797L13.7161 0.411683C13.4302 0.308762 13.0491 0.514604 12.9538 0.823366L11.5245 5.86648C9.14228 5.9694 6.76009 6.58693 5.04492 7.82197C4.56848 7.41029 3.99676 7.20445 3.32974 7.20445C1.80514 7.20445 0.566406 8.54244 0.566406 10.1892C0.566406 11.2184 1.04284 12.1447 1.70986 12.6593C1.70986 12.8651 1.70986 13.1739 1.70986 13.3797C1.70986 15.4381 2.85331 17.2907 4.85434 18.7316C6.76009 20.0696 9.33286 20.79 12.0009 20.79C14.669 20.79 17.2417 20.0696 19.1475 18.7316C21.1485 17.2907 22.292 15.4381 22.292 13.3797C22.292 13.1739 22.292 12.968 22.292 12.7622C22.959 12.1447 23.4354 11.2184 23.4354 10.1892ZM19.6239 1.33797C20.1956 1.33797 20.6721 1.85257 20.6721 2.4701C20.6721 3.08762 20.1956 3.60222 19.6239 3.60222C19.0522 3.60222 18.5757 3.08762 18.5757 2.4701C18.5757 1.85257 19.0522 1.33797 19.6239 1.33797ZM7.04596 12.0417C7.04596 11.1155 7.80826 10.395 8.57056 10.395C9.42814 10.395 10.0952 11.2184 10.0952 12.0417C10.0952 12.8651 9.42814 13.6885 8.57056 13.6885C7.80826 13.6885 7.04596 12.968 7.04596 12.0417ZM15.8124 16.879C15.0501 17.7024 13.8114 18.1141 12.0962 18.1141C10.381 18.1141 9.14228 17.7024 8.37998 16.879C8.09412 16.5703 8.09412 16.1586 8.37998 15.9527C8.66584 15.644 9.04699 15.644 9.23757 15.9527C9.80929 16.5703 10.7622 16.879 12.0962 16.879C13.4302 16.879 14.3831 16.5703 14.9548 15.9527C15.2407 15.644 15.6218 15.644 15.8124 15.9527C16.003 16.2615 16.003 16.6732 15.8124 16.879ZM15.4313 13.6885C14.5737 13.6885 13.8114 12.968 13.8114 12.0417C13.8114 11.1155 14.5737 10.395 15.4313 10.395C16.2888 10.395 16.9559 11.2184 16.9559 12.0417C16.9559 12.8651 16.2888 13.6885 15.4313 13.6885Z" fill="#DDDDDD" />
        </svg>

    )
}

function medium() {
    return (
        <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8559 10.3951C16.8559 14.9879 13.1806 18.7111 8.64718 18.7111C4.11375 18.7111 0.438477 14.9879 0.438477 10.3951C0.438477 5.80229 4.11375 2.0791 8.64718 2.0791C13.1806 2.0791 16.8559 5.80229 16.8559 10.3951Z" fill="#DDDDDD" />
            <path d="M25.8608 10.3939C25.8608 14.7174 24.0232 18.2219 21.7563 18.2219C19.4895 18.2219 17.6519 14.7171 17.6519 10.3939C17.6519 6.07079 19.4895 2.56592 21.7563 2.56592C24.0232 2.56592 25.8608 6.07079 25.8608 10.3939Z" fill="#DDDDDD" />
            <path d="M29.5434 10.3967C29.5434 14.2703 28.8972 17.4104 28.0998 17.4104C27.3024 17.4104 26.6562 14.2703 26.6562 10.3967C26.6562 6.52313 27.3024 3.38306 28.0998 3.38306C28.8972 3.38306 29.5434 6.52313 29.5434 10.3967Z" fill="#DDDDDD" />
        </svg>

    )
}

function discord() {
    return (
        <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.4363 1.74119C21.6639 0.917095 19.7889 0.331537 17.8606 0C17.6204 0.431504 17.3398 1.01187 17.1462 1.47358C15.0672 1.16293 13.0075 1.16293 10.9666 1.47358C10.7733 1.01196 10.4863 0.431504 10.2439 0C8.31381 0.331696 6.43711 0.918743 4.66381 1.7455C1.1351 7.04445 0.178498 12.2116 0.656741 17.3056C2.99722 19.0424 5.26538 20.0975 7.49532 20.7879C8.0495 20.0305 8.5394 19.2288 8.95994 18.3908C8.15929 18.0879 7.38745 17.7147 6.65356 17.2754C6.8467 17.1332 7.03527 16.985 7.21903 16.8309C11.666 18.8978 16.4979 18.8978 20.8919 16.8309C21.0765 16.9838 21.265 17.1321 21.4573 17.2754C20.7222 17.7158 19.9489 18.0899 19.1467 18.3931C19.5696 19.2344 20.0587 20.0369 20.6114 20.79C22.8433 20.0996 25.1136 19.0446 27.4542 17.3056C28.0153 11.4004 26.4954 6.28066 23.4363 1.74119ZM9.56582 14.1729C8.23084 14.1729 7.13604 12.9344 7.13604 11.4263C7.13604 9.91827 8.20751 8.67775 9.56582 8.67775C10.9242 8.67775 12.0189 9.91603 11.9956 11.4263C11.9977 12.9344 10.9242 14.1729 9.56582 14.1729ZM18.545 14.1729C17.21 14.1729 16.1153 12.9344 16.1153 11.4263C16.1153 9.91827 17.1868 8.67775 18.545 8.67775C19.9034 8.67775 20.9982 9.91603 20.9747 11.4263C20.9747 12.9344 19.9034 14.1729 18.545 14.1729Z" fill="#DDDDDD" />
        </svg>

    )
}

function youtube() {
    return (
        <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.3711 4.45499C27.3711 4.45499 27.1459 2.35125 26.245 1.485C25.2315 0.2475 24.1053 0.2475 23.5423 0.2475C19.7135 5.53205e-08 14.0828 0 14.0828 0C14.0828 0 8.45221 5.53205e-08 4.62339 0.2475C4.06032 0.371249 2.9342 0.37125 1.92069 1.485C1.1324 2.35125 0.794561 4.45499 0.794561 4.45499C0.794561 4.45499 0.569336 6.80624 0.569336 9.28127V11.5088C0.569336 13.86 0.794561 16.335 0.794561 16.335C0.794561 16.335 1.01979 18.4388 1.92069 19.305C2.9342 20.5425 4.28555 20.4187 4.84861 20.5425C6.98825 20.79 14.0828 20.79 14.0828 20.79C14.0828 20.79 19.7135 20.79 23.5423 20.4188C24.1053 20.295 25.2315 20.295 26.245 19.1813C27.0333 18.315 27.3711 16.2113 27.3711 16.2113C27.3711 16.2113 27.5963 13.86 27.5963 11.385V9.15752C27.5963 6.80624 27.3711 4.45499 27.3711 4.45499ZM11.2675 14.2313V5.93999L18.5873 10.1475L11.2675 14.2313Z" fill="#DDDDDD" />
        </svg>

    )
}

function telegram() {
    return (
        <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M26.5143 0.436342C26.4933 0.343231 26.4472 0.25717 26.3809 0.186869C26.3145 0.116578 26.2301 0.0645384 26.1364 0.0360335C25.795 -0.0295813 25.4417 -0.00527897 25.1132 0.106429C25.1132 0.106429 2.3442 8.0485 1.04383 8.92793C0.76448 9.11705 0.670281 9.22737 0.623724 9.35661C0.398513 9.98701 1.09905 10.2581 1.09905 10.2581L6.96752 12.1136C7.06674 12.1308 7.16878 12.125 7.26527 12.0968C8.59921 11.2783 20.6913 3.86575 21.394 3.61674C21.5022 3.58522 21.5856 3.61674 21.564 3.69554C21.2846 4.64641 10.8351 13.6539 10.7777 13.7085C10.7497 13.7307 10.728 13.7594 10.7143 13.7918C10.7007 13.8243 10.6957 13.8596 10.6997 13.8945L10.1519 19.4547C10.1519 19.4547 9.92233 21.1851 11.7056 19.4547C12.9702 18.2264 14.184 17.2094 14.7903 16.7145C16.8085 18.0667 18.9794 19.5618 19.916 20.3446C20.0736 20.4925 20.2602 20.6082 20.4649 20.6846C20.6695 20.7609 20.888 20.7965 21.107 20.789C21.3769 20.7571 21.6303 20.6462 21.8336 20.4711C22.0369 20.2959 22.1804 20.0649 22.245 19.8088C22.245 19.8088 26.3919 3.60414 26.5305 1.43343C26.5446 1.2233 26.563 1.08461 26.5651 0.938566C26.572 0.76969 26.5548 0.60071 26.5143 0.436342Z" fill="#DDDDDD" />
        </svg>

    )
}