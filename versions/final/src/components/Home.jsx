import React from 'react'
import ProductList from './ProductList'
import { Link } from 'react-router-dom';

const Home = () => {
    const products = [
        {
          title: 'Great AMD Gaming Build',
          processor: 'AMD Ryzen 5 7600',
          videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
          case: 'NZXT H5 Flow ATX Mid Tower',
          price: '₹1.05 L',
          image: 'photos/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
        },
        {
            title: 'Great AMD Gaming Build',
            processor: 'AMD Ryzen 5 7600',
            videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
            case: 'NZXT H5 Flow ATX Mid Tower',
            price: '₹1.05 L',
            image: 'photos/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
          },
          {
            title: 'Great AMD Gaming Build',
            processor: 'AMD Ryzen 5 7600',
            videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
            case: 'NZXT H5 Flow ATX Mid Tower',
            price: '₹1.05 L',
            image: 'photos/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
          },
        // Add more product objects as needed
      ];
    return (
        <>
            <section className='h-screen flex flex-col justify-center items-center mb-24'>
                <h1 className='block xl:inline text-5xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight'>Pick Parts,
                    <span className=' text-indigo-600'> Build your PC</span>
                </h1>
                <p className='mt-4 mx-w-md mx-auto text-base text-gray-600 sm:text-lg md:text-xl'>
                    We provide part selection, pricing, and compatibility guidance
                </p>
                <div className='mt-5 max-w-48 mx-auto sm:flex sm:justify-center md:mt-8'>
                    <Link to='/builder' className='flex items-center justify-center px-4 py-2 border border-transparent text-base font-meduim rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-10"'>
                        Build Now
                    </Link>
                </div>
            </section>

            {/* State section */}

            <section className='bg-gray-100'>
                <div className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                    <div className='py-12 sm:py-16'>
                        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 text-center lg:grid-cols-3'>
                            <div className='flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-md cursor-pointer'>
                                <p className='text-lg text-gray-600'>Visits every 24 hours</p>
                                <p className='mt-2 text-3xl font-semibold text-gray-900 sm:text-5xl'>1 million</p>
                            </div>
                            <div className='flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-md cursor-pointer'>
                                <p className='text-lg text-gray-600'>Products to Compare for</p>
                                <p className='mt-2 text-3xl font-semibold text-gray-900 sm:text-5xl'>10,000+</p>
                            </div>
                            <div className='flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-md cursor-pointer'>
                                <p className='text-lg text-gray-600'>New users annually</p>
                                <p className='mt-2 text-3xl font-semibold text-gray-900 sm:text-5xl'>4,600</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product section */}

            <ProductList products={products} />
        </>
    )
}

export default Home