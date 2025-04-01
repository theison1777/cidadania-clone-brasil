
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import ServiceCards from '@/components/ServiceCards';
import LoginForm from '@/components/LoginForm';
import InfoSection from '@/components/InfoSection';
import NewsSection from '@/components/NewsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <ServiceCards />
        <div className="bg-white py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <LoginForm />
              <InfoSection />
            </div>
          </div>
        </div>
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
