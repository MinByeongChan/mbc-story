import type { HTMLAttributes, ReactNode } from 'react';

import { Card } from '@gocheok/components/presenter/card/Card';
import emptyStateIllustration from '@gocheok/components/feedback/emptyState/empty-state-illustration.svg';
import { twMerge } from 'tailwind-merge';

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  action?: ReactNode;
}

export function EmptyState({
  className,
  title,
  description,
  imageSrc = emptyStateIllustration,
  imageAlt = '',
  action,
  ...props
}: EmptyStateProps) {
  return (
    <Card className={twMerge('px-6 py-10', className)} {...props}>
      <div className="flex flex-col items-center text-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          aria-hidden={imageAlt === '' ? 'true' : undefined}
          className="h-40 w-60 object-contain"
        />
        <h3 className="mt-3 text-xl font-semibold text-(--color-foreground)">{title}</h3>
        {description ? (
          <p className="mt-2 max-w-md text-sm leading-6 text-(--color-muted-foreground)">
            {description}
          </p>
        ) : null}
        {action ? <div className="mt-6">{action}</div> : null}
      </div>
    </Card>
  );
}
