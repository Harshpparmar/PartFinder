import React from "react";
import MemoryDataTable from "../tables/MemoryDataTable";

const MemoryPage = () => {
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
        {
          "name": "Crucial Ballistix RGB",
          "speed": "3000MHz",
          "modules": "2 x 8GB",
          "color": "RGB",
          "price": "$99.99",
          "buyLink": "#",
          "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/5f09867b54e9ad932b4dd1bc767f6238.256p.jpg"
        },
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
          {
            "name": "Crucial Ballistix RGB",
            "speed": "3000MHz",
            "modules": "2 x 8GB",
            "color": "RGB",
            "price": "$99.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/5f09867b54e9ad932b4dd1bc767f6238.256p.jpg"
          },
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
          {
            "name": "Crucial Ballistix RGB",
            "speed": "3000MHz",
            "modules": "2 x 8GB",
            "color": "RGB",
            "price": "$99.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/5f09867b54e9ad932b4dd1bc767f6238.256p.jpg"
          },
      ];

      return (
        <div>
            <MemoryDataTable memoryData={memoryData} />
        </div>
      )
      
} 

export default MemoryPage;