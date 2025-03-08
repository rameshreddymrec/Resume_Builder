
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Code, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-resume-indigo" />
          <span className="text-xl font-semibold text-resume-indigo">DualResume Genius</span>
        </Link>
        <div className="flex space-x-6">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/technical">
            <Code className="h-4 w-4 mr-1" />
            Technical
          </NavLink>
          <NavLink to="/non-technical">
            <Palette className="h-4 w-4 mr-1" />
            Non-Technical
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, exact, children }: NavLinkProps) => {
  const isActive = window.location.pathname === to || 
                  (!exact && window.location.pathname.startsWith(to));

  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center text-sm font-medium px-2 py-1 rounded-md transition-colors",
        isActive 
          ? "text-resume-indigo bg-blue-50" 
          : "text-gray-600 hover:text-resume-indigo hover:bg-blue-50"
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
