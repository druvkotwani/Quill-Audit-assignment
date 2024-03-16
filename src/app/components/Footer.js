import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="bg-[url('/images/footerBg.png')] h-screen px-4 flex flex-col gap-8">

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
            <div className='grid grid-cols-2 gap-4 px-2'>
                <div className='flex flex-col gap-3'>
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

                <div className='flex flex-col gap-3'>
                    <div>
                        <h1 className='font-medium text-[16.84px] inline-block text-[#fff] leading-[24.33px] border-b-2       border-[#2D83EE] '>Quill Ecosystem</h1>
                    </div>

                    <div className='text-[#F1F1F1] font-medium text-[13.1px] leading-[18.93px] flex flex-col gap-3'>
                        <p>QuillAI</p>
                        <p>QuillCheck</p>
                        <p>QuillShield</p>
                        <p>QuillAcademy</p>
                        <p>QuillMonitor</p>
                        <p>Web3Suggest</p>
                        <p>Explore All Tools</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer