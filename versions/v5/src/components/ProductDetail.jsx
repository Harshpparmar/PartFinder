



// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import "../custom-gallery.css";
import products from './ProductData'; // Ensure the path to your product data file is correct

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="max-w-screen-lg mx-auto p-8 bg-white  rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg" /> */}
        <div className="container mx-auto px-4">
          <ReactImageGallery
            showBullets={false}
            showFullscreenButton={false}
            showPlayButton={false}
            items={product.images}
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
         
          <p className="text-gray-700 mb-2"><strong>Processor:</strong> {product.processor}</p>
          <p className="text-gray-700 mb-2"><strong>Video Card:</strong> {product.videoCard}</p>
          <p className="text-gray-700 mb-2"><strong>Case:</strong> {product.case}</p>
          <p className="text-gray-700 mb-2"><strong>Price:</strong> ${product.price}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p>{product.description}</p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Introduction</h2>
        <p>{product.introduction}</p>

        <h2 className="text-2xl font-bold mt-6 mb-4">CPU</h2>
        <p>{product.cpuDescription}</p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Motherboard</h2>
        <p>{product.motherboardDescription}</p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Memory</h2>
        <p>{product.memoryDescription}</p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Storage</h2>
        <p>{product.storageDescription}</p>

        <h2 className="text-2xl font-bold mt-6 mb-4">GPU</h2>
        <p>{product.gpuDescription}</p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Case</h2>
        <p>{product.caseDescription}</p>

        <h2 className="text-2xl font-bold mt-6 mb-4">PSU</h2>
        <p>{product.psuDescription}</p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Customizing</h2>
        <p>{product.customizing}</p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Intel Version</h2>
        <p>{product.intelVersion}</p>
      </div>
    </section>
  );
};

export default ProductDetail;


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import products from './ProductData'; // Ensure the path to your product data file is correct

// const ProductDetail = () => {
//   const { id } = useParams();
//   const productId = parseInt(id);
//   const selectedProduct = products.find(p => p.id === productId);

//   if (!selectedProduct) {
//     return <div>Product not found</div>;
//   }

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <section className="max-w-screen-lg mx-auto p-8 bg-white rounded-lg ">
//       <Slider {...settings}>
//         <div>
//           <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-auto object-cover rounded-lg" />
//         </div>
//         <div>
//           <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-auto object-cover rounded-lg" />
//         </div>
//         <div>
//           <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-auto object-cover rounded-lg" />
//         </div>
//         <div>
//           <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-auto object-cover rounded-lg" />
//         </div>
        
//       </Slider>
//         {selectedProduct.images && selectedProduct.images.length > 0 ? (
//       <Slider {...settings}>
//         {selectedProduct.images.map((image, index) => (
//           <div key={index}>
//             <img src={image} alt={`Image ${index + 1}`} />
//           </div>
//         ))}
//       </Slider>
//     ) : (
//       <div>No images available</div>
//     )}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      
//         <div>
//           <h1 className="text-3xl font-semibold mb-4">{selectedProduct.name}</h1>
//           <p className="text-gray-700 mb-2"><strong>Processor:</strong> {selectedProduct.processor}</p>
//           <p className="text-gray-700 mb-2"><strong>Video Card:</strong> {selectedProduct.videoCard}</p>
//           <p className="text-gray-700 mb-2"><strong>Case:</strong> {selectedProduct.case}</p>
//           <p className="text-gray-700 mb-2"><strong>Price:</strong> ${selectedProduct.price}</p>
//           <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       <div className="prose max-w-none">
//         <h2 className="text-2xl font-bold mb-4">Description</h2>
//         <p>{selectedProduct.description}</p>

//         <h2 className="text-2xl font-bold mt-6 mb-4">Introduction</h2>
//         <p>{selectedProduct.introduction}</p>
//         <h2 className="text-2xl font-bold mt-6 mb-4">Introduction</h2>
//         <p>{selectedProduct.introduction}</p>
//         <h2 className="text-2xl font-bold mt-6 mb-4">Introduction</h2>
//         <p>{selectedProduct.introduction}</p>
//         <h2 className="text-2xl font-bold mt-6 mb-4">Introduction</h2>
//         <p>{selectedProduct.introduction}</p>
//         <h2 className="text-2xl font-bold mt-6 mb-4">Introduction</h2>
//         <p>{selectedProduct.introduction}</p>

//         {/* Include other sections as before */}
//       </div>
//     </section>
//   );
// };

// export default ProductDetail;
