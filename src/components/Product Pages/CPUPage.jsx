
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CPUDataTable from '../tables/CPUDataTable';

const CPUPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectCPU = (selectedCPU) => {
    navigate('/builder', { state: { ...location.state, cpu: selectedCPU } });
  };

  const cpuData = [
    {
      name: "Intel Core i5-12400F",
      coresThreads: "6 / 12",
      baseBoost: "3.2 GHz / 4.4 GHz",
      tdp: "180W",
      price: "₹" + "9,499",
      buyLink: "https://amzn.in/d/cQ56duR",
      imageUrl: "https://m.media-amazon.com/images/I/51D+aC--oXL._SX522_.jpg"
    },
    {
      name: "AMD Ryzen 7 5700X",
      coresThreads: "8 / 16",
      baseBoost: "3.4 GHz / 4.6 GHz",
      tdp: "65W",
      price: "₹" + "17,899",
      buyLink: "https://amzn.in/d/9AvL04L",
      imageUrl: "https://m.media-amazon.com/images/I/3116WnNTPKL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    // Add more CPU data as needed
  ];

  return (
    <div>
      <CPUDataTable cpuData={cpuData} onSelectCPU={handleSelectCPU} />
    </div>
  );
};

export default CPUPage;




// // pages/CPUPage.js
// import React from 'react';
// import CPUDataTable from '../tables/CPUDataTable';

// const CPUPage = () => {
//   // Define CPU data
//   const cpuData = [
//     {
//       name: "Intel Core i5-12600K",
//       coresThreads: "10 / 16",
//       baseBoost: "3.7 GHz / 4.9 GHz",
//       tdp: "125W",
//       price: "$279.99",
//       buyLink: "#",
//       imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
//     },
//     {
//       name: "AMD Ryzen 7 5800X",
//       coresThreads: "8 / 16",
//       baseBoost: "3.8 GHz / 4.7 GHz",
//       tdp: "105W",
//       price: "$299.99",
//       buyLink: "#",
//       imageUrl:" https://cdna.pcpartpicker.com/static/forever/images/product/f0e0e59d75066ec825667b71c31e3c83.256p.jpg"
//     },
//     {
//       name: "AMD Ryzen 7 5800X",
//       coresThreads: "8 / 16",
//       baseBoost: "3.8 GHz / 4.7 GHz",
//       tdp: "105W",
//       price: "$299.99",
//       buyLink: "#",
//       imageUrl:" https://cdna.pcpartpicker.com/static/forever/images/product/f0e0e59d75066ec825667b71c31e3c83.256p.jpg"
//     },
//     {
//       name: "Intel Core i5-12600K",
//       coresThreads: "10 / 16",
//       baseBoost: "3.7 GHz / 4.9 GHz",
//       tdp: "125W",
//       price: "$279.99",
//       buyLink: "#",
//       imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
//     },
//     // Add more CPU data as needed
//   ];

//   return (
//     <div>
//       {/* Other CPU page content */}
//       <CPUDataTable cpuData={cpuData} />
//     </div>
//   );
// };

// export default CPUPage;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import CPUDataTable from '../tables/CPUDataTable';

// const CPUPage = () => {
//   const navigate = useNavigate();
//   // Define CPU data
//   const cpuData = [
//     {
//       name: "Intel Core i5-12600K",
//       coresThreads: "10 / 16",
//       baseBoost: "3.7 GHz / 4.9 GHz",
//       tdp: "125W",
//       price: "$279.99",
//       buyLink: "#",
//       imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
//     },
//     {
//       name: "AMD Ryzen 7 5800X",
//       coresThreads: "8 / 16",
//       baseBoost: "3.8 GHz / 4.7 GHz",
//       tdp: "105W",
//       price: "$299.99",
//       buyLink: "#",
//       imageUrl:" https://cdna.pcpartpicker.com/static/forever/images/product/f0e0e59d75066ec825667b71c31e3c83.256p.jpg"
//     },
//     // Add more CPU data as needed
//   ];

//   const handleSelectCPU = (selectedCPU) => {
//     navigate('/builder', { state: { cpu: selectedCPU } });
//   };

//   return (
//     <div>
//       {/* Other CPU page content */}
//       <CPUDataTable cpuData={cpuData} onSelectCPU={handleSelectCPU} />
//     </div>
//   );
// };

// export default CPUPage;
