import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import OsTable from '../tables/OsTable';

const OsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelectedOs = (selectedOs) => {
      navigate('/builder', {state: {...location.state, os: selectedOs}})
    };

    const osData = [
      {
        name : "Microsoft Windows 11 Pro",
        mode : "64 bit",
        price : "₹" + "9,513",
        buyLink : "https://amzn.in/d/cQeCxc5",
        imageUrl : "https://m.media-amazon.com/images/I/51bdxhaQO6L._SX679_.jpg"
      },
      {
        name : "Microsoft Windows 10 Professional",
        mode : "32 bit/64 bit",
        price : "₹" + "4,400",
        buyLink : "https://amzn.in/d/2OlesiK",
        imageUrl : "https://m.media-amazon.com/images/I/61jaIhpn07L._SY741_.jpg"
      },
      {
        name : "Microsoft Windows 11 Home",
        mode : "64 bit",
        price : "₹" + "4,000",
        buyLink : "https://amzn.in/d/g2a6TaI",
        imageUrl : "https://m.media-amazon.com/images/I/61fUMcLzmgL._SY741_.jpg"
      },
      {
        name : "Windows 10 Pro",
        mode : "32 bit/64 bit",
        price : "₹" + "4,500",
        buyLink : "https://amzn.in/d/gtjAAZ8",
        imageUrl : "https://m.media-amazon.com/images/I/61ex2EhAjOL._SX679_.jpg"
      },
    ]
  return (
    <>
      <div>
        <OsTable osData={osData} onSelectOs={handleSelectedOs} />
      </div>
    </>
  )
}

export default OsPage