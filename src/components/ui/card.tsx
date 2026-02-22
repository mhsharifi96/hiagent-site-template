import * as React from 'react';
import {cn} from '@/lib/utils';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => (
    <div
      ref={ref}
      className={cn(
        'glass-card group relative p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_22px_70px_-30px_rgba(15,23,42,0.6)]',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({className, ...props}, ref) => <h3 ref={ref} className={cn('text-xl font-semibold', className)} {...props} />
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({className, ...props}, ref) => <p ref={ref} className={cn('mt-2 text-sm text-muted-foreground', className)} {...props} />
);
CardDescription.displayName = 'CardDescription';

export {Card, CardTitle, CardDescription};
