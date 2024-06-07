// pages/CPUPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CPUDataTable from '../tables/CPUDataTable';

const CPUPage = () => {
  // Define CPU data
  const navigate = useNavigate();

  const [selectedCPU, setSelectedCPU] = useState(null);

  const cpuData = [
    {
      name: "Intel Core i5-12600K",
      coresThreads: "10 / 16",
      baseBoost: "3.7 GHz / 4.9 GHz",
      tdp: "125W",
      price: "$279.99",
      buyLink: "https://amzn.in/d/0Gwpxc4",
      imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
    },
    {
      name: "AMD Ryzen 7 5800X",
      coresThreads: "8 / 16",
      baseBoost: "3.8 GHz / 4.7 GHz",
      tdp: "105W",
      price: "$299.99",
      buyLink: "#",
      imageUrl:" https://cdna.pcpartpicker.com/static/forever/images/product/f0e0e59d75066ec825667b71c31e3c83.256p.jpg"
    },
    {
      name: "AMD Ryzen 7 5800X",
      coresThreads: "8 / 16",
      baseBoost: "3.8 GHz / 4.7 GHz",
      tdp: "105W",
      price: "$299.99",
      buyLink: "#",
      imageUrl:" https://cdna.pcpartpicker.com/static/forever/images/product/f0e0e59d75066ec825667b71c31e3c83.256p.jpg"
    },
    {
      name: "Intel Core i5-12600K",
      coresThreads: "10 / 16",
      baseBoost: "3.7 GHz / 4.9 GHz",
      tdp: "125W",
      price: "$279.99",
      buyLink: "#",
      imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
    },
    {
      name: "Intel Core i5-12600K",
      coresThreads: "10 / 16",
      baseBoost: "3.7 GHz / 4.9 GHz",
      tdp: "125W",
      price: "$279.99",
      buyLink: "#",
      imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
    },
    {
      name: "Intel Core i5-12600K",
      coresThreads: "10 / 16",
      baseBoost: "3.7 GHz / 4.9 GHz",
      tdp: "125W",
      price: "$279.99",
      buyLink: "#",
      imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
    },
    {
      name: "Intel Core i5-12600K",
      coresThreads: "10 / 16",
      baseBoost: "3.7 GHz / 4.9 GHz",
      tdp: "125W",
      price: "$279.99",
      buyLink: "#",
      imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
    },
    {
      name: "Intel Core i5-12600K",
      coresThreads: "10 / 16",
      baseBoost: "3.7 GHz / 4.9 GHz",
      tdp: "125W",
      price: "$279.99",
      buyLink: "#",
      imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
    },
    {
      name: "Intel Core i5-12600K",
      coresThreads: "10 / 16",
      baseBoost: "3.7 GHz / 4.9 GHz",
      tdp: "125W",
      price: "$279.99",
      buyLink: "#",
      imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
    },
    {
      name: "Intel Core i5-12600K",
      coresThreads: "10 / 16",
      baseBoost: "3.7 GHz / 4.9 GHz",
      tdp: "125W",
      price: "$279.99",
      buyLink: "#",
      imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
    },
    {
      name: "Intel Core i5-12600K",
      coresThreads: "10 / 16",
      baseBoost: "3.7 GHz / 4.9 GHz",
      tdp: "125W",
      price: "$279.99",
      buyLink: "#",
      imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
    },
    {
      name: "Intel Core i5-12600K",
      coresThreads: "10 / 16",
      baseBoost: "3.7 GHz / 4.9 GHz",
      tdp: "125W",
      price: "$279.99",
      buyLink: "#",
      imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
    },
    {
      name: "Intel Core i5-12600K",
      coresThreads: "10 / 16",
      baseBoost: "3.7 GHz / 4.9 GHz",
      tdp: "125W",
      price: "$279.99",
      buyLink: "#",
      imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
    },
    {
      name: "Intel Core i5-12600K",
      coresThreads: "10 / 16",
      baseBoost: "3.7 GHz / 4.9 GHz",
      tdp: "125W",
      price: "$279.99",
      buyLink: "#",
      imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
    },
    {
      name: "Intel Core i5-12600K",
      coresThreads: "10 / 16",
      baseBoost: "3.7 GHz / 4.9 GHz",
      tdp: "125W",
      price: "$279.99",
      buyLink: "#",
      imageUrl:"https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg"
    },
    // Add more CPU data as needed
  ];

  const handleAddCPU = (cpu) => {
    setSelectedCPU(cpu);
    // Redirect to the builder page with selected CPU data
    navigate('/builder', { state: { cpu: cpu } });
  };

  return (
    <div>
      {/* Other CPU page content */}
      <CPUDataTable cpuData={cpuData} onAddCPU={handleAddCPU} />
    </div>
  );
};

export default CPUPage;
