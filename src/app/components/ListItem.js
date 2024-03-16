import React from 'react'

const ListItem = () => {
    return (
        <div className='px-4 flex flex-col gap-8 py-6 text-[#00000a]'>
            <h1 className='font-bold  text-[34px]  leading-[42.5px] '>CarpeDiem Pension's Journey Through our Audit Process</h1>

            <ol className='font-semibold list-decimal px-4  text-2xl   leading-[36px] font-poppins'>
                <li>Information gathering:</li>
            </ol>

            <ul className='list-disc  px-8 font-poppins font-normal text-lg flex flex-col gap-2 '>
                <li>Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.</li>
                <li>Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.</li>
                <li>Discussed client concerns and specific areas of focus for the audit.</li>
            </ul>
        </div>
    )
}

export default ListItem