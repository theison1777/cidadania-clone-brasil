
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <div className="relative bg-brazil-blue overflow-hidden">
      <div className="absolute inset-0">
        <div className="bg-[url('https://www.gov.br/pt-br/arquivos-de-imagens-2019/banner-novo-governo-estadio-renato-soares.jpeg/@@images/01b82ddc-a439-424e-ba95-c478d8570aae.jpeg')] bg-cover bg-center opacity-10 h-full w-full" />
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            REPIS Cidadão
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-white/90 mb-6">
            Registro e Identificação Civil do Cidadão Brasileiro
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-8">
            Acesse serviços de registro civil, solicite documentos e atualize seus dados cadastrais de forma rápida e segura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-brazil-green hover:bg-green-700 text-white font-medium px-8 py-6">
              Acessar com gov.br
            </Button>
            <Button variant="outline" className="bg-white text-brazil-blue border-white hover:bg-gray-100 font-medium px-8 py-6">
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
