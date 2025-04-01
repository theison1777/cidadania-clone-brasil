
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { UserCircle, FileText, Clock, AlertCircle, Mail, Phone } from 'lucide-react';

const ServiceCards = () => {
  const services = [
    {
      title: 'Cadastro Cidadão',
      description: 'Mantenha seus dados cadastrais atualizados no sistema REPIS',
      icon: <UserCircle className="h-8 w-8 text-brazil-blue" />,
      link: '/cadastro'
    },
    {
      title: 'Emissão de Documentos',
      description: 'Solicite documentos como certidões e comprovantes',
      icon: <FileText className="h-8 w-8 text-brazil-blue" />,
      link: '/documentos'
    },
    {
      title: 'Agendamento',
      description: 'Agende atendimento presencial em uma unidade',
      icon: <Clock className="h-8 w-8 text-brazil-blue" />,
      link: '/agendamento'
    },
    {
      title: 'Situação Cadastral',
      description: 'Consulte a situação do seu cadastro no sistema',
      icon: <AlertCircle className="h-8 w-8 text-brazil-blue" />,
      link: '/situacao'
    },
    {
      title: 'Notificações',
      description: 'Configurações de recebimento de comunicações',
      icon: <Mail className="h-8 w-8 text-brazil-blue" />,
      link: '/notificacoes'
    },
    {
      title: 'Canais de Atendimento',
      description: 'Conheça os canais de atendimento disponíveis',
      icon: <Phone className="h-8 w-8 text-brazil-blue" />,
      link: '/atendimento'
    }
  ];

  return (
    <div className="bg-brazil-gray py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brazil-blue mb-2">
          Serviços Disponíveis
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Acesse os serviços de cadastro e identificação civil disponíveis para o cidadão brasileiro
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {service.icon}
                <CardTitle className="text-xl font-bold text-brazil-blue">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 min-h-[60px]">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-brazil-blue text-brazil-blue hover:bg-brazil-blue hover:text-white">
                  Acessar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
