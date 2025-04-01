
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-brazil-gray flex items-center justify-center py-16">
        <div className="text-center max-w-md px-4">
          <h1 className="text-4xl font-bold text-brazil-blue mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Página não encontrada</p>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Button 
            onClick={() => window.location.href = '/'} 
            className="bg-brazil-blue hover:bg-blue-800"
          >
            Voltar para a página inicial
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
