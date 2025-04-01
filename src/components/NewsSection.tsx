
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      title: 'Novo sistema REPIS facilita emissão de documentos',
      date: '10/06/2023',
      description: 'Saiba como o novo sistema de Registro e Identificação Civil está transformando os serviços públicos.',
      image: 'https://www.gov.br/mre/pt-br/assuntos/cidadao-no-mundo/jeferson-costapassaporte-chip.jpg'
    },
    {
      title: 'Como atualizar seus dados cadastrais no REPIS',
      date: '25/05/2023',
      description: 'Guia completo para manter seus dados atualizados no sistema REPIS e evitar problemas na emissão de documentos.',
      image: 'https://www.gov.br/pt-br/negocios-e-oportunidades/contribuicoes-previdenciarias/image-2022-08-25-09-01-26-534.png'
    },
    {
      title: 'Prazo para recadastramento biométrico é estendido',
      date: '03/05/2023',
      description: 'Ministério da Fazenda amplia o prazo para cidadãos realizarem o recadastramento biométrico no sistema REPIS.',
      image: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/cpf/arquivos-e-imagens/atendimento-rfb.jpeg'
    }
  ];

  return (
    <div className="bg-brazil-gray py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brazil-blue mb-2">
          Notícias e Informações
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Acompanhe as últimas novidades sobre o REPIS Cidadão e documentação civil
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <CardTitle className="text-xl font-bold text-brazil-blue">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-brazil-blue text-brazil-blue hover:bg-brazil-blue hover:text-white">
                  Leia mais
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="border-brazil-blue text-brazil-blue hover:bg-brazil-blue hover:text-white">
            Ver todas as notícias
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
