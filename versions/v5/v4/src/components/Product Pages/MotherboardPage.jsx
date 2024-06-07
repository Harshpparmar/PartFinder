import React from 'react';
import MotherboardDataTable from '../tables/MotherboardDataTable'; 

const MotherboardPage = () => {
  // Define motherboard data
  const motherboardData = [
    {
      "name": "GIGABYTE B450 AORUS ELITE",
      "socket": "AMD AM4",
      "memorySlots": 4,
      "formFactor": "ATX",
      "price": "$109.99",
      "buyLink": "#",
      "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/40037fa5f1c2c2b92273f1a5547ed181.256p.jpg"
    },
    {
      "name": "ASUS ROG STRIX B450-F GAMING",
      "socket": "AMD AM4",
      "memorySlots": 4,
      "formFactor": "ATX",
      "price": "$129.99",
      "buyLink": "#",
      "imageUrl": "https://m.media-amazon.com/images/I/51W9XJLDRlL.jpg"
    },
    {
      "name": "MSI B450 TOMAHAWK MAX",
      "socket": "AMD AM4",
      "memorySlots": 4,
      "formFactor": "ATX",
      "price": "$114.99",
      "buyLink": "#",
      "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/f22d681ccfd01238e756443a474f400b.256p.jpg"
    },
    {
      "name": "ASUS ROG STRIX B450-F GAMING",
      "socket": "AMD AM4",
      "memorySlots": 4,
      "formFactor": "ATX",
      "price": "$129.99",
      "buyLink": "#",
      "imageUrl": "https://m.media-amazon.com/images/I/51W9XJLDRlL.jpg"
    },
    {
      "name": "MSI B450 TOMAHAWK MAX",
      "socket": "AMD AM4",
      "memorySlots": 4,
      "formFactor": "ATX",
      "price": "$114.99",
      "buyLink": "#",
      "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/f22d681ccfd01238e756443a474f400b.256p.jpg"
    },
    {
      "name": "ASUS ROG STRIX B450-F GAMING",
      "socket": "AMD AM4",
      "memorySlots": 4,
      "formFactor": "ATX",
      "price": "$129.99",
      "buyLink": "#",
      "imageUrl": "https://m.media-amazon.com/images/I/51W9XJLDRlL.jpg"
    },
    {
      "name": "MSI B450 TOMAHAWK MAX",
      "socket": "AMD AM4",
      "memorySlots": 4,
      "formFactor": "ATX",
      "price": "$114.99",
      "buyLink": "#",
      "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/f22d681ccfd01238e756443a474f400b.256p.jpg"
    },
    {
      "name": "ASUS ROG STRIX B450-F GAMING",
      "socket": "AMD AM4",
      "memorySlots": 4,
      "formFactor": "ATX",
      "price": "$129.99",
      "buyLink": "#",
      "imageUrl": "https://m.media-amazon.com/images/I/51W9XJLDRlL.jpg"
    },
    {
      "name": "MSI B450 TOMAHAWK MAX",
      "socket": "AMD AM4",
      "memorySlots": 4,
      "formFactor": "ATX",
      "price": "$114.99",
      "buyLink": "#",
      "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/f22d681ccfd01238e756443a474f400b.256p.jpg"
    }
    
    // Add more motherboard data as needed
  ];

  return (
    <div>
      {/* Other motherboard page content */}
      
      <MotherboardDataTable motherboardData={motherboardData} />
    </div>
  );
};

export default MotherboardPage;
