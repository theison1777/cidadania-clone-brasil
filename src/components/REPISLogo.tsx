
import React from 'react';

const REPISLogo = () => {
  return (
    <div className="flex flex-col items-center">
      <img 
        src="https://i.postimg.cc/gkdRFwxx/repiscidadao-marca-Repis.png" 
        alt="REPIS Cidadão" 
        className="w-auto h-40 mb-2"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-brazil-blue"></h1>
        <p className="text-sm text-gray-700">Sistema de Ressarcimento PIS/PASEP</p>
      </div>
    </div>
  );
};

export default REPISLogo;
