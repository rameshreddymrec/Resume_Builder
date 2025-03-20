
import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Save, ChevronLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ThemeSelector from '@/components/ThemeSelector';
import UserDetailsForm from '@/components/UserDetailsForm';
import ResumePreview from '@/components/ResumePreview';
import ATSChecker from '@/components/ATSChecker';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';

const ResumeEditor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const resumeTemplate = location.state?.template;
  const previewRef = useRef<HTMLDivElement>(null);
  
  const [activeSection, setActiveSection] = useState('details'); // 'details', 'theme', or 'ats'
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
  });
  
  const [selectedTheme, setSelectedTheme] = useState('classic');

  if (!resumeTemplate) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-xl mb-4">No template selected.</p>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  const handleDetailsUpdate = (newDetails: any) => {
    setUserDetails(newDetails);
  };

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
  };

  const downloadAsPDF = async () => {
    if (!previewRef.current) return;
    
    try {
      toast({
        title: "Generating PDF",
        description: "Please wait while we prepare your resume...",
      });
      
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${userDetails.name || 'resume'}_${resumeTemplate.title}.pdf`);
      
      toast({
        title: "Success!",
        description: "Your resume has been downloaded as a PDF",
      });
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  const downloadAsWord = () => {
    if (!previewRef.current) return;
    
    try {
      const header = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' 
              xmlns:w='urn:schemas-microsoft-com:office:word' 
              xmlns='http://www.w3.org/TR/REC-html40'>
        <head><meta charset='utf-8'><title>${userDetails.name || 'Resume'}</title></head>
        <body>
      `;
      
      const footer = "</body></html>";
      const sourceHTML = previewRef.current.innerHTML;
      const source = header + sourceHTML + footer;
      
      const blob = new Blob([source], { type: 'application/msword' });
      saveAs(blob, `${userDetails.name || 'resume'}_${resumeTemplate.title}.doc`);
      
      toast({
        title: "Success!",
        description: "Your resume has been downloaded as a Word document",
      });
    } catch (error) {
      console.error("Word generation failed:", error);
      toast({
        title: "Error",
        description: "Failed to generate Word document. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="bg-white border-b py-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)}
              className="mr-4"
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Back
            </Button>
            <h1 className="text-xl font-semibold">
              Customizing {resumeTemplate.title} Resume
            </h1>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={downloadAsWord}
              className="shadow-sm hover:shadow-md transition-shadow"
            >
              <Download className="h-4 w-4 mr-1" />
              Word
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              onClick={downloadAsPDF}
              className="shadow-sm hover:shadow-md transition-shadow"
            >
              <Download className="h-4 w-4 mr-1" />
              PDF
            </Button>
          </div>
        </div>
      </div>
      
      <section className="py-8 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left side - Form controls */}
            <div className="md:col-span-4">
              <Card className="sticky top-24 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-6 border-b">
                    <Button
                      variant={activeSection === 'details' ? 'default' : 'ghost'}
                      className="flex-1 rounded-none shadow-sm"
                      onClick={() => setActiveSection('details')}
                    >
                      Details
                    </Button>
                    <Button
                      variant={activeSection === 'theme' ? 'default' : 'ghost'}
                      className="flex-1 rounded-none shadow-sm"
                      onClick={() => setActiveSection('theme')}
                    >
                      Theme
                    </Button>
                    <Button
                      variant={activeSection === 'ats' ? 'default' : 'ghost'}
                      className="flex-1 rounded-none shadow-sm"
                      onClick={() => setActiveSection('ats')}
                    >
                      ATS
                    </Button>
                  </div>
                  
                  {activeSection === 'details' && (
                    <UserDetailsForm 
                      userDetails={userDetails} 
                      onUpdate={handleDetailsUpdate} 
                    />
                  )}
                  
                  {activeSection === 'theme' && (
                    <ThemeSelector 
                      selectedTheme={selectedTheme} 
                      onThemeChange={handleThemeChange}
                    />
                  )}
                  
                  {activeSection === 'ats' && (
                    <ATSChecker resumeContent={userDetails} />
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Right side - Resume Preview */}
            <div className="md:col-span-8">
              <div 
                ref={previewRef} 
                className="bg-white shadow-xl p-8 min-h-[1056px] w-full mx-auto rounded-lg border border-gray-100"
              >
                <ResumePreview 
                  template={resumeTemplate}
                  userDetails={userDetails}
                  theme={selectedTheme}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-white py-6 shadow-inner">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 DualResume Genius. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ResumeEditor;
