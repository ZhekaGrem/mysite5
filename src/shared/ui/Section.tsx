import { DetailedHTMLProps, ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/shared/lib/utils';


export interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  id?: string;
  className?: string;
  children: ReactNode;
}


const Section:React.FC<SectionProps> = ({id,children,className,...props}): React.ReactElement => {
  return (
    <section id={id} className={cn('max-w-7xl relative flex flex-col items-center overflow-hidden mx-auto',className)} {...props}>
        {children}
    </section>
  )
}

export default Section