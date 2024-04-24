import React from 'react';

const VideoCardDataTable = ({ videoCardData }) => {
  return (
    <div className="bg-gray-100 py-4 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm sm:text-base">
            <thead className="hidden bg-gray-200 text-gray-700 lg:table-header-group">
              <tr>
                <th className="px-2 py-2 text-left font-medium sm:px-4 sm:py-3">Video Card</th>
                <th className="px-2 py-2 text-left font-medium sm:px-4 sm:py-3">Chipset</th>
                <th className="px-2 py-2 text-left font-medium sm:px-4 sm:py-3">Memory</th>
                <th className="px-2 py-2 text-left font-medium sm:px-4 sm:py-3">Core Clock/Boost Clock</th>
                <th className="px-2 py-2 text-right font-medium sm:px-4 sm:py-3">Price</th>
                <th className="px-2 py-2 text-right font-medium sm:px-4 sm:py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              { videoCardData.map(( videoCardData, index) => (
                <tr key={index} className="block border-b lg:table-row ">
                  <td className="block cursor-pointer px-2 py-2 font-medium hover:underline sm:px-4 sm:py-3 lg:table-cell ">
                    <img src={videoCardData.imageUrl} alt={videoCardData.name} className="h-8 w-8 inline-block mr-2" />
                    <span className="font-semibold lg:hidden">Video Card:</span> {videoCardData.name}
                  </td>
                  <td className="block px-2 py-2 sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden ">Memory:</span> {videoCardData.memory}
                  </td>
                  <td className="block px-2 py-2 sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden">Core Clock/Boost Clock:</span> {videoCardData.clocks}
                  </td>
                  <td className="block px-2 py-2 sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden">Core Clock/Boost Clock:</span> {videoCardData.clocks}
                  </td>
                  <td className="block px-2 py-2 text-right sm:px-4 sm:py-3 lg:table-cell">
                    <span className="font-semibold lg:hidden">Price:</span> {videoCardData.price}
                  </td>
                  <td className="block px-2 py-2 text-right sm:px-4 sm:py-3 lg:table-cell">
                    
                    <a href={videoCardData.buyLink} className="rounded bg-blue-500 px-3 py-1 text-xs font-medium text-white hover:bg-blue-600 sm:text-sm">ADD</a>
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

export default VideoCardDataTable;