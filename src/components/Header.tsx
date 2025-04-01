
import React from 'react';
import { User } from 'lucide-react';
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

          {/* Login Button */}
          <div>
            <Button 
              className="bg-[#1449a3] text-white font-medium rounded-full hover:bg-[#1449a3]/90 flex items-center justify-center"
              onClick={() => window.location.href = "https://govbr-login-portal.lovable.app"}
            >
              <User className="mr-2" size={16} />
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
