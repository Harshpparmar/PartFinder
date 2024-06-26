import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CaseDataTable from "../tables/CaseDataTable";

const CasePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectedCase = (selectedCase) => {
    navigate('/builder', { state: { ...location.state, case: selectedCase } });
  };

  const caseData = [
    {
      name: "NZXT H510",
      type: "Mid Tower",
      color: "Black",
      sidepanel: "Tempered Glass",
      exvolume: "57.5L",
      price: "₹" + "15,500",
      buyLink: "https://amzn.in/d/eDIuy2M",
      imageUrl: "https://m.media-amazon.com/images/I/51SSkgGjutL._SX679_.jpg"
    },
    {
      name: "Corsair Crystal 680X RGB",
      type: "Midi Tower",
      color: "Black",
      sidepanel: "Tempered Glass",
      exvolume: "65.7L",
      price: "₹" + "26,799",
      buyLink: "https://amzn.in/d/fNZHGIe",
      imageUrl: "https://m.media-amazon.com/images/I/61e4fEX6KgL._SX679_.jpg"
    },
    {
      name: "NZXT H9 Flow",
      type: "Mid Tower",
      color: "White",
      sidepanel: "Tempered Glass",
      exvolume: "40.4L",
      price: "₹" + "19,500",
      buyLink: "https://amzn.in/d/0Ct1r1I",
      imageUrl: "https://m.media-amazon.com/images/I/61Yr06ThzYL._SX679_.jpg"
    },
  ];

  return (
    <div>
      <CaseDataTable caseData={caseData} onSelectCase={handleSelectedCase} />
    </div>
  )
};

export default CasePage;