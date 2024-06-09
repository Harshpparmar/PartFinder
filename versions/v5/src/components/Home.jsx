import React from 'react'
import ProductList from './ProductList'
import products from './ProductData';
import { Link } from 'react-router-dom';

const Home = () => {
    // const products = [
    //     {
    //       title: 'Great AMD Gaming Build',
    //       processor: 'AMD Ryzen 5 7600',
    //       videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
    //       case: 'NZXT H5 Flow ATX Mid Tower',
    //       price: '₹1.05 L',
    //       image: 'photos/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
    //     },
    //     {
    //         title: 'Great AMD Gaming Build',
    //         processor: 'AMD Ryzen 5 7600',
    //         videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
    //         case: 'NZXT H5 Flow ATX Mid Tower',
    //         price: '₹1.05 L',
    //         image: 'photos/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
    //       },
    //       {
    //         title: 'Great AMD Gaming Build',
    //         processor: 'AMD Ryzen 5 7600',
    //         videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
    //         case: 'NZXT H5 Flow ATX Mid Tower',
    //         price: '₹1.05 L',
    //         image: 'photos/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
    //       },
    //       {
    //         title: 'Great AMD Gaming Build',
    //         processor: 'AMD Ryzen 5 7600',
    //         videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
    //         case: 'NZXT H5 Flow ATX Mid Tower',
    //         price: '₹1.05 L',
    //         image: 'photos/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
    //       },
    //     // Add more product objects as needed
    //   ];
    return (
        <>  
            {/* <section className='h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-200 to-transparent bg-repeat bg-origin-border bg-size-10 bg-position-0'>
    <div className='text-center'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900'>
            <span className='block xl:inline'>Pick Parts.</span> 
            <span className='block text-indigo-600 xl:inline'>Build your PC</span>
        </h1>
        <p className='mt-4 mx-auto text-base text-gray-600 sm:text-lg md:text-xl max-w-md'>
            We provide part selection, pricing, and compatibility guidance
        </p>
        <div className='mt-8'>
            <Link to='/builder' className='inline-block rounded-md bg-indigo-600 px-6 py-3 text-lg font-medium text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                Build Now
            </Link>
        </div>
    </div>
</section> */}

            {/* <section className='h-screen flex flex-col justify-center items-center'>
                <div className='text-center'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900'>
                      <span className='block xl:inline'>Pick Parts.</span> 
                    <span className='block text-indigo-600 xl:inline'>Build your PC</span>
                </h1>
                <p className='mt-4 mx-auto text-base text-gray-600 sm:text-lg md:text-xl max-w-md'>
                    We provide part selection, pricing, and compatibility guidance
                </p>
                <div className='mt-8'>
                    <Link to='/builder' className='inline-block rounded-md bg-indigo-600 px-6 py-3 text-lg font-medium text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                        Build Now
                    </Link>
                </div>
                </div>
            </section> */}
            <section className='h-screen flex flex-col justify-center items-center bg-radial-dot '>
    <div className='text-center '>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900  '>
            <span className='block xl:inline'>Pick Parts.</span> 
            <span className='block text-indigo-600 xl:inline'>Build your PC</span>
        </h1>
        <p className='mt-4 mx-auto text-base text-gray-600 sm:text-lg md:text-xl max-w-md backdrop-blur-md'>
            We provide part selection, pricing, and compatibility guidance
        </p>
        <div className='mt-8 '>
            <Link to='/builder' className='inline-block rounded-md bg-indigo-600 px-6 py-3 text-lg font-medium text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                Build Now
            </Link>
        </div>
    </div>
</section>




            {/* State section */}

            <section className='bg-comet-800'>
                <div className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                    <div className='py-12 sm:py-16'>
                        <div className=' mx-auto grid max-w-7xl grid-cols-1 gap-8 text-center lg:grid-cols-3'>
                            <div className='bg-comet-500 flex flex-col items-center justify-center rounded-lg p-8 shadow-sm cursor-pointer'>
                                <p className='text-lg text-white'>Visits every 24 hours</p>
                                <p className='mt-2 text-3xl font-semibold text-white sm:text-5xl'>1 million</p>
                            </div>
                            <div className='bg-comet-500 flex flex-col items-center justify-center rounded-lg p-8 shadow-sm cursor-pointer'>
                                <p className='text-lg text-white'>Products to Compare for</p>
                                <p className='mt-2 text-3xl font-semibold text-white sm:text-5xl'>10,000+</p>
                            </div>
                            <div className='bg-comet-500 flex flex-col items-center justify-center rounded-lg p-8 shadow-sm cursor-pointer'>
                                <p className='text-lg text-white'>New users annually</p>
                                <p className='mt-2 text-3xl font-semibold text-white sm:text-5xl'>4,600</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product section */}

            <ProductList products={products} maxProducts={4} />
        </>
    )
}

export default Home;