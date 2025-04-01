
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Como Funciona', path: '/como-funciona' },
    { name: 'Perguntas Frequentes', path: '/faq' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Government Bar */}
      <div className="bg-brazil-blue py-1 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xs md:text-sm">
            <span className="hidden md:inline">Governo Federal</span>
            <span className="md:hidden">Gov.BR</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-white text-xs hover:underline">Acessibilidade</a>
            <a href="#" className="text-white text-xs hover:underline hidden md:inline">Transparência</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png" 
              alt="Governo do Brasil" 
              className="h-8 md:h-10" 
            />
            <div className="hidden md:block">
              <h1 className="text-brazil-blue text-lg font-bold">REPIS Cidadão</h1>
              <p className="text-xs text-gray-600">Ministério da Fazenda</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map(item => (
              <a 
                key={item.name}
                href={item.path}
                className="text-gray-700 hover:text-brazil-blue font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-brazil-green hover:bg-green-700 text-white">
              Acessar
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Menu size={20} />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map(item => (
                    <a 
                      key={item.name}
                      href={item.path}
                      className="text-lg font-medium text-gray-700 hover:text-brazil-blue"
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button className="bg-brazil-green hover:bg-green-700 text-white mt-4">
                    Acessar
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Sub navigation - appears on some pages */}
      <div className="bg-gray-100 border-t border-gray-200 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-10">
            <a href="/" className="text-sm text-gray-600 hover:text-brazil-blue">
              Página inicial
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
