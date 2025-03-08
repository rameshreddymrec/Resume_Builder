
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Plus, X } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface UserDetailsFormProps {
  userDetails: {
    name: string;
    email: string;
    phone: string;
    address: string;
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: string[];
  };
  onChange: (newDetails: any) => void;
}

const UserDetailsForm: React.FC<UserDetailsFormProps> = ({ userDetails, onChange }) => {
  const [newSkill, setNewSkill] = useState('');
  const [newExperience, setNewExperience] = useState<Experience>({
    title: '',
    company: '',
    duration: '',
    description: ''
  });
  const [newEducation, setNewEducation] = useState<Education>({
    degree: '',
    institution: '',
    year: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ ...userDetails, [name]: value });
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      onChange({ ...userDetails, skills: [...userDetails.skills, newSkill.trim()] });
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    const updatedSkills = [...userDetails.skills];
    updatedSkills.splice(index, 1);
    onChange({ ...userDetails, skills: updatedSkills });
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  const addExperience = () => {
    if (newExperience.title && newExperience.company) {
      onChange({ 
        ...userDetails, 
        experience: [...userDetails.experience, newExperience] 
      });
      setNewExperience({
        title: '',
        company: '',
        duration: '',
        description: ''
      });
    }
  };

  const removeExperience = (index: number) => {
    const updatedExperience = [...userDetails.experience];
    updatedExperience.splice(index, 1);
    onChange({ ...userDetails, experience: updatedExperience });
  };

  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEducation({ ...newEducation, [name]: value });
  };

  const addEducation = () => {
    if (newEducation.degree && newEducation.institution) {
      onChange({ 
        ...userDetails, 
        education: [...userDetails.education, newEducation] 
      });
      setNewEducation({
        degree: '',
        institution: '',
        year: ''
      });
    }
  };

  const removeEducation = (index: number) => {
    const updatedEducation = [...userDetails.education];
    updatedEducation.splice(index, 1);
    onChange({ ...userDetails, education: updatedEducation });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-medium">Personal Information</h3>
        <Input 
          placeholder="Full Name" 
          name="name" 
          value={userDetails.name} 
          onChange={handleInputChange}
        />
        <Input 
          placeholder="Email" 
          name="email" 
          type="email" 
          value={userDetails.email} 
          onChange={handleInputChange}
        />
        <Input 
          placeholder="Phone" 
          name="phone" 
          value={userDetails.phone} 
          onChange={handleInputChange}
        />
        <Input 
          placeholder="Address" 
          name="address" 
          value={userDetails.address} 
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-3">
        <h3 className="font-medium">Professional Summary</h3>
        <Textarea 
          placeholder="Write a brief professional summary" 
          name="summary" 
          value={userDetails.summary} 
          onChange={handleInputChange}
          rows={4}
        />
      </div>

      <div className="space-y-3">
        <h3 className="font-medium">Experience</h3>
        {userDetails.experience.map((exp, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-md relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 h-6 w-6 p-0"
              onClick={() => removeExperience(index)}
            >
              <X className="h-4 w-4" />
            </Button>
            <p className="font-medium">{exp.title}</p>
            <p className="text-sm text-gray-600">{exp.company} • {exp.duration}</p>
            <p className="text-sm mt-1">{exp.description}</p>
          </div>
        ))}
        
        <div className="space-y-2 border-t pt-3">
          <Input 
            placeholder="Job Title" 
            name="title" 
            value={newExperience.title} 
            onChange={handleExperienceChange}
          />
          <Input 
            placeholder="Company" 
            name="company" 
            value={newExperience.company} 
            onChange={handleExperienceChange}
          />
          <Input 
            placeholder="Duration (e.g., Jan 2020 - Present)" 
            name="duration" 
            value={newExperience.duration} 
            onChange={handleExperienceChange}
          />
          <Textarea 
            placeholder="Description" 
            name="description" 
            value={newExperience.description} 
            onChange={handleExperienceChange}
            rows={3}
          />
          <Button 
            type="button" 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={addExperience}
          >
            <Plus className="h-4 w-4 mr-2" /> Add Experience
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-medium">Education</h3>
        {userDetails.education.map((edu, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-md relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 h-6 w-6 p-0"
              onClick={() => removeEducation(index)}
            >
              <X className="h-4 w-4" />
            </Button>
            <p className="font-medium">{edu.degree}</p>
            <p className="text-sm text-gray-600">{edu.institution} • {edu.year}</p>
          </div>
        ))}
        
        <div className="space-y-2 border-t pt-3">
          <Input 
            placeholder="Degree" 
            name="degree" 
            value={newEducation.degree} 
            onChange={handleEducationChange}
          />
          <Input 
            placeholder="Institution" 
            name="institution" 
            value={newEducation.institution} 
            onChange={handleEducationChange}
          />
          <Input 
            placeholder="Year" 
            name="year" 
            value={newEducation.year} 
            onChange={handleEducationChange}
          />
          <Button 
            type="button" 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={addEducation}
          >
            <Plus className="h-4 w-4 mr-2" /> Add Education
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-medium">Skills</h3>
        {userDetails.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {userDetails.skills.map((skill, index) => (
              <div key={index} className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                {skill}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-5 w-5 p-0 ml-1"
                  onClick={() => removeSkill(index)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <Input 
            placeholder="Add a skill" 
            value={newSkill} 
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addSkill();
              }
            }}
          />
          <Button type="button" onClick={addSkill}>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsForm;
