
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResumeTemplateProps {
  title: string;
  company?: string;
  description: string;
  imageSrc: string;
  bgColor?: string;
  textColor?: string;
  isPremium?: boolean;
}

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({
  title,
  company,
  description,
  imageSrc,
  bgColor = 'bg-white',
  textColor = 'text-gray-800',
  isPremium = false,
}) => {
  const navigate = useNavigate();

  const handleUseTemplate = () => {
    navigate('/editor', { 
      state: { 
        template: {
          title,
          company,
          description,
          imageSrc,
          bgColor,
          textColor,
          isPremium
        }
      }
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className={cn("relative h-72 overflow-hidden", bgColor)}>
        {isPremium && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
            PREMIUM
          </div>
        )}
        <img 
          src={imageSrc} 
          alt={`${title} resume template`} 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className={cn("font-semibold text-lg", textColor)}>{title}</h3>
            {company && (
              <p className="text-resume-gray text-sm">{company}</p>
            )}
          </div>
          <FileText className="h-5 w-5 text-resume-indigo" />
        </div>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex space-x-2">
          <Button variant="outline" className="w-full text-xs">
            Preview
          </Button>
          <Button 
            className="w-full text-xs bg-resume-indigo hover:bg-resume-indigo/90"
            onClick={handleUseTemplate}
          >
            <Download className="h-3 w-3 mr-1" />
            Use Template
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeTemplate;
