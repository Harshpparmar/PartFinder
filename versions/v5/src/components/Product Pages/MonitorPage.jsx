import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import MonitorTable from '../tables/MonitorTable'

const MonitorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectedMonitor = (selectedMonitor) => {
    navigate('/builder', {state: {...location.state, monitor: selectedMonitor}})
  };

  const monitorData = [
    {
      name : "Acer EK220Q",
      screenSize : "21.5 inch",
      resolution : "1920 x 1080",
      refreshRate : "100 Hz",
      aspectRatio : "16:9",
      price : "₹" + "5,198",
      buyLink : "https://amzn.in/d/2PLpo7O",
      imageUrl : "https://m.media-amazon.com/images/I/81xHjVQPwAL._SX679_.jpg"
    },
    {
      name : "Samsung LS24C310EAWXXL",
      screenSize : "24 inch",
      resolution : "1920 x 1080",
      refreshRate : "75 Hz",
      aspectRatio : "16:9",
      price : "₹" + "7,699",
      buyLink : "https://amzn.in/d/6Itdwl1",
      imageUrl : "https://m.media-amazon.com/images/I/71Sqk+ry2oL._SX679_.jpg"
    },
    {
      name : "Lenovo L-Series",
      screenSize : "21.45 inch",
      resolution : "FHD 1080p",
      refreshRate : "75 Hz",
      aspectRatio : "16:9",
      price : "₹" + "6,999",
      buyLink : "https://amzn.in/d/cqP6MHi",
      imageUrl : "https://m.media-amazon.com/images/I/71uAPvwB5uL._SX679_.jpg"
    },
    {
      name : "BenQ EW3270U",
      screenSize : "32 inch",
      resolution : "3840 x 2160 4K",
      refreshRate : "60 Hz",
      aspectRatio : "16:9",
      price : "₹" + "27,990",
      buyLink : "https://amzn.in/d/gExR9jk",
      imageUrl : "https://m.media-amazon.com/images/I/61ipWKyGGHL._SX679_.jpg"
    },
  ]
  return (
    <>
      <div>
        <MonitorTable monitorData={monitorData} onSelectMonitor={handleSelectedMonitor} />
      </div>
    </>
  )
}

export default MonitorPage