// pages/VideoCardPage.js
import React from 'react';
import { useNavigate , useLocation } from 'react-router-dom';
import VideoCardDataTable from '../tables/VideoCardDataTable';

const VideoCardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectVideoCard = (selectedVideoCard) => {
    navigate('/builder', {state: {...location.state, videoCard: selectedVideoCard} });
  };
  
  // Video Card Data
  const videoCardData = [
    {
      name: "NVIDIA GeForce RTX 3080",
      chipset: "NVIDIA GeForce RTX 3080",
      memory: "10GB GDDR6X",
      clocks: "1440 MHz / 1710 MHz",
      price: "$699.99",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/07ff8dc03a65e34edc811c97d838af9a.256p.jpg"
    },
    {
      name: "AMD Radeon RX 6900 XT",
      chipset: "AMD Radeon RX 6900 XT",
      memory: "16GB GDDR6",
      clocks: "1825 MHz / 2250 MHz",
      price: "$999.99",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/8a44fd1a6f66aa2f153e73efadf3ef47.256p.jpg"
    },
    {
      name: "NVIDIA GeForce RTX 3070",
      chipset: "NVIDIA GeForce RTX 3070",
      memory: "8GB GDDR6",
      clocks: "1500 MHz / 1730 MHz",
      price: "$499.99",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/0fda15afd0540cb65cb27b509d2427a5.256p.jpg"
    },
    {
      name: "NVIDIA GeForce RTX 3080",
      chipset: "NVIDIA GeForce RTX 3080",
      memory: "10GB GDDR6X",
      clocks: "1440 MHz / 1710 MHz",
      price: "$699.99",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/07ff8dc03a65e34edc811c97d838af9a.256p.jpg"
    },
    {
      name: "AMD Radeon RX 6900 XT",
      chipset: "AMD Radeon RX 6900 XT",
      memory: "16GB GDDR6",
      clocks: "1825 MHz / 2250 MHz",
      price: "$999.99",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/8a44fd1a6f66aa2f153e73efadf3ef47.256p.jpg"
    },
    {
      name: "NVIDIA GeForce RTX 3070",
      chipset: "NVIDIA GeForce RTX 3070",
      memory: "8GB GDDR6",
      clocks: "1500 MHz / 1730 MHz",
      price: "$499.99",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/0fda15afd0540cb65cb27b509d2427a5.256p.jpg"
    },
    {
      name: "NVIDIA GeForce RTX 3080",
      chipset: "NVIDIA GeForce RTX 3080",
      memory: "10GB GDDR6X",
      clocks: "1440 MHz / 1710 MHz",
      price: "$699.99",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/07ff8dc03a65e34edc811c97d838af9a.256p.jpg"
    },
    {
      name: "AMD Radeon RX 6900 XT",
      chipset: "AMD Radeon RX 6900 XT",
      memory: "16GB GDDR6",
      clocks: "1825 MHz / 2250 MHz",
      price: "$999.99",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/8a44fd1a6f66aa2f153e73efadf3ef47.256p.jpg"
    },
    {
      name: "NVIDIA GeForce RTX 3070",
      chipset: "NVIDIA GeForce RTX 3070",
      memory: "8GB GDDR6",
      clocks: "1500 MHz / 1730 MHz",
      price: "$499.99",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/0fda15afd0540cb65cb27b509d2427a5.256p.jpg"
    },
  ];
  
  return (
    <div>
      {/* Other Video Card page content */}
      <VideoCardDataTable videoCardData={videoCardData} onSelectVideoCard={handleSelectVideoCard} />
    </div>
  );
};

export default VideoCardPage;
