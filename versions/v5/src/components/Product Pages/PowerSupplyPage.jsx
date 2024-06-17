import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PowerSupplyDataTable from '../tables/PowerSupplyDataTable';

const PowerSupplyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectPowerSupply = (selectedPowerSupply) => {
    navigate('/builder', { state: { ...location.state, powerSupply: selectedPowerSupply } });
  };
  const powerSupplyData = [
    {
      name: "EVGA SuperNOVA 850 G5",
      type: "ATX",
      rating: "80 Plus Gold",
      wattage: "850W",
      modular: "Fully Modular",
      color: "Black",
      price: "₹" + "41,320",
      buyLink: "https://amzn.in/d/60ZcfzU",
      imageUrl: "https://m.media-amazon.com/images/I/615ipi-tHtL._SX522_.jpg"
    },
    {
      name: "Corsair RM850e",
      type: "ATX 3.0",
      rating: "80 Plus Gold",
      wattage: "850W",
      modular: "Fully Modular",
      color: "Black",
      price: "₹" + "14,999",
      buyLink: "https://amzn.in/d/0ZCjXAs",
      imageUrl: "https://m.media-amazon.com/images/I/61J0tIvkBYL._SX679_.jpg"
    },
    {
      name: "Ant Esports FP650B",
      type: "ATX",
      rating: "80 Plus Bronze",
      wattage: "650W",
      modular: "Non-Modular",
      color: "Gray",
      price: "₹" + "3,679",
      buyLink: "https://amzn.in/d/duVtBP0",
      imageUrl: "https://m.media-amazon.com/images/I/715qh8ANbtL._SX679_.jpg"
    },
  ];

  return (
    <div>
      <PowerSupplyDataTable powerSupplyData={powerSupplyData} onSelectPowerSupply={handleSelectPowerSupply} />
    </div>
  )
};

export default PowerSupplyPage;