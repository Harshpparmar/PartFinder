import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import StorageDataTable from "../tables/StorageDataTable";

const StoragePage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelectStorage = (selectedStorage) => {
      navigate('/builder', {state: {...location.state, storage: selectedStorage} });
    };

    const storageData = [
       
          {
            name : "Samsung 970 EVO Plus",
            capacity : "1TB",
            type : "NVMe SSD",
            formfactor : "M.2",
            price : "₹" + "10,904",
            buyLink : "https://amzn.in/d/23ln93O",
            imageUrl : "https://m.media-amazon.com/images/I/61VnnnLt0iL._SX679_.jpg"
          },
          {
            name : "Crucial MX500",
            capacity : "2TB",
            type : "SATA SSD",
            formfactor : "2.5-inch",
            price : "₹" + "13,836",
            buyLink : "https://amzn.in/d/iCcaC71",
            imageUrl : "https://m.media-amazon.com/images/I/81rg-38AdJL._SX679_.jpg"
          },
          {
            name : "Western Digital Blue",
            capacity : "500GB",
            type : "SATA SSD",
            formfactor : "2.5-inch",
            price : "₹" + "4,169",
            buyLink : "https://amzn.in/d/30BIbZ0",
            imageUrl : "https://m.media-amazon.com/images/I/71HpqY5AJLL._SX522_.jpg"
          },
      ];

      return (
        <div>
            <StorageDataTable storageData={storageData} onSelectStorage={handleSelectStorage} />
        </div>
      );
      
};

export default StoragePage;