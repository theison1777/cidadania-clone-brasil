
import React from 'react';
import { CheckCircle2, Shield, Clock3, HelpCircle } from 'lucide-react';

const InfoSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brazil-blue mb-2">
          Como funciona o REPIS Cidadão?
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Entenda como funciona o sistema de Registro e Identificação Civil do Cidadão
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle2 className="h-10 w-10 text-brazil-green" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brazil-blue mb-2">Cadastro Simplificado</h3>
              <p className="text-gray-600">
                Faça seu cadastro apenas uma vez utilizando sua conta gov.br. Seus dados ficam seguros e centralizados.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Shield className="h-10 w-10 text-brazil-green" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brazil-blue mb-2">Segurança e Privacidade</h3>
              <p className="text-gray-600">
                Seus dados são protegidos seguindo as diretrizes da LGPD e os mais altos padrões de segurança.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Clock3 className="h-10 w-10 text-brazil-green" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brazil-blue mb-2">Agilidade nos Serviços</h3>
              <p className="text-gray-600">
                Emita documentos, faça atualizações cadastrais e agende atendimentos de forma rápida e eficiente.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <HelpCircle className="h-10 w-10 text-brazil-green" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brazil-blue mb-2">Suporte ao Cidadão</h3>
              <p className="text-gray-600">
                Conte com canais de atendimento para esclarecer dúvidas e resolver problemas relacionados aos seus documentos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
