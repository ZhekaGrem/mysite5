'use client';

import { useEffect, useState } from 'react';
import Section from '@/shared/ui/Section';
import { H } from '@/shared/ui/Htag';
import DownloadResumeButton from '@/shared/ui/DownloadResumeButton/DownloadResumeButton';
import { Download } from 'lucide-react';



const ResumePage = () => {
  const [mounted, setMounted] = useState(false);

  const pdfUrl = '/assets/cv/Yevhenii_Hrem_CV.pdf';
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-[800px] items-center justify-center">
        <div className="-primary-light h-16 w-16 animate-spin rounded-full border-t-transparent"></div>
      </div>
    );
  }

  return (
    <Section className="py-8">
      {/* Top Header with Title and Download Button */}
      <div className="mb-8 flex flex-col items-center">
        <H h="h1">My Resume</H>
        <DownloadResumeButton variant="ghost" className="mt-5 gap-2">
          <Download size={20} />
          Download CV
        </DownloadResumeButton>
      </div>

      {/* PDF Viewer */}
      <div className="flex w-full max-w-4xl flex-col items-center">
        <div className="mb-4 w-full bg-gray-100 p-4 dark:bg-gray-800">
          <iframe src={`${pdfUrl}#view=FitH`} className="h-[800px] w-full border-none" title="Resume PDF" />
        </div>

        {/* Bottom Download Button */}
        <DownloadResumeButton variant="btn_primary_outline" className="mt-5 gap-2">
          Download Resume
          <Download size={20} />
        </DownloadResumeButton>
      </div>
    </Section>
  );
};

export default ResumePage;
