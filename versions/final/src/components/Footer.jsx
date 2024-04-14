import React from 'react'

const Footer = () => {
    return (
        <footer className=''>
            <div className='mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8'>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
                    <div>
                        <p className='mt-4 max-w-xs text-gray-500'>We provide part selection, pricing, and compatibility guidance</p>
                    </div>

                    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4'>
                        <div>
                            <p className='font-medium text-gray-900'>PartFinder</p>
                            <ul className='mt-6 space-y-4 text-sm'>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'> Home</a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'> Products </a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'>Complete Builds</a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'>Guides</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className='font-medium text-gray-900'>Products</p>
                            <ul className='mt-6 space-y-4 text-sm'>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'></a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'>CPU</a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'>Motherboards</a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'>Power Supply</a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'>Video Card</a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'>CPU Coolers</a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'>Memory</a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'>Storage</a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'>Cases</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className='font-medium text-gray-900'>Helpful Links</p>
                            <ul className='mt-6 space-y-4 text-sm'>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'> Contact </a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'> About </a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'> Meet the Team </a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-700 transition hover:opacity-75'> FAQs </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <p className='text-xs text-gray-500'>&copy; 2024. PartFinder. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer