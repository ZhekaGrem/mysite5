import { DetailedHTMLProps, ReactNode, HTMLAttributes, FC } from 'react';
import { cn } from '@/shared/lib/utils';

export interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  id?: string;
  className?: string;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ id, children, className, ...props }): React.ReactElement => {
  return (
    <section
      id={id}
      className={cn('relative mx-auto flex max-w-7xl flex-col items-center overflow-hidden', className)}
      {...props}>
      {children}
    </section>
  );
};

export default Section;
