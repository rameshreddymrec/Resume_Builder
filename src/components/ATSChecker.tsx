
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Radar, FileSearch, CheckCheck, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface ATSCheckerProps {
  resumeContent: {
    name: string;
    email: string;
    phone: string;
    address: string;
    summary: string;
    experience: string;
    education: string;
    skills: string;
  };
}

interface CheckResult {
  score: number;
  feedback: {
    positive: string[];
    improvements: string[];
  };
  keywords: {
    found: string[];
    missing: string[];
  };
}

const ATSChecker: React.FC<ATSCheckerProps> = ({ resumeContent }) => {
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);
  const { toast } = useToast();

  const runATSCheck = () => {
    setIsChecking(true);
    
    // In a real application, this would call an API
    // For demonstration, we'll simulate the check with a timeout
    setTimeout(() => {
      const allContent = [
        resumeContent.name,
        resumeContent.email,
        resumeContent.phone,
        resumeContent.address,
        resumeContent.summary,
        resumeContent.experience,
        resumeContent.education,
        resumeContent.skills
      ].join(' ').toLowerCase();
      
      // Basic analysis
      const hasContactInfo = resumeContent.email && resumeContent.phone;
      const hasSummary = resumeContent.summary.length > 100;
      const hasExperience = resumeContent.experience.length > 200;
      const hasSkills = resumeContent.skills.length > 50;
      const hasEducation = resumeContent.education.length > 50;
      
      // Sample keywords to check for
      const commonKeywords = ['experienced', 'team', 'project', 'management', 'leadership', 
        'development', 'communication', 'problem-solving', 'analytics', 'strategy', 
        'results', 'collaboration', 'innovative', 'solution', 'professional'];
      
      const foundKeywords = commonKeywords.filter(word => allContent.includes(word));
      const missingKeywords = commonKeywords.filter(word => !allContent.includes(word));
      
      // Calculate score (0-100)
      let score = 0;
      if (hasContactInfo) score += 20;
      if (hasSummary) score += 15;
      if (hasExperience) score += 25;
      if (hasSkills) score += 20;
      if (hasEducation) score += 10;
      score += Math.min(10, foundKeywords.length * 1); // Up to 10 points for keywords
      
      // Generate feedback
      const positive = [];
      const improvements = [];
      
      if (hasContactInfo) positive.push('Contact information is present and clear');
      else improvements.push('Add complete contact information for better ATS recognition');
      
      if (hasSummary) positive.push('Professional summary is well-developed');
      else improvements.push('Expand your professional summary to highlight your qualifications');
      
      if (hasExperience) positive.push('Work experience section is detailed');
      else improvements.push('Add more detail to your work experience, including achievements and responsibilities');
      
      if (hasSkills) positive.push('Skills section includes key competencies');
      else improvements.push('Expand your skills section with relevant technical and soft skills');
      
      if (hasEducation) positive.push('Education details are properly formatted');
      else improvements.push('Include more details in your education section');
      
      if (foundKeywords.length > 5) positive.push('Resume includes several industry-relevant keywords');
      else improvements.push('Add more industry-specific keywords to improve ATS recognition');
      
      setResult({
        score,
        feedback: {
          positive,
          improvements
        },
        keywords: {
          found: foundKeywords,
          missing: missingKeywords.slice(0, 5) // Show only first 5 missing keywords
        }
      });
      
      setIsChecking(false);
      
      toast({
        title: "ATS Check Complete",
        description: `Your resume scored ${score}/100 in our ATS analysis.`,
      });
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-green-600';
    if (score >= 60) return 'bg-amber-600';
    return 'bg-red-600';
  };

  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Radar className="h-5 w-5" />
          ATS Resume Checker
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!result && !isChecking && (
          <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
            <FileSearch className="h-16 w-16 text-muted-foreground" />
            <h3 className="text-lg font-medium">Check your resume against ATS systems</h3>
            <p className="text-sm text-muted-foreground">
              See how well your resume might perform with Applicant Tracking Systems used by most employers.
            </p>
            <Button onClick={runATSCheck} className="mt-4 shadow-sm hover:shadow-md transition-shadow">
              Run ATS Check
            </Button>
          </div>
        )}

        {isChecking && (
          <div className="p-6 space-y-4 text-center">
            <div className="animate-pulse flex flex-col items-center justify-center">
              <Radar className="h-12 w-12 text-primary" />
              <h3 className="text-lg font-medium mt-4">Analyzing your resume...</h3>
            </div>
            <Progress value={50} className="w-full" />
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-muted/10 shadow-inner">
              <span className="text-sm font-medium text-muted-foreground">ATS Compatibility Score</span>
              <span className={`text-4xl font-bold ${getScoreColor(result.score)}`}>
                {result.score}/100
              </span>
              
              <div className="w-full mt-4">
                <Progress 
                  value={result.score} 
                  className={`h-2 ${getProgressColor(result.score)}`}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium flex items-center gap-2 mb-2">
                  <CheckCheck className="h-4 w-4 text-green-600" />
                  Strengths
                </h3>
                <ul className="space-y-1">
                  {result.feedback.positive.map((item, i) => (
                    <li key={i} className="text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  Suggested Improvements
                </h3>
                <ul className="space-y-1">
                  {result.feedback.improvements.map((item, i) => (
                    <li key={i} className="text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium mb-2">Keywords</h3>
                <div className="mb-2">
                  <span className="text-xs text-muted-foreground">Found:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {result.keywords.found.map((keyword, i) => (
                      <Badge key={i} variant="outline" className="bg-green-50">
                        {keyword}
                      </Badge>
                    ))}
                    {result.keywords.found.length === 0 && (
                      <span className="text-xs italic text-muted-foreground">No common keywords found</span>
                    )}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Consider adding:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {result.keywords.missing.map((keyword, i) => (
                      <Badge key={i} variant="outline" className="bg-amber-50">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <Button onClick={runATSCheck} variant="outline" size="sm" className="w-full shadow-sm hover:shadow-md transition-shadow">
              Re-analyze Resume
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ATSChecker;
