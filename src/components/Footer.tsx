import { Github, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">Streamline</span>
            </div>
            <p className="text-muted-foreground">
              A modular Swift networking framework designed for flexibility, speed, and ease of integration.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#getting-started" className="hover:text-foreground transition-colors">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#installation" className="hover:text-foreground transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="#examples" className="hover:text-foreground transition-colors">
                  Examples
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a 
                  href="https://github.com/ziminny/Streamline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-foreground transition-colors"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © 2025 Streamline. Licensed under the MIT License.
          </p>
          <p className="flex items-center text-muted-foreground mt-4 md:mt-0">
            Made with <Heart className="mx-1 h-4 w-4 text-red-500" /> for the Swift community
          </p>
        </div>
      </div>
    </footer>
  );
}