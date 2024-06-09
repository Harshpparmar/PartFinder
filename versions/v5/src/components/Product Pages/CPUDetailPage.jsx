// CPUDetailPage.js

import React from 'react';

const CPUDetailPage = ({ cpu }) => {
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-semibold mb-4">{cpu.name}</h1>
      <div>
        <img src={cpu.imageUrl} alt={cpu.name} className="w-full max-w-lg mx-auto mb-4" />
        <p><strong>Cores/Threads:</strong> {cpu.coresThreads}</p>
        <p><strong>Base/Boost:</strong> {cpu.baseBoost}</p>
        <p><strong>TDP:</strong> {cpu.tdp}</p>
        <p><strong>Price:</strong> {cpu.price}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default CPUDetailPage;
