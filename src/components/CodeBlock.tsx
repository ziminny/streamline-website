
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

export function CodeBlock({ code, language = 'swift', title, className = '' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const highlightSwiftCode = (code: string) => {
    // Check if code is already highlighted
    if (code.includes('<span class="code-')) {
      return code;
    }
    
    let highlighted = code;

    // Strings (both single and double quotes)
    //highlighted = highlighted.replace(/(["'][^"']*["'])/g, '<span class="code-string">$1</span>');
    
    
    // Keywords first - more comprehensive list
    highlighted = highlighted.replace(/\b(func|class|struct|enum|var|let|import|extension|final|private|public|internal|override|required|init|case|switch|if|else|for|while|try|catch|throw|async|await|nonisolated|unsafe|return|guard|where|protocol|typealias|associatedtype|mutating|nonmutating|static|convenience|lazy|weak|unowned|inout|@escaping|@autoclosure|@available|@objc|@nonobjc|@IBAction|@IBOutlet|@IBDesignable|@IBInspectable|@discardableResult|@testable|@main|open|fileprivate|some|any|Self|super|self)\b/g, '<span class="code-keyword">$1</span>');
    
    // Comments (single line)
    highlighted = highlighted.replace(/(\/\/.*$)/gm, '<span class="code-comment">$1</span>');
    
    // Multi-line comments
    highlighted = highlighted.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="code-comment">$1</span>');
    
    // Numbers
    highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g, '<span class="code-number">$1</span>');
    
    // Function calls (word followed by opening parenthesis)
    highlighted = highlighted.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, '<span class="code-function">$1</span>');

    return highlighted;
  };

  return (
    <div className={`relative ${className}`}>
      {title && (
        <div className="bg-muted-dark text-muted-foreground px-4 py-2 text-sm font-medium rounded-t-lg border-b border-border">
          {title}
        </div>
      )}
      <div className="relative">
        <Button
          variant="outline"
          size="sm"
          className="absolute top-2 right-2 h-8 w-8 p-0 z-10"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
        <pre className={`code-block overflow-x-auto ${title ? 'rounded-t-none' : 'rounded-lg'}`}>
          <code 
            className="font-mono text-sm"
            dangerouslySetInnerHTML={{ 
              __html: language === 'swift' ? highlightSwiftCode(code) : code 
            }}
          />
        </pre>
      </div>
    </div>
  );
}
