import React from 'react'

const RequestAudit = () => {
    return (
        <div className='px-5 flex flex-col items-center justify-center gap-8'>
            <h1 className='font-semibold text-4xl  text-[#0E3088]  text-center sm:hidden '>See how QuillAudits
                <br />
                is a trusted partner
                <br />
                in 1000+ Audit
                <br />
                stories</h1>
            <h1 className='font-semibold text-4xl  text-[#0E3088]  text-center hidden sm:block sm:pt-4 '>
                See how QuillAudits is a trusted partner in <br />
                1000+ Audit stories</h1>

            <button className='cursor-pointer font-medium  text-[20px] leading-[30px] text-white  text-center shadow-[0px_9.655799865722656px_14.483699798583984px_-2.896739959716797px_#0000001A] py-2 px-6 rounded-[6px] bg-[linear-gradient(267.25deg,_#7184FD_20%,_#3F7AF0_50%,_#4F37EE_100%)] hover:scale-105 transform transition-transform duration-300 '>
                Request An Audit
            </button>
            <p className='font-poppins text-lg leading-[27px] font-normal  sm:hidden'>
                Carpe Diem Pension, on Pulse blockchain, redefines retirement with a self-managed, inclusive, globally portable fund. Unique for its token burn mechanism, it ensures a sustainable 4.32% inflation payout. With $143.11k and 41.06% of CDP already burned, it serves 35 users globally.
            </p>
        </div>
    )
}

export default RequestAudit