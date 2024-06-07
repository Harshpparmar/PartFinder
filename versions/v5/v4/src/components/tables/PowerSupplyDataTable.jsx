import React from 'react';

const PowerSupplyDataTable = ({ powerSupplyData }) => {
  return (
    <div className="bg-gray-100 py-4 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm sm:text-base">
            <thead className="hidden bg-gray-200 text-gray-700 lg:table-header-group">
              <tr>
                <th className="px-2 py-2 text-left font-medium sm:px-4 sm:py-3">Power Supply</th>
                <th className="px-2 py-2 text-left font-medium sm:px-4 sm:py-3">Type</th>
                <th className="px-2 py-2 text-left font-medium sm:px-4 sm:py-3">Efficiency Rating</th>
                <th className="px-2 py-2 text-left font-medium sm:px-4 sm:py-3">Wattage</th>
                <th className="px-2 py-2 text-left font-medium sm:px-4 sm:py-3">Modular</th>
                <th className="px-2 py-2 text-left font-medium sm:px-4 sm:py-3">Color</th>
                <th className="px-2 py-2 text-right font-medium sm:px-4 sm:py-3">Price</th>
                <th className="px-2 py-2 text-right font-medium sm:px-4 sm:py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              { powerSupplyData.map(( powerSupplyData, index) => (
                <tr key={index} className="block border-b lg:table-row ">
                  <td className="block cursor-pointer px-2 py-2 font-medium hover:underline sm:px-4 sm:py-3 lg:table-cell ">
                    <img src={powerSupplyData.imageUrl} alt={powerSupplyData.name} className="h-8 w-8 inline-block mr-2" />
                    <span className="font-semibold lg:hidden">Power Supply:</span> {powerSupplyData.name}
                  </td>
                  <td className="block px-2 py-2 sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden ">Type:</span> {powerSupplyData.type}
                  </td>
                  <td className="block px-2 py-2 sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden">Efficiency Rating:</span> {powerSupplyData.rating}
                  </td>
                  <td className="block px-2 py-2 sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden">Wattage:</span> {powerSupplyData.wattage}
                  </td>
                  <td className="block px-2 py-2 sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden">Modular:</span> {powerSupplyData.modular}
                  </td>
                  <td className="block px-2 py-2 sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden">Color:</span> {powerSupplyData.color}
                  </td>
                  <td className="block px-2 py-2 text-right sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden">Price:</span> {powerSupplyData.price}
                  </td>
                  <td className="block px-2 py-2 text-right sm:px-4 sm:py-3 lg:table-cell">
                    
                    <a href={powerSupplyData.buyLink} className="rounded bg-blue-500 px-3 py-1 text-xs font-medium text-white hover:bg-blue-600 sm:text-sm">ADD</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>   
    </div>
  );
};

export default PowerSupplyDataTable;