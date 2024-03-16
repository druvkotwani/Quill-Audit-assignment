import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="bg-[url('/images/footerBg.png')] px-4 flex flex-col gap-8">

            {/* Logo */}
            <div className='flex flex-col '>
                <Image src="/images/QuillAudits.png" alt="logo" width={234} height={23} />
                <p className='font-normal text-sm text-right text-[#eaeaea] '>Making Web3 a safer place</p>
            </div>

            {/* Boxes */}
            <div className='grid grid-cols-2 text-[#fff] font-medium text-[13.52px] leading-[19px] gap-4'>
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
            <div className='flex flex-wrap justify-between gap-4 px-4  '>
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

            {/* Images */}
            <div className='flex justify-between items-center gap-6 px-4 '>
                <Image src="/images/footer1.png" alt="footerImages" width={1110} height={150} />
                <Image src="/images/footer2.png" alt="footerImages" width={1110} height={150} />
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
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6733 1.10396C18.6582 1.03692 18.6251 0.974957 18.5773 0.92434C18.5295 0.873731 18.4688 0.836263 18.4012 0.815739C18.1554 0.768496 17.9011 0.785994 17.6645 0.866424C17.6645 0.866424 1.27087 6.58472 0.334603 7.2179C0.133473 7.35407 0.0656495 7.4335 0.0321278 7.52655C-0.130024 7.98044 0.374361 8.17562 0.374361 8.17562L4.59966 9.51158C4.6711 9.52398 4.74457 9.51982 4.81404 9.49947C5.77448 8.91017 14.4808 3.57314 14.9867 3.39385C15.0647 3.37116 15.1247 3.39385 15.1091 3.45059C14.908 4.13521 7.38431 10.6206 7.34299 10.6599C7.32286 10.6759 7.30718 10.6965 7.29737 10.7199C7.28758 10.7433 7.28396 10.7687 7.28686 10.7938L6.89239 14.7972C6.89239 14.7972 6.72712 16.0431 8.01106 14.7972C8.9216 13.9128 9.79551 13.1805 10.2321 12.8242C11.6852 13.7978 13.2482 14.8743 13.9226 15.4379C14.036 15.5444 14.1704 15.6277 14.3177 15.6827C14.4651 15.7376 14.6224 15.7633 14.7801 15.7579C14.9744 15.7349 15.1569 15.6551 15.3032 15.529C15.4496 15.4029 15.5529 15.2365 15.5994 15.0521C15.5994 15.0521 18.5852 3.38477 18.685 1.82187C18.6951 1.67057 18.7084 1.57071 18.71 1.46556C18.7149 1.34397 18.7025 1.22231 18.6733 1.10396Z" fill="#DDDDDD" />
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