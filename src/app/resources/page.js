import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const page = () => {

    return (

        <main>
            <div className="bg-[url('/images/herobg.png')] h-screen sm:bg-[url('/images/hero-md-image.png')]">

                <Navbar />

                <div>

                    <p className="text-white px-4 text-center py-20">
                        Navigate to the next section through the sections below
                    </p>
                    <div className='text-xl leading-[31.72px] text-[#fff] font-medium mt-8 text-center'>
                        <Link href='/'>
                            <span className='cursor-pointer opacity-[46%] '> QuillAudits {"-->"}</span>
                        </Link>
                        <Link href='/resources'>
                            <span className='cursor-pointer '> Resources  {"-->"}</span>
                        </Link>
                        <Link href='/resources/case-studies'>
                            <span className='cursor-pointer opacity-[46%]'> Case Studies </span>
                        </Link>
                    </div>

                </div>



                <footer className="fixed bottom-0 footer w-full flex items-center justify-center p-4 bg-base-100  border-t-2">
                    <aside className="items-center grid-flow-col">
                        <span className="text-lg text-white source-code-pro bold">Assignment done with
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500"> ❤️ </span>
                            by
                            <a href='https://dhruvkotwani.me/' className='text-sky-600  '> Dhruv Kotwani</a>
                        </span>
                    </aside>
                </footer >
            </div>
        </main>
    )
}

export default page