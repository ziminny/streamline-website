import { Package, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { CodeBlock } from './CodeBlock';
import { Translation } from '@/lib/i18n';

interface InstallationProps {
  translation: Translation;
}

export function Installation({ translation }: InstallationProps) {
  const spmCode = `dependencies: [
    .package(url: "https://github.com/ziminny/Streamline.git", from: "1.0.0")
]`;

  const cocoapodsCode = `pod 'Streamline', :git => 'https://github.com/ziminny/Streamline.git'`;

  return (
    <section id="installation" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {translation.installation.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            Add Streamline to your project using your preferred package manager
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Swift Package Manager */}
            <Card className="p-6 gradient-card border-border/50 shadow-custom animate-fade-up">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                  <Package className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {translation.installation.swiftPackageManager}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Add Streamline to your project dependencies:
              </p>
              <CodeBlock code={spmCode} />
            </Card>

            {/* CocoaPods */}
            <Card className="p-6 gradient-card border-border/50 shadow-custom animate-fade-up">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                  <Download className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {translation.installation.cocoapods}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Add to your Podfile:
              </p>
              <CodeBlock code={cocoapodsCode} language="ruby" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}