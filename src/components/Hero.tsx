import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Translation } from '@/lib/i18n';

interface HeroProps {
  translation: Translation;
}

export function Hero({ translation }: HeroProps) {
  const scrollToGettingStarted = () => {
    const element = document.getElementById('getting-started');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-60"></div>
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up">
            {translation.hero.title}
          </h1>
          
          <p className="text-xl lg:text-2xl text-primary font-semibold mb-4 animate-fade-up">
            {translation.hero.subtitle}
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up">
            {translation.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow"
              onClick={scrollToGettingStarted}
            >
              {translation.hero.getStarted}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a 
                href="https://github.com/ziminny/Streamline" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4" />
                {translation.hero.viewGithub}
              </a>
            </Button>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 animate-fade-up">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-custom">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {translation.hero.features.modular}
            </h3>
            <p className="text-muted-foreground">
              {translation.hero.features.modularDesc}
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-custom">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {translation.hero.features.performance}
            </h3>
            <p className="text-muted-foreground">
              {translation.hero.features.performanceDesc}
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-custom">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {translation.hero.features.security}
            </h3>
            <p className="text-muted-foreground">
              {translation.hero.features.securityDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}