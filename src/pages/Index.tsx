
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import REPISLogo from '@/components/REPISLogo';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-start mb-6">
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Página</span> - Sistema de Ressarcimento PIS/PASEP
            </p>
            <h1 className="text-2xl md:text-3xl font-medium text-gray-800">
              Bem-vindo ao REPIS Cidadão
            </h1>
          </div>
          
          <div className="mt-8 flex justify-center">
            <REPISLogo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
