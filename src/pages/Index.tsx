import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { GettingStarted } from '@/components/GettingStarted';
import { Installation } from '@/components/Installation';
import { Examples } from '@/components/Examples';
import { Footer } from '@/components/Footer';
import { translations } from '@/lib/i18n';

const Index = () => {
  const [language, setLanguage] = useState('en');
  const translation = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        translation={translation}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main>
        <Hero translation={translation} />
        <Features translation={translation} />
        <GettingStarted translation={translation} />
        <Installation translation={translation} />
        <Examples translation={translation} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
