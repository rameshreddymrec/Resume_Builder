
import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Download, Palette, Save } from 'lucide-react';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import UserDetailsForm from '@/components/UserDetailsForm';
import ThemeSelector from '@/components/ThemeSelector';

const ResumeEditor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resumeData = location.state?.resumeData || null;
  const resumeRef = useRef<HTMLDivElement>(null);
  
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: [],
    education: [],
    skills: []
  });
  
  const [currentTheme, setCurrentTheme] = useState({
    primaryColor: 'bg-resume-indigo',
    textColor: 'text-gray-800',
    accentColor: 'bg-blue-100',
    fontFamily: 'font-sans'
  });

  if (!resumeData) {
    // Redirect back to template selection if no data
    navigate('/technical');
    return null;
  }

  const handleUserDetailsChange = (newDetails) => {
    setUserDetails({...userDetails, ...newDetails});
  };

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    toast.success('Theme applied successfully');
  };

  const downloadAsPDF = () => {
    if (resumeRef.current) {
      toast.info('Preparing your PDF...');
      
      html2canvas(resumeRef.current, {
        scale: 2,
        logging: false,
        useCORS: true
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save(`${userDetails.name || 'resume'}_${new Date().toISOString().slice(0,10)}.pdf`);
        
        toast.success('PDF downloaded successfully!');
      });
    }
  };

  const downloadAsWord = () => {
    toast.error('Word export feature is coming soon!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side - Editor */}
          <div className="w-full lg:w-1/3 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Resume Editor
                </h2>
                
                <Tabs defaultValue="details">
                  <TabsList className="w-full mb-6">
                    <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                    <TabsTrigger value="theme" className="flex-1">Theme</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="details">
                    <UserDetailsForm 
                      userDetails={userDetails} 
                      onChange={handleUserDetailsChange} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="theme">
                    <ThemeSelector onSelectTheme={handleThemeChange} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => navigate(-1)}
              >
                Back to Templates
              </Button>
              <Button 
                className="flex-1 bg-resume-indigo hover:bg-resume-indigo/90"
                onClick={downloadAsPDF}
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={downloadAsWord}
              >
                <Download className="h-4 w-4 mr-2" />
                Word
              </Button>
            </div>
          </div>
          
          {/* Right side - Preview */}
          <div className="w-full lg:w-2/3">
            <Card className="mb-4">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-500">This is a preview of your resume. Edit details on the left panel.</p>
              </CardContent>
            </Card>
            
            <div ref={resumeRef} className={`bg-white shadow-lg rounded-lg overflow-hidden ${currentTheme.fontFamily}`}>
              <div className={`${currentTheme.primaryColor} p-6`}>
                <h1 className={`text-2xl md:text-3xl font-bold ${currentTheme.textColor === 'text-gray-800' ? 'text-white' : currentTheme.textColor}`}>
                  {userDetails.name || resumeData.title}
                </h1>
                <p className={`${currentTheme.textColor === 'text-gray-800' ? 'text-white/80' : currentTheme.textColor} mt-2`}>
                  {userDetails.email && userDetails.phone ? 
                    `${userDetails.email} • ${userDetails.phone}` : 
                    resumeData.company || 'Professional Resume'}
                </p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h2 className={`text-xl font-semibold mb-2 ${currentTheme.textColor}`}>Professional Summary</h2>
                  <p className="text-gray-700">
                    {userDetails.summary || resumeData.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h2 className={`text-xl font-semibold mb-3 ${currentTheme.textColor}`}>Experience</h2>
                  {userDetails.experience.length > 0 ? (
                    userDetails.experience.map((exp, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="font-medium">{exp.title}</h3>
                        <p className="text-gray-600">{exp.company} • {exp.duration}</p>
                        <p className="mt-1 text-gray-700">{exp.description}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 italic">Add your experience in the editor</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <h2 className={`text-xl font-semibold mb-3 ${currentTheme.textColor}`}>Education</h2>
                  {userDetails.education.length > 0 ? (
                    userDetails.education.map((edu, index) => (
                      <div key={index} className="mb-3">
                        <h3 className="font-medium">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.institution} • {edu.year}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 italic">Add your education in the editor</p>
                  )}
                </div>
                
                <div>
                  <h2 className={`text-xl font-semibold mb-3 ${currentTheme.textColor}`}>Skills</h2>
                  {userDetails.skills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {userDetails.skills.map((skill, index) => (
                        <span key={index} className={`${currentTheme.accentColor} px-3 py-1 rounded-full text-sm`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">Add your skills in the editor</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor;
