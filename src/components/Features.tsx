import { Globe, Zap, Shield, Layers, Lock, MoreHorizontal } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Translation } from '@/lib/i18n';

interface FeaturesProps {
  translation: Translation;
}

export function Features({ translation }: FeaturesProps) {
  const features = [
    {
      icon: Globe,
      title: translation.features.httpRequests,
      description: translation.features.httpRequestsDesc,
    },
    {
      icon: Zap,
      title: translation.features.websockets,
      description: translation.features.websocketsDesc,
    },
    {
      icon: Shield,
      title: translation.features.authentication,
      description: translation.features.authenticationDesc,
    },
    {
      icon: Layers,
      title: translation.features.interceptors,
      description: translation.features.interceptorsDesc,
    },
    {
      icon: Lock,
      title: translation.features.mtls,
      description: translation.features.mtlsDesc,
    },
    {
      icon: MoreHorizontal,
      title: translation.features.pagination,
      description: translation.features.paginationDesc,
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-up">
            {translation.features.title}
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up">
            {translation.features.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 gradient-card border-border/50 shadow-custom hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}