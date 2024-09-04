import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        'h-fll mx-auto max-w-screen-xl px-2.2 md:px-20',
        className
      )}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
