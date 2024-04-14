// pages/CPUPage.js
import React from 'react';
import CPUDataTable from '../components/CPUDataTable';

const CPUPage = () => {
  // Define CPU data
  const cpuData = [
    // CPU data objects
  ];

  return (
    <div>
      {/* Other CPU page content */}
      <CPUDataTable cpuData={cpuData} />
    </div>
  );
};

export default CPUPage;
