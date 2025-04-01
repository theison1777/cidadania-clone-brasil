
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brazil-blue text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="https://www.gov.br/++theme++padrao_govbr/img/govbr-branco.png" 
              alt="Governo do Brasil" 
              className="h-10 mb-4" 
            />
            <p className="text-sm">Ministério da Fazenda</p>
            <p className="text-sm">Secretaria da Receita Federal</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Política de Privacidade</a></li>
              <li><a href="#" className="text-sm hover:underline">Termos de Uso</a></li>
              <li><a href="#" className="text-sm hover:underline">Acessibilidade</a></li>
              <li><a href="#" className="text-sm hover:underline">Mapa do Site</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-sm">Telefone: 0800 123 4567</li>
              <li className="text-sm">E-mail: contato@repis.gov.br</li>
              <li className="text-sm">Horário de atendimento: 8h às 20h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-4">
          <p className="text-sm text-center">© {new Date().getFullYear()} - REPIS - Registro e Identificação Civil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
