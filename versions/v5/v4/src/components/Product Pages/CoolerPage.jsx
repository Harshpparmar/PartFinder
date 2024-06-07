import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CoolerDataTable from '../tables/CoolerDataTable';

const CoolerPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCooler, setSelectedCooler] = useState(null);
  // Define cooler data
  const coolerData = [
    {
      name: "Noctua NH-D15",
      socketCompatibility: "Intel LGA1200, LGA1150, LGA1151,...",
      fanRPM: "300 - 1500 RPM",
      noiseLevel: "24.6 - 49.9 dBA",
      price: "$89.95",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/12bfecb3325a384ef35e38ada6b8bca3.256p.jpg"
    },
    {
      name: "Cooler Master Hyper 212 RGB",
      socketCompatibility: "Intel LGA1200, LGA1150, LGA1151,...",
      fanRPM: "650 - 2000 RPM",
      noiseLevel: "8 - 30 dBA",
      price: "$39.99",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/157afeba59d05304fe181106745e6177.256p.jpg"
    },
    {
      name: "Noctua NH-D15",
      socketCompatibility: "Intel LGA1200, LGA1150, LGA1151,...",
      fanRPM: "300 - 1500 RPM",
      noiseLevel: "24.6 - 49.9 dBA",
      price: "$89.95",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/12bfecb3325a384ef35e38ada6b8bca3.256p.jpg"
    },
    {
      name: "Cooler Master Hyper 212 RGB",
      socketCompatibility: "Intel LGA1200, LGA1150, LGA1151,...",
      fanRPM: "650 - 2000 RPM",
      noiseLevel: "8 - 30 dBA",
      price: "$39.99",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/157afeba59d05304fe181106745e6177.256p.jpg"
    },
    {
      name: "Noctua NH-D15",
      socketCompatibility: "Intel LGA1200, LGA1150, LGA1151,...",
      fanRPM: "300 - 1500 RPM",
      noiseLevel: "24.6 - 49.9 dBA",
      price: "$89.95",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/12bfecb3325a384ef35e38ada6b8bca3.256p.jpg"
    },
    {
      name: "Cooler Master Hyper 212 RGB",
      socketCompatibility: "Intel LGA1200, LGA1150, LGA1151,...",
      fanRPM: "650 - 2000 RPM",
      noiseLevel: "8 - 30 dBA",
      price: "$39.99",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/157afeba59d05304fe181106745e6177.256p.jpg"
    },
    {
      name: "Noctua NH-D15",
      socketCompatibility: "Intel LGA1200, LGA1150, LGA1151,...",
      fanRPM: "300 - 1500 RPM",
      noiseLevel: "24.6 - 49.9 dBA",
      price: "$89.95",
      buyLink: "#",
      imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/12bfecb3325a384ef35e38ada6b8bca3.256p.jpg"
    },
    // Add more cooler data as needed
  ];
  // In the cooler selection page
const handleAddCooler = (cooler) => {
  setSelectedCooler(cooler);
  // navigate('/builder', { state: { cooler: cooler } });
  // navigate('/builder', { state: { cpu: location.state.cpu, cooler: cooler } });
  navigate('/builder', { state: { ...location.state, cooler: cooler } });
};

  return (
    <div>
      {/* Other cooler page content */}
      <CoolerDataTable coolerData={coolerData} onAddCooler={handleAddCooler}/>
    </div>
  );
};

export default CoolerPage;
