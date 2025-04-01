
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#071D41] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img 
            src="https://i.postimg.cc/N0fqWxcd/repiscidadao-govbrlogobranco100px.png" 
            alt="Governo do Brasil" 
            className="h-12" 
          />
          <img 
            src="https://i.postimg.cc/8CKQDrkN/repiscidadao-ministeriodafazenda.png" 
            alt="Ministério da Fazenda" 
            className="h-12" 
          />
          <img 
            src="https://i.postimg.cc/765vLYb7/repiscidadao-secretariaexecutiva.png" 
            alt="Secretaria Executiva" 
            className="h-12" 
          />
          <img 
            src="https://i.postimg.cc/cC3VQ9RL/repiscidadao-acesso-informacao.png" 
            alt="Acesso à Informação" 
            className="h-12" 
          />
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-4">
          <p className="text-sm text-center">© {new Date().getFullYear()} - REPIS - Registro e Identificação Civil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
