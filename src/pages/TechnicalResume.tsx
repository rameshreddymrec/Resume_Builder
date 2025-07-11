
import React from 'react';
import Navbar from '@/components/Navbar';
import ResumeTemplate from '@/components/ResumeTemplate';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const TechnicalResume = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-resume-indigo py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Resume Templates
          </h1>
          <p className="text-blue-100 text-lg max-w-3xl">
            Tailored resume templates for software engineers, data scientists, and tech professionals.
            Optimized for applicant tracking systems (ATS) at top tech companies.
          </p>
        </div>
      </section>
      
      {/* Filter Bar */}
      <div className="bg-white border-b py-4 sticky top-0 z-10">
        <div className="container mx-auto flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-between px-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              type="search" 
              placeholder="Search templates..." 
              className="pl-10"
            />
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">12</span> templates
            </div>
          </div>
        </div>
      </div>
      
      {/* Templates Section */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All Companies</TabsTrigger>
              <TabsTrigger value="google">Google</TabsTrigger>
              <TabsTrigger value="microsoft">Microsoft</TabsTrigger>
              <TabsTrigger value="apple">Apple</TabsTrigger>
              <TabsTrigger value="amazon">Amazon</TabsTrigger>
              <TabsTrigger value="other">Other Tech</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResumeTemplate 
                title="Software Engineer" 
                company="Google"
                description="Clean, structured template optimized for Google's hiring process with focus on technical projects and impact."
                imageSrc="https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-blue-50"
              />
              <ResumeTemplate 
                title="Data Scientist" 
                company="Microsoft"
                description="Analytical resume template that highlights data projects, technical skills, and quantifiable achievements."
                imageSrc="https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-indigo-50"
              />
              <ResumeTemplate 
                title="iOS Developer" 
                company="Apple"
                description="Clean, minimalist design highlighting mobile development expertise, relevant to Apple's design philosophy."
                imageSrc="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-gray-100"
                isPremium
              />
              <ResumeTemplate 
                title="Cloud Architect" 
                company="Amazon"
                description="Template focused on cloud infrastructure, system design, and scaling solutions for AWS environments."
                imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-orange-50"
              />
              <ResumeTemplate 
                title="Machine Learning Engineer" 
                company="Facebook"
                description="Template showcasing AI/ML projects, research contributions, and technical implementation skills."
                imageSrc="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-blue-100"
              />
              <ResumeTemplate 
                title="Full Stack Developer" 
                company="Netflix"
                description="Balanced template highlighting both frontend and backend expertise, with focus on scalable applications."
                imageSrc="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-red-50"
                isPremium
              />
            </TabsContent>
            
            <TabsContent value="google" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResumeTemplate 
                title="Software Engineer" 
                company="Google"
                description="Clean, structured template optimized for Google's hiring process with focus on technical projects and impact."
                imageSrc="https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-blue-50"
              />
              <ResumeTemplate 
                title="UX Engineer" 
                company="Google"
                description="Hybrid template showcasing both design thinking and technical implementation for Google's user experience roles."
                imageSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-blue-50"
                isPremium
              />
              <ResumeTemplate 
                title="Site Reliability Engineer" 
                company="Google"
                description="Template highlighting infrastructure management, system reliability, and technical troubleshooting."
                imageSrc="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-blue-50"
              />
            </TabsContent>
            
            <TabsContent value="microsoft" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResumeTemplate 
                title="Data Scientist" 
                company="Microsoft"
                description="Analytical resume template that highlights data projects, technical skills, and quantifiable achievements."
                imageSrc="https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-indigo-50"
              />
              <ResumeTemplate 
                title="Cloud Solutions Architect" 
                company="Microsoft"
                description="Template focused on Azure cloud architecture, enterprise solutions, and technical leadership."
                imageSrc="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-indigo-50"
                isPremium
              />
              <ResumeTemplate 
                title=".NET Developer" 
                company="Microsoft"
                description="Specialized template for .NET ecosystem developers with focus on C#, ASP.NET and Microsoft technologies."
                imageSrc="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-indigo-50"
              />
            </TabsContent>
            
            <TabsContent value="apple" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResumeTemplate 
                title="iOS Developer" 
                company="Apple"
                description="Clean, minimalist design highlighting mobile development expertise, relevant to Apple's design philosophy."
                imageSrc="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-gray-100"
                isPremium
              />
              <ResumeTemplate 
                title="UX Designer" 
                company="Apple"
                description="Elegant template focusing on human-centered design principles and beautiful user experiences."
                imageSrc="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-gray-100"
              />
              <ResumeTemplate 
                title="Swift Developer" 
                company="Apple"
                description="Code-focused resume template highlighting Swift expertise, app development, and performance optimization."
                imageSrc="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-gray-100"
              />
            </TabsContent>
            
            <TabsContent value="amazon" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResumeTemplate 
                title="Cloud Architect" 
                company="Amazon"
                description="Template focused on cloud infrastructure, system design, and scaling solutions for AWS environments."
                imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-orange-50"
              />
              <ResumeTemplate 
                title="DevOps Engineer" 
                company="Amazon"
                description="Template highlighting CI/CD pipelines, infrastructure as code, and operational excellence."
                imageSrc="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-orange-50"
                isPremium
              />
              <ResumeTemplate 
                title="Solutions Architect" 
                company="Amazon"
                description="Leadership-focused template highlighting system design, customer solutions, and business impact."
                imageSrc="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-orange-50"
              />
            </TabsContent>
            
            <TabsContent value="other" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResumeTemplate 
                title="Machine Learning Engineer" 
                company="Facebook"
                description="Template showcasing AI/ML projects, research contributions, and technical implementation skills."
                imageSrc="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-blue-100"
              />
              <ResumeTemplate 
                title="Full Stack Developer" 
                company="Netflix"
                description="Balanced template highlighting both frontend and backend expertise, with focus on scalable applications."
                imageSrc="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-red-50"
                isPremium
              />
              <ResumeTemplate 
                title="Frontend Engineer" 
                company="Spotify"
                description="Design-focused developer template highlighting UI/UX skills and interactive web applications."
                imageSrc="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-green-50"
              />
              <ResumeTemplate 
                title="Backend Engineer" 
                company="LinkedIn"
                description="Server-side focused template highlighting scalable architectures, API design, and database optimization."
                imageSrc="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-blue-50"
              />
              <ResumeTemplate 
                title="Security Engineer" 
                company="Cisco"
                description="Security-focused template highlighting threat detection, vulnerability management, and secure architectures."
                imageSrc="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-cyan-50"
                isPremium
              />
              <ResumeTemplate 
                title="Blockchain Developer" 
                company="Coinbase"
                description="Specialized template for blockchain and web3 developers highlighting smart contracts and decentralized applications."
                imageSrc="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-indigo-50"
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 DualResume Genius. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TechnicalResume;
