
import React from 'react';
import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://i.postimg.cc/8PVMbwQH/govbr.png" 
              alt="Governo do Brasil" 
              className="h-7" 
            />
          </div>

          {/* Login Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              className="bg-[#1351B4] hover:bg-[#1351B4]/90 text-white rounded-full flex items-center justify-center px-5 py-1"
            >
              <LogIn className="mr-1" size={16} />
              <span className="font-medium">Entrar</span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-[#1351B4]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <a 
                    href="/" 
                    className="text-lg font-medium text-gray-700 hover:text-[#1351B4]"
                  >
                    Início
                  </a>
                  <a 
                    href="/servicos" 
                    className="text-lg font-medium text-gray-700 hover:text-[#1351B4]"
                  >
                    Serviços
                  </a>
                  <Button 
                    className="bg-[#1351B4] hover:bg-[#1351B4]/90 text-white rounded-full w-full mt-4 flex items-center justify-center"
                  >
                    <LogIn className="mr-2" size={16} />
                    <span>Entrar</span>
                  </Button>
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
