
import React from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Main Header - Simplified version */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png" 
              alt="Governo do Brasil" 
              className="h-6" 
            />
          </div>

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
                  <a 
                    href="/" 
                    className="text-lg font-medium text-gray-700 hover:text-brazil-blue"
                  >
                    Início
                  </a>
                  <a 
                    href="/servicos" 
                    className="text-lg font-medium text-gray-700 hover:text-brazil-blue"
                  >
                    Serviços
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
