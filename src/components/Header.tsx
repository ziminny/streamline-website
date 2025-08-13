import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Translation } from '@/lib/i18n';

interface HeaderProps {
  translation: Translation;
  language: string;
  onLanguageChange: (language: string) => void;
}

export function Header({ translation, language, onLanguageChange }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <img 
            src="https://raw.githubusercontent.com/ziminny/streamline-website -website/refs/heads/gh-pages/logo.png"  // Caminho relativo à pasta `public` (Next.js) ou raiz
            alt="Logo" 
            className="h-8 w-8 rounded-lg object-contain" 
          />
          
        </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('getting-started')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {translation.navigation.gettingStarted}
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {translation.navigation.features}
            </button>
            <button 
              onClick={() => scrollToSection('installation')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {translation.navigation.installation}
            </button>
            <button 
              onClick={() => scrollToSection('examples')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {translation.navigation.examples}
            </button>
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            asChild
          >
            <a 
              href="https://github.com/ziminny/Streamline" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">{translation.navigation.github}</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}