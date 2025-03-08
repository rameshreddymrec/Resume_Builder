
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface UserDetailsFormProps {
  userDetails: {
    name: string;
    email: string;
    phone: string;
    address: string;
    summary: string;
    experience: string;
    education: string;
    skills: string;
  };
  onUpdate: (newDetails: any) => void;
}

const UserDetailsForm: React.FC<UserDetailsFormProps> = ({ 
  userDetails, 
  onUpdate 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onUpdate({
      ...userDetails,
      [name]: value
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={userDetails.email}
          onChange={handleChange}
          placeholder="john.doe@example.com"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          value={userDetails.phone}
          onChange={handleChange}
          placeholder="(123) 456-7890"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          value={userDetails.address}
          onChange={handleChange}
          placeholder="San Francisco, CA"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          name="summary"
          value={userDetails.summary}
          onChange={handleChange}
          placeholder="Briefly describe your professional background and goals..."
          className="mt-1 min-h-[100px]"
        />
      </div>
      
      <div>
        <Label htmlFor="experience">Work Experience</Label>
        <Textarea
          id="experience"
          name="experience"
          value={userDetails.experience}
          onChange={handleChange}
          placeholder="List your work experience..."
          className="mt-1 min-h-[150px]"
        />
      </div>
      
      <div>
        <Label htmlFor="education">Education</Label>
        <Textarea
          id="education"
          name="education"
          value={userDetails.education}
          onChange={handleChange}
          placeholder="List your educational background..."
          className="mt-1 min-h-[100px]"
        />
      </div>
      
      <div>
        <Label htmlFor="skills">Skills</Label>
        <Textarea
          id="skills"
          name="skills"
          value={userDetails.skills}
          onChange={handleChange}
          placeholder="List your key skills..."
          className="mt-1 min-h-[100px]"
        />
      </div>
    </div>
  );
};

export default UserDetailsForm;
