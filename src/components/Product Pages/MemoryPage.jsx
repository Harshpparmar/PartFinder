import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import MemoryDataTable from "../tables/MemoryDataTable";

const MemoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectMemory = (selectedMemory) => {
    navigate('/builder', { state: { ...location.state, memory: selectedMemory } });
  };

  const memoryData = [
    {
      name : "Corsair Vengeance LPX",
      speed : "3200MHz",
      modules : "1 x 8GB",
      color : "Black",
      price : "₹" + "2,177",
      buyLink : "https://amzn.in/d/awwJHyA",
      imageUrl : "https://cdna.pcpartpicker.com/static/forever/images/product/e8d573bd2eac864d427645f0d2f7cad8.256p.jpg"
    },
    {
      name : "G.Skill Ripjaws V Series",
      speed : "3600MHz",
      modules : "2 x 16GB",
      color : "White",
      price : "₹" + "17,334",
      buyLink : "https://amzn.in/d/hMIMLXb",
      imageUrl : "https://m.media-amazon.com/images/I/616pCehLKXL._SX679_.jpg"
    },
  ];

  return (
    <div>
      <MemoryDataTable memoryData={memoryData} onSelectMemory={handleSelectMemory} />
    </div>
  );
};

export default MemoryPage;