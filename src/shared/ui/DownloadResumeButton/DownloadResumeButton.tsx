'use client';
import { Button } from '../button';
import { cn } from '@/shared//lib/utils';
import { DownloadResumeButtonProps } from '@/shared/types/index.types';

const pdfUrl = '/assets/cv/Yevhenii_Hrem_CV.pdf';
const downloadResume = () => {
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Yevhenii_Hrem_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DownloadResumeButton = ({ children, variant, className, ...props }: DownloadResumeButtonProps) => {
  return (
    <Button className={cn(className)} variant={variant} onClick={downloadResume} {...props}>
      {children}
    </Button>
  );
};

export default DownloadResumeButton;
