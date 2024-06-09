import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MotherboardDataTable from '../tables/MotherboardDataTable';

const MotherboardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectMotherboard = (selectMotherBoard) => {
    navigate('/builder', { state: { ...location.state, motherboard: selectMotherBoard } });
  };

  const motherboardData = [
    {
      name: "GIGABYTE B450 AORUS ELITE",
      socket: "AMD AM4",
      memorySlots: 4,
      formFactor: "ATX",
      price: "$109.99",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/40037fa5f1c2c2b92273f1a5547ed181.256p.jpg"
    },
    {
      name: "ASUS ROG STRIX B450-F GAMING",
      socket: "AMD AM4",
      memorySlots: 4,
      formFactor: "ATX",
      price: "$129.99",
      buyLink: "#",
      imageUrl: "https://m.media-amazon.com/images/I/51W9XJLDRlL.jpg"
    },
    // Add more motherboard data as needed
  ];

  return (
    <div>
      <MotherboardDataTable motherboardData={motherboardData} onSelectMotherboard={handleSelectMotherboard} />
    </div>
  );
};

export default MotherboardPage;
