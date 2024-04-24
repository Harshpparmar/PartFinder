import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Builder = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedCPU, setSelectedCPU] = useState(null);
  const [selectedCooler, setSelectedCooler] = useState(null);

  // Check if CPU data is passed from the CPU selection page
  React.useEffect(() => {
    if (location.state && location.state.cpu) {
      setSelectedCPU(location.state.cpu);
    }
  }, [location.state]);

  // Check if cooler data is passed from the cooler selection page
  React.useEffect(() => {
    if (location.state && location.state.cooler) {
      setSelectedCooler(location.state.cooler);
    }
  }, [location.state]);

  const handleSelectCPU = () => {
    // Navigate to the CPU selection page
    navigate('/components/cpu', { state: { prevLocation: '/builder' } });
  };

  const handleSelectCooler = () => {
    // Navigate to the cooler selection page
    navigate('/components/cooler', { state: { prevLocation: '/builder' } });
  };

  const handleRemoveCPU = () => {
    setSelectedCPU(null);
  };

  const handleRemoveCooler = () => {
    setSelectedCooler(null);
  };

  const handleBuyCPU = () => {
    if (selectedCPU && selectedCPU.buyLink) {
      // Open the buy link in a new window
      window.open(selectedCPU.buyLink, '_blank');
    }
  };

  const handleBuyCooler = () => {
    if (selectedCooler && selectedCooler.buyLink) {
      // Open the buy link in a new window
      window.open(selectedCooler.buyLink, '_blank');
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 lg:px-0">
        <h1 className="text-4xl font-bold py-8 text-center bg-comet-900 text-white mb-4">Choose PC Parts</h1>
        <div className="overflow-x-auto">
          <table className="w-full md:w-3/4 lg:w-3/4 mx-auto">
            <thead className="hidden bg-gray-200 md:table-header-group">
              <tr>
                <th className="px-4 py-2 font-semibold">Component</th>
                <th className="px-4 py-2 font-semibold">Selection</th>
                <th className="px-4 py-2 font-semibold">Base</th>
                <th className="px-4 py-2 font-semibold">Price</th>
                <th className="px-4 py-2 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="max-h-[calc(100vh-200px)]">
              <tr className="block border-b border-opacity-20 md:table-row dark:border-gray-300 dark:bg-gray-50">
                {/* CPU component */}
                <td className="block px-4 py-3 text-xl font-semibold hover:underline md:table-cell md:px-6 md:py-4 md:text-base">
                  <a href="/components/cpu">CPU</a>
                </td>
                {/* Selected CPU */}
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 md:text-right">
                  {selectedCPU ? (
                    <div className="flex items-center">
                      <img src={selectedCPU.imageUrl} alt={selectedCPU.name} className="h-8 w-8 inline-block mr-2" />
                      <span className="font-medium">{selectedCPU.name}</span>
                    </div>
                  ) : (
                    <button
                      className="rounded bg-blue-600 px-4 py-2 font-bold text-white shadow-md hover:bg-blue-700"
                      onClick={handleSelectCPU}
                    >
                      Choose A CPU
                    </button>
                  )}
                </td>
                {/* More CPU details */}
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4">{selectedCPU && selectedCPU.base}</td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 text-green-600 font-semibold">{selectedCPU && selectedCPU.price}</td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4">
                  {selectedCPU && (
                    <div className="flex items-center">
                      <button className="rounded bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-600" onClick={handleBuyCPU}>
                        Buy
                      </button>
                      <button className="text-gray px-2 py-1 ml-2 hover:text-red-600" onClick={handleRemoveCPU}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </td>
              </tr>
              <tr className="block border-b border-opacity-20 md:table-row dark:border-gray-300 dark:bg-gray-50">
                {/* Cooler component */}
                <td className="block px-4 py-3 text-xl font-semibold hover:underline md:table-cell md:px-6 md:py-4 md:text-base">
                  <a href="/components/cooler">Cooler</a>
                </td>
                {/* Selected Cooler */}
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 md:text-right">
                  {selectedCooler ? (
                    <div className="flex items-center">
                      <img src={selectedCooler.imageUrl} alt={selectedCooler.name} className="h-8 w-8 inline-block mr-2" />
                      <span className="font-medium">{selectedCooler.name}</span>
                    </div>
                  ) : (
                    <button
                      className="rounded bg-blue-600 px-4 py-2 font-bold text-white shadow-md hover:bg-blue-700"
                      onClick={handleSelectCooler}
                    >
                      Choose A Cooler
                    </button>
                  )}
                </td>
                {/* More Cooler details */}
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4">{selectedCooler && selectedCooler.base}</td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 text-green-600 font-semibold">{selectedCooler && selectedCooler.price}</td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4">
                  {selectedCooler && (
                    <div className="flex items-center">
                      <button className="rounded bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-600" onClick={handleBuyCooler}>
                        Buy
                      </button>
                      <button className="text-gray px-2 py-1 ml-2 hover:text-red-600" onClick={handleRemoveCooler}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Builder;
