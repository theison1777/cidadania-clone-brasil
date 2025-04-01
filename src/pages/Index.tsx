import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import REPISLogo from '@/components/REPISLogo';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-start mb-6">
            <p className="text-sm mb-1 text-blue-500 hover:text-blue-700 cursor-pointer flex items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <rect y="5" width="24" height="3" rx="1" fill="#0C77BD" />
                <rect y="11" width="24" height="3" rx="1" fill="#0C77BD" />
                <rect y="17" width="24" height="3" rx="1" fill="#0C77BD" />
              </svg>
              REPIS - Sistema de Ressarcimento PIS/PASEP
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
            
            <div className="mt-8 flex flex-row justify-center gap-4 w-full max-w-lg">
              <Button 
                className="bg-[#1449a3] text-white font-medium py-2 px-6 rounded-full hover:bg-[#1449a3]/90 flex items-center justify-center"
                onClick={() => window.location.href = "https://govbr-login-portal.lovable.app"}
              >
                <User className="mr-2" size={16} />
                Entrar com .Gov
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
