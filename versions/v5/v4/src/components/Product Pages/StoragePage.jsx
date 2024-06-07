import React from "react";
import StorageDataTable from "../tables/StorageDataTable";

const StoragePage = () => {
    const storageData = [
        {
          "name": "Samsung 970 EVO Plus",
          "capacity": "1TB",
          "type": "NVMe SSD",
          "formfactor": "M.2",
          "price": "$179.99",
          "buyLink": "#",
          "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/3b2a91588d1a28bfa1b0184fb7f1c0a1.256p.jpg"
        },
        {
          "name": "Crucial MX500",
          "capacity": "2TB",
          "type": "SATA SSD",
          "formfactor": "2.5-inch",
          "price": "$229.99",
          "buyLink": "#",
          "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/2830bf3ba317c794ccde742efe4304be.256p.jpg"
        },
        {
          "name": "Western Digital Blue",
          "capacity": "500GB",
          "type": "SATA SSD",
          "formfactor": "2.5-inch",
          "price": "$59.99",
          "buyLink": "#",
          "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/8e6dbae8a0f3c6572216c8758ce5a0b5.256p.jpg"
        },
        {
            "name": "Samsung 970 EVO Plus",
            "capacity": "1TB",
            "type": "NVMe SSD",
            "formfactor": "M.2",
            "price": "$179.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/3b2a91588d1a28bfa1b0184fb7f1c0a1.256p.jpg"
          },
          {
            "name": "Crucial MX500",
            "capacity": "2TB",
            "type": "SATA SSD",
            "formfactor": "2.5-inch",
            "price": "$229.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/2830bf3ba317c794ccde742efe4304be.256p.jpg"
          },
          {
            "name": "Western Digital Blue",
            "capacity": "500GB",
            "type": "SATA SSD",
            "formfactor": "2.5-inch",
            "price": "$59.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/8e6dbae8a0f3c6572216c8758ce5a0b5.256p.jpg"
          },
          {
            "name": "Samsung 970 EVO Plus",
            "capacity": "1TB",
            "type": "NVMe SSD",
            "formfactor": "M.2",
            "price": "$179.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/3b2a91588d1a28bfa1b0184fb7f1c0a1.256p.jpg"
          },
          {
            "name": "Crucial MX500",
            "capacity": "2TB",
            "type": "SATA SSD",
            "formfactor": "2.5-inch",
            "price": "$229.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/2830bf3ba317c794ccde742efe4304be.256p.jpg"
          },
          {
            "name": "Western Digital Blue",
            "capacity": "500GB",
            "type": "SATA SSD",
            "formfactor": "2.5-inch",
            "price": "$59.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/8e6dbae8a0f3c6572216c8758ce5a0b5.256p.jpg"
          },
          {
            "name": "Samsung 970 EVO Plus",
            "capacity": "1TB",
            "type": "NVMe SSD",
            "formfactor": "M.2",
            "price": "$179.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/3b2a91588d1a28bfa1b0184fb7f1c0a1.256p.jpg"
          },
          {
            "name": "Crucial MX500",
            "capacity": "2TB",
            "type": "SATA SSD",
            "formfactor": "2.5-inch",
            "price": "$229.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/2830bf3ba317c794ccde742efe4304be.256p.jpg"
          },
          {
            "name": "Western Digital Blue",
            "capacity": "500GB",
            "type": "SATA SSD",
            "formfactor": "2.5-inch",
            "price": "$59.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/8e6dbae8a0f3c6572216c8758ce5a0b5.256p.jpg"
          },
      ];

      return (
        <div>
            <StorageDataTable storageData={storageData} />
        </div>
      );
      
};

export default StoragePage;