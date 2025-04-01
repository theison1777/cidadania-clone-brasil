
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import REPISLogo from '@/components/REPISLogo';
import { Button } from '@/components/ui/button';
import { LogIn, HelpCircle } from 'lucide-react';

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
          
          <div className="mt-8 flex flex-col items-center">
            <REPISLogo />
            
            <div className="mt-8 max-w-3xl text-justify text-gray-700">
              <p className="mb-4">
                O Sistema de Ressarcimento do Pis-Pasep - REPIS é uma solução tecnológica desenvolvida pelo Ministério da Fazenda com o objetivo de permitir a consulta dos valores a serem ressarcidos aos beneficiários das cotas do extinto fundo PIS/PASEP.
              </p>
              
              <p>
                O sistema atende à Portaria Interministerial MTE/MF nº 2, de 11 de outubro de 2023, dos ministérios da Fazenda e do Trabalho e Emprego, que regulamenta o art. 121 e parágrafo único do Ato das Disposições Constitucionais Transitórias (ADCT), acrescido à Constituição Federal (CF) por meio da Emenda Constitucional (EC) nº 126, de 21 de dezembro de 2022.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 w-full max-w-lg">
              <Button className="bg-[#1449a3] text-white font-medium py-2 px-6 rounded-full hover:bg-[#1449a3]/90 flex items-center justify-center">
                <LogIn className="mr-2" size={16} />
                Entrar
              </Button>
              <Button className="bg-[#1449a3] text-white font-medium py-2 px-6 rounded-full hover:bg-[#1449a3]/90 flex items-center justify-center">
                <HelpCircle className="mr-2" size={16} />
                Perguntas Frequentes
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
