import React from 'react';

const CPUDataTable = ({cpuData}) => {
  return (
    <div className="bg-gray-100 py-4 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm sm:text-base">
            <thead className="hidden bg-gray-200 text-gray-700 lg:table-header-group">
              <tr>
                <th className="px-2 py-2 text-left font-medium sm:px-4 sm:py-3">Processor</th>
                <th className="px-2 py-2 text-left font-medium sm:px-4 sm:py-3">Cores/Threads</th>
                <th className="px-2 py-2 text-left font-medium sm:px-4 sm:py-3">Base/Boost</th>
                <th className="px-2 py-2 text-left font-medium sm:px-4 sm:py-3">TDP</th>
                <th className="px-2 py-2 text-right font-medium sm:px-4 sm:py-3">Price</th>
                <th className="px-2 py-2 text-right font-medium sm:px-4 sm:py-3">Buy</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              {cpuData.map((cpu, index) => (
                <tr key={index} className="block border-b lg:table-row">
                  <td className="block cursor-pointer px-2 py-2 font-medium hover:underline sm:px-4 sm:py-3 lg:table-cell">
                    <img src={cpu.imageUrl} alt={cpu.name} className="h-8 w-8 inline-block mr-2" />
                    <span className="font-semibold lg:hidden">Processor:</span> {cpu.name}
                  </td>
                  <td className="block px-2 py-2 sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden">Cores/Threads:</span> {cpu.coresThreads}
                  </td>
                  <td className="block px-2 py-2 sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden">Base/Boost:</span> {cpu.baseBoost}
                  </td>
                  <td className="block px-2 py-2 sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden">TDP:</span> {cpu.tdp}
                  </td>
                  <td className="block px-2 py-2 text-right sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden">Price:</span> {cpu.price}
                  </td>
                  <td className="block px-2 py-2 text-right sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden">Buy:</span>
                    <a href={cpu.buyLink} className="rounded bg-blue-500 px-3 py-1 text-xs font-medium text-white hover:bg-blue-600 sm:text-sm">Buy</a>
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

export default CPUDataTable;
