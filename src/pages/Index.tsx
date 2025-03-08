
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Palette, ArrowRight, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Create Your Perfect Resume<br />
                <span className="text-resume-indigo">For Any Career Path</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're in tech or a creative field, we have templates designed 
                specifically for your industry to help you stand out.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button asChild className="bg-resume-indigo hover:bg-resume-indigo/90 text-white px-6 py-5">
                  <Link to="/technical">
                    <Code className="mr-2 h-5 w-5" />
                    Technical Resumes
                  </Link>
                </Button>
                <Button asChild variant="outline" className="px-6 py-5">
                  <Link to="/non-technical">
                    <Palette className="mr-2 h-5 w-5" />
                    Non-Technical Resumes
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Resume example" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your Career Path
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Card */}
            <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-full bg-resume-blue flex items-center justify-center mb-5">
                <Code className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Technical Resumes
              </h3>
              <p className="text-gray-600 mb-6">
                Specialized templates for software engineers, data scientists, 
                IT professionals, and other technical roles at top companies like 
                Google, Microsoft, and Apple.
              </p>
              <ul className="space-y-2 mb-6">
                <Feature text="ATS-optimized for tech recruiters" />
                <Feature text="Highlight technical skills effectively" />
                <Feature text="Company-specific formatting options" />
              </ul>
              <Button asChild variant="default" className="bg-resume-blue hover:bg-resume-blue/90 w-full justify-between">
                <Link to="/technical">
                  Browse Technical Templates
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            {/* Non-Technical Card */}
            <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-full bg-resume-purple flex items-center justify-center mb-5">
                <Palette className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Non-Technical Resumes
              </h3>
              <p className="text-gray-600 mb-6">
                Creative templates for designers, writers, marketers, 
                managers, and other non-technical professionals that highlight 
                your unique skills and experiences.
              </p>
              <ul className="space-y-2 mb-6">
                <Feature text="Stand out with creative layouts" />
                <Feature text="Showcase your portfolio effectively" />
                <Feature text="Flexible sections for various experiences" />
              </ul>
              <Button asChild variant="default" className="bg-resume-purple hover:bg-resume-purple/90 w-full justify-between">
                <Link to="/non-technical">
                  Browse Creative Templates
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Trusted by Professionals
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial 
              quote="This dual approach helped me tailor my technical resume perfectly for my software engineer application at Google."
              name="Sarah J."
              role="Software Engineer"
            />
            <Testimonial 
              quote="The creative templates helped my design portfolio stand out when applying for art director positions."
              name="Mark T."
              role="Art Director"
            />
            <Testimonial 
              quote="I love how I could switch between technical and creative formats as I explored different career paths."
              name="Jamie L."
              role="Product Manager"
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FileText className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">DualResume Genius</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2023 DualResume Genius. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature component
const Feature = ({ text }: { text: string }) => {
  return (
    <li className="flex items-center text-gray-600">
      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-3 w-3 text-green-600" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      {text}
    </li>
  );
};

// Testimonial component
const Testimonial = ({ quote, name, role }: { quote: string; name: string; role: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <svg 
        className="h-8 w-8 text-gray-300 mb-4 mx-auto" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-600 mb-4">{quote}</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default Index;
