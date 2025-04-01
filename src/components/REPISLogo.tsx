
import React from 'react';

const REPISLogo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40">
        {/* Green triangle */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 left-4 w-32 h-32 bg-brazil-green transform rotate-45"></div>
          </div>
        </div>
        
        {/* Yellow diagonal */}
        <div className="absolute top-10 left-8 w-24 h-12 bg-brazil-yellow transform -rotate-45"></div>
        
        {/* Blue R */}
        <div className="absolute top-12 right-7 text-6xl font-bold text-brazil-blue">R</div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-brazil-blue">REPIS</h1>
        <p className="text-sm text-gray-700">Sistema de Ressarcimento PS/PASEP</p>
      </div>
    </div>
  );
};

export default REPISLogo;
