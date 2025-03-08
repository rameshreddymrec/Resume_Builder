
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface ThemeSelectorProps {
  selectedTheme: string;
  onThemeChange: (theme: string) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  selectedTheme,
  onThemeChange
}) => {
  const themes = [
    { 
      id: 'classic', 
      name: 'Classic', 
      colors: 'bg-white text-gray-800 border-gray-300' 
    },
    { 
      id: 'modern', 
      name: 'Modern', 
      colors: 'bg-gray-50 text-gray-900 border-blue-300' 
    },
    { 
      id: 'professional', 
      name: 'Professional', 
      colors: 'bg-gray-100 text-gray-800 border-gray-400' 
    },
    { 
      id: 'creative', 
      name: 'Creative', 
      colors: 'bg-pink-50 text-pink-800 border-pink-200' 
    },
    { 
      id: 'minimal', 
      name: 'Minimal', 
      colors: 'bg-white text-gray-700 border-gray-200' 
    },
    { 
      id: 'bold', 
      name: 'Bold', 
      colors: 'bg-indigo-50 text-indigo-900 border-indigo-300' 
    },
    { 
      id: 'elegant', 
      name: 'Elegant', 
      colors: 'bg-amber-50 text-amber-900 border-amber-200' 
    },
    { 
      id: 'tech', 
      name: 'Tech', 
      colors: 'bg-cyan-50 text-cyan-900 border-cyan-300' 
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Choose a Theme</h3>
      
      <RadioGroup 
        value={selectedTheme}
        onValueChange={onThemeChange}
        className="grid grid-cols-1 gap-4"
      >
        {themes.map((theme) => (
          <div 
            key={theme.id}
            className="flex items-center space-x-3 border rounded-md p-3 hover:bg-gray-50 transition-colors"
          >
            <RadioGroupItem value={theme.id} id={theme.id} />
            <div className="flex flex-1 items-center justify-between">
              <Label htmlFor={theme.id} className="cursor-pointer font-medium">
                {theme.name}
              </Label>
              <div className={`w-8 h-8 rounded-full border ${theme.colors}`}></div>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ThemeSelector;
