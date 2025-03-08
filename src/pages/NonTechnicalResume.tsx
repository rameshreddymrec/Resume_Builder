
import React from 'react';
import Navbar from '@/components/Navbar';
import ResumeTemplate from '@/components/ResumeTemplate';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NonTechnicalResume = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-resume-purple py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Creative Resume Templates
          </h1>
          <p className="text-purple-100 text-lg max-w-3xl">
            Beautifully designed resume templates for designers, marketers, writers, and other creative professionals.
            Stand out with layouts that showcase your portfolio and unique skills.
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
              <TabsTrigger value="all">All Fields</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
              <TabsTrigger value="creative">Creative Arts</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResumeTemplate 
                title="Graphic Designer" 
                description="Creative layout with portfolio highlights and visual elements to showcase your design skills."
                imageSrc="https://images.unsplash.com/photo-1561398271-7d615cb6e4e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-pink-50"
              />
              <ResumeTemplate 
                title="Marketing Manager" 
                description="Strategic resume layout highlighting campaign results, brand management, and leadership skills."
                imageSrc="https://images.unsplash.com/photo-1553484771-47a3dae7f13e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-green-50"
              />
              <ResumeTemplate 
                title="Interior Designer" 
                description="Visually impressive template with space for project showcases and client testimonials."
                imageSrc="https://images.unsplash.com/photo-1618220179428-22790b485390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-purple-50"
                isPremium
              />
              <ResumeTemplate 
                title="Content Writer" 
                description="Clean, text-focused layout that highlights your writing samples, tone versatility, and audience reach."
                imageSrc="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-blue-50"
              />
              <ResumeTemplate 
                title="Project Manager" 
                description="Structured template highlighting organizational skills, timeline management, and team leadership."
                imageSrc="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-gray-100"
              />
              <ResumeTemplate 
                title="Fashion Designer" 
                description="Bold, artistic layout with visual components to showcase your design aesthetic and portfolio."
                imageSrc="https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-yellow-50"
                isPremium
              />
            </TabsContent>
            
            <TabsContent value="design" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResumeTemplate 
                title="Graphic Designer" 
                description="Creative layout with portfolio highlights and visual elements to showcase your design skills."
                imageSrc="https://images.unsplash.com/photo-1561398271-7d615cb6e4e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-pink-50"
              />
              <ResumeTemplate 
                title="UI/UX Designer" 
                description="User-centered template highlighting your design process, user research, and interactive prototypes."
                imageSrc="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-indigo-50"
                isPremium
              />
              <ResumeTemplate 
                title="Product Designer" 
                description="Template focusing on product thinking, user experience, and measurable design outcomes."
                imageSrc="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                bgColor="bg-blue-50"
              />
            </TabsContent>
            
            {/* Similar content for other tabs would go here */}
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

export default NonTechnicalResume;
