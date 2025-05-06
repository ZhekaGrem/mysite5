'use client';

import { useEffect, useState } from 'react';
import Section from '@/shared/ui/Section';
import { H } from '@/shared/ui/Htag';
import { Button } from '@/shared/ui/button';
import { Download } from 'lucide-react';

const ResumePage = () => {
  const [mounted, setMounted] = useState(false);
  const pdfUrl = '/assets/cv/Yevhenii_Hrem_CV.pdf';

  useEffect(() => {
    setMounted(true);
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Yevhenii_Hrem_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!mounted) {
    return (
      <div className="flex h-[800px] items-center justify-center">
        <div className="-primary-light h-16 w-16 animate-spin rounded-full border border-4 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <Section className="py-8">
      {/* Top Header with Title and Download Button */}
      <div className="mb-8 flex items-center justify-between">
        <H h="h1">My Resume</H>
        <Button onClick={downloadResume} className="gap-2">
          <Download size={20} />
          Download PDF
        </Button>
      </div>

      {/* PDF Viewer */}
      <div className="flex flex-col items-center">
        <div className="mb-4 w-full max-w-4xl rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
          <iframe
            src={`${pdfUrl}#view=FitH`}
            className="h-[800px] w-full rounded-lg border-none"
            title="Resume PDF"
          />
        </div>

        {/* Bottom Download Button */}
        <Button onClick={downloadResume} size="lg" className="mt-8 gap-2">
          <Download size={20} />
          Download Resume
        </Button>
      </div>
    </Section>
  );
};

export default ResumePage;
