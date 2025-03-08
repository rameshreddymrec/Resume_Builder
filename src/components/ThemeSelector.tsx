
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Check, Palette } from 'lucide-react';

interface Theme {
  id: string;
  name: string;
  primaryColor: string;
  textColor: string;
  accentColor: string;
  fontFamily: string;
}

interface ThemeSelectorProps {
  onSelectTheme: (theme: Theme) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onSelectTheme }) => {
  const themes: Theme[] = [
    {
      id: 'professional',
      name: 'Professional Blue',
      primaryColor: 'bg-resume-indigo',
      textColor: 'text-gray-800',
      accentColor: 'bg-blue-100',
      fontFamily: 'font-sans'
    },
    {
      id: 'modern',
      name: 'Modern Dark',
      primaryColor: 'bg-gray-800',
      textColor: 'text-gray-800',
      accentColor: 'bg-gray-200',
      fontFamily: 'font-sans'
    },
    {
      id: 'creative',
      name: 'Creative Purple',
      primaryColor: 'bg-purple-600',
      textColor: 'text-purple-800',
      accentColor: 'bg-purple-100',
      fontFamily: 'font-sans'
    },
    {
      id: 'elegant',
      name: 'Elegant Green',
      primaryColor: 'bg-emerald-700',
      textColor: 'text-emerald-800',
      accentColor: 'bg-emerald-100',
      fontFamily: 'font-serif'
    },
    {
      id: 'bold',
      name: 'Bold Red',
      primaryColor: 'bg-red-600',
      textColor: 'text-red-800',
      accentColor: 'bg-red-100',
      fontFamily: 'font-sans'
    },
    {
      id: 'minimal',
      name: 'Minimal Gray',
      primaryColor: 'bg-gray-200',
      textColor: 'text-gray-800',
      accentColor: 'bg-gray-100',
      fontFamily: 'font-sans'
    },
    {
      id: 'tech',
      name: 'Tech Teal',
      primaryColor: 'bg-teal-600',
      textColor: 'text-teal-800',
      accentColor: 'bg-teal-100',
      fontFamily: 'font-mono'
    },
    {
      id: 'warm',
      name: 'Warm Orange',
      primaryColor: 'bg-orange-500',
      textColor: 'text-orange-800',
      accentColor: 'bg-orange-100',
      fontFamily: 'font-sans'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4 flex items-center">
          <Palette className="h-5 w-5 mr-2" />
          Choose a Theme
        </h3>
        <RadioGroup defaultValue="professional" className="grid grid-cols-2 gap-4">
          {themes.map((theme) => (
            <div key={theme.id}>
              <RadioGroupItem
                value={theme.id}
                id={theme.id}
                className="peer sr-only"
                onClick={() => onSelectTheme(theme)}
              />
              <Label
                htmlFor={theme.id}
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <div className={`w-full h-8 rounded-md mb-2 ${theme.primaryColor}`} />
                <span className="text-sm font-medium">{theme.name}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div>
        <h3 className="font-medium mb-3">Font Styles</h3>
        <div className="grid grid-cols-2 gap-3">
          <Card className="cursor-pointer hover:bg-gray-50" onClick={() => 
            onSelectTheme({...themes[0], fontFamily: 'font-sans'})
          }>
            <CardContent className="p-4">
              <p className="font-sans text-sm">Sans Serif</p>
              <p className="font-sans text-xs text-gray-500">Clean & Modern</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:bg-gray-50" onClick={() => 
            onSelectTheme({...themes[0], fontFamily: 'font-serif'})
          }>
            <CardContent className="p-4">
              <p className="font-serif text-sm">Serif</p>
              <p className="font-serif text-xs text-gray-500">Traditional & Elegant</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:bg-gray-50" onClick={() => 
            onSelectTheme({...themes[0], fontFamily: 'font-mono'})
          }>
            <CardContent className="p-4">
              <p className="font-mono text-sm">Monospace</p>
              <p className="font-mono text-xs text-gray-500">Technical & Precise</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
