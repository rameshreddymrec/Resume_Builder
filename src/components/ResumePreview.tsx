
import React from 'react';
import { cn } from '@/lib/utils';

interface ResumePreviewProps {
  template: any;
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
  theme: string;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({
  template,
  userDetails,
  theme
}) => {
  const getThemeStyles = () => {
    switch (theme) {
      case 'classic':
        return {
          main: 'bg-white text-gray-800',
          header: 'border-b-2 border-gray-300 pb-4 mb-6',
          section: 'mb-6',
          sectionTitle: 'text-lg font-semibold border-b border-gray-200 pb-1 mb-3',
          accent: 'text-gray-600',
        };
      case 'modern':
        return {
          main: 'bg-gray-50 text-gray-900',
          header: 'bg-blue-600 text-white p-6 rounded-t-md mb-6',
          section: 'mb-6 bg-white p-4 rounded-md shadow-sm',
          sectionTitle: 'text-lg font-semibold text-blue-600 mb-3',
          accent: 'text-blue-600',
        };
      case 'professional':
        return {
          main: 'bg-gray-100 text-gray-800',
          header: 'border-b-2 border-gray-400 pb-4 mb-6',
          section: 'mb-6 bg-white p-4 rounded-md',
          sectionTitle: 'text-lg font-semibold border-l-4 border-gray-400 pl-2 mb-3',
          accent: 'text-gray-600',
        };
      case 'creative':
        return {
          main: 'bg-pink-50 text-pink-800',
          header: 'border-b-2 border-pink-200 pb-4 mb-6',
          section: 'mb-6',
          sectionTitle: 'text-lg font-semibold text-pink-600 border-b border-pink-100 pb-1 mb-3',
          accent: 'text-pink-600',
        };
      case 'minimal':
        return {
          main: 'bg-white text-gray-700',
          header: 'pb-4 mb-6',
          section: 'mb-6',
          sectionTitle: 'text-lg font-medium mb-3',
          accent: 'text-gray-500',
        };
      case 'bold':
        return {
          main: 'bg-indigo-50 text-indigo-900',
          header: 'bg-indigo-700 text-white p-6 mb-6',
          section: 'mb-6 bg-white p-4 rounded-md shadow-sm',
          sectionTitle: 'text-lg font-bold text-indigo-700 mb-3',
          accent: 'text-indigo-600',
        };
      case 'elegant':
        return {
          main: 'bg-amber-50 text-amber-900',
          header: 'border-b-2 border-amber-200 pb-4 mb-6',
          section: 'mb-6',
          sectionTitle: 'text-lg font-serif italic text-amber-800 mb-3',
          accent: 'text-amber-700',
        };
      case 'tech':
        return {
          main: 'bg-cyan-50 text-cyan-900',
          header: 'border-b-2 border-cyan-300 pb-4 mb-6',
          section: 'mb-6 bg-white p-4 rounded-md shadow-sm',
          sectionTitle: 'text-lg font-mono font-semibold text-cyan-700 border-l-4 border-cyan-300 pl-2 mb-3',
          accent: 'text-cyan-600 font-mono',
        };
      default:
        return {
          main: 'bg-white text-gray-800',
          header: 'border-b-2 border-gray-300 pb-4 mb-6',
          section: 'mb-6',
          sectionTitle: 'text-lg font-semibold border-b border-gray-200 pb-1 mb-3',
          accent: 'text-gray-600',
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <div className={cn('h-full', styles.main)}>
      <header className={styles.header}>
        <h1 className="text-3xl font-bold mb-2">
          {userDetails.name || 'Your Name'}
        </h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {userDetails.email && (
            <span className={styles.accent}>{userDetails.email}</span>
          )}
          {userDetails.phone && (
            <span className={styles.accent}>{userDetails.phone}</span>
          )}
          {userDetails.address && (
            <span className={styles.accent}>{userDetails.address}</span>
          )}
        </div>
      </header>

      {userDetails.summary && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Summary</h2>
          <p className="whitespace-pre-line">{userDetails.summary}</p>
        </section>
      )}

      {userDetails.experience && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className="whitespace-pre-line">{userDetails.experience}</div>
        </section>
      )}

      {userDetails.education && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className="whitespace-pre-line">{userDetails.education}</div>
        </section>
      )}

      {userDetails.skills && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className="whitespace-pre-line">{userDetails.skills}</div>
        </section>
      )}
    </div>
  );
};

export default ResumePreview;
