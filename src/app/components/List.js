import React from 'react'
import ListItem from './ListItem'



const List = ({ list, text, mainheading, style }) => {
    return (
        <div className='px-4 flex flex-col gap-8 py-6 text-[#00000a]'>
            <h1 className='font-bold  text-[34px]  leading-[42.5px] '>{mainheading}</h1>
            {
                text && <p className='font-poppins text-lg leading-[27px] font-normal '>{text}</p>

            }
            <ul className=' gap-4 pl-6 flex flex-col '>
                {
                    list.map((item, index) => (
                        <ListItem style={style} key={index} heading={item.heading} text={item.text} subText={item.subText} />
                    ))
                }
            </ul>
        </div>
    )
}

export default List