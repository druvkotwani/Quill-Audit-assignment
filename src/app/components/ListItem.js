import React from 'react'

const ListItem = ({ heading, text, subText, index }) => {

    return (
        <>

            <h2 className='font-semibold list-decimal text-2xl  leading-[36px] font-poppins'>
                {index + 1}. {heading}
            </h2>
            {console.log('Hi' + index)}
            <ul className='list-disc leading-[27px]   pl-8 pr-4 font-poppins font-normal text-lg flex flex-col gap-4 py-2 '>
                {
                    text.map((item, index) => (
                        <li key={index}>
                            {item}

                            {subText &&
                                <ul className='list-disc    pl-8  font-poppins font-normal text-lg flex flex-col gap-4 py-2 '>
                                    {
                                        subText.map((item, index) => {
                                            const [boldPart, rest] = item.split(':');
                                            return (
                                                <li key={index} style={{ listStyleType: "circle" }}>
                                                    <span className='font-medium italic  '>{boldPart}:</span> {rest}
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            }
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ListItem