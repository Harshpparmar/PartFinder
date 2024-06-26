import React from 'react'
import ProductList from './ProductList'
import products from './ProductData'

const Complete = () => {
    // const products = [
    //     {
    //         title: 'Great AMD Gaming Build',
    //         processor: 'AMD Ryzen 5 7600',
    //         videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
    //         case: 'NZXT H5 Flow ATX Mid Tower',
    //         price: '₹1.05 L',
    //         image: 'https://cdna.pcpartpicker.com/static/forever/images/product/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
    //     },
    //     {
    //         title: 'Great AMD Gaming Build',
    //         processor: 'AMD Ryzen 5 7600',
    //         videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
    //         case: 'NZXT H5 Flow ATX Mid Tower',
    //         price: '₹1.05 L',
    //         image: 'https://cdna.pcpartpicker.com/static/forever/images/product/c3e5d01cec2fa20b6f47fe8a400c08d6.256p.jpg',
    //     },
    //     {
    //         title: 'Great AMD Gaming Build',
    //         processor: 'AMD Ryzen 5 7600',
    //         videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
    //         case: 'NZXT H5 Flow ATX Mid Tower',
    //         price: '₹1.05 L',
    //         image: 'photos/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
    //     },
    //     {
    //         title: 'Great AMD Gaming Build',
    //         processor: 'AMD Ryzen 5 7600',
    //         videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
    //         case: 'NZXT H5 Flow ATX Mid Tower',
    //         price: '₹1.05 L',
    //         image: 'photos/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
    //     },
    //     // Add more product objects as needed
    // ];
    return (
        <>
            {/* <section className='h-screen container mx-auto'>
            
            <ProductList products={products} maxProducts={9999} />
                
            </section> */}
            <section className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-semibold text-center mb-8">Guides</h1>
                <ProductList products={products} maxProducts={9999} />
            </div>
        </section>
        </>
    )
}

export default Complete;