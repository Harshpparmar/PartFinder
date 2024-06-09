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
      "name": "Corsair Vengeance LPX",
      "speed": "3200MHz",
      "modules": "2 x 8GB",
      "color": "Black",
      "price": "$89.99",
      "buyLink": "#",
      "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/e8d573bd2eac864d427645f0d2f7cad8.256p.jpg"
    },
    {
      "name": "G.Skill Ripjaws V Series",
      "speed": "3600MHz",
      "modules": "2 x 16GB",
      "color": "Red",
      "price": "$159.99",
      "buyLink": "#",
      "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/835ab3efad1be13bbe53beef3e3c6f96.256p.jpg"
    },
  ];

  return (
    <div>
      <MemoryDataTable memoryData={memoryData} onSelectMemory={handleSelectMemory} />
    </div>
  );
};

export default MemoryPage;
