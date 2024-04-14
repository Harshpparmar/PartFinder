import React from 'react'
import ProductList from './ProductList'

const Complete = () => {
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
            <section className='h-screen'>
                
                <ProductList products={products} />
            </section>
        </>
    )
}

export default Complete