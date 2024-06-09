import React from 'react';

const ComponentTableRow = ({ componentName, selectedComponent, onSelectComponent, onRemoveComponent, onBuyComponent }) => {
  return (
    <tr className="block border-b border-opacity-20 md:table-row dark:border-gray-300 dark:bg-gray-50">
      <td className="block px-4 py-3 text-xl font-semibold hover:underline md:table-cell md:px-6 md:py-4 md:text-base">
        <a href={`/components/${componentName}`}>{componentName}</a>
      </td>
      <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 md:text-right">
        {selectedComponent ? (
          <div className="flex items-center">
            <img src={selectedComponent.imageUrl} alt={selectedComponent.name} className="h-8 w-8 inline-block mr-10" />
            <span className='font-medium'>{selectedComponent.name}</span>
          </div>
        ) : (
          <button
            className="flex items-center rounded bg-blue-600 px-4 py-2 font-bold text-white shadow-md hover:bg-blue-700"
            onClick={() => onSelectComponent(componentName)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Choose A {componentName}
          </button>
        )}
      </td>
      {/* Add more cells for other details */}
      <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4">
        <span className="text-black font-semibold lg:hidden"> Base: </span>{selectedComponent && selectedComponent.price}
      </td>
      <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
      <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
      <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
      <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 text-green-600 font-semibold">
        <span className="text-black font-semibold lg:hidden"> Price: </span>{selectedComponent && selectedComponent.price}
      </td>
      <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4">
        {selectedComponent && (
          <div className='flex items-center justify-end'>
            <button
              className="rounded bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-600 sm:text-sm sm:text-md md:text-md sm:justify-end"
              onClick={onBuyComponent}
            >
              Buy
            </button>
            <button
              className=" text-gray px-2 py-1 mr-2 hover:text-red-600"
              onClick={onRemoveComponent}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default ComponentTableRow;
