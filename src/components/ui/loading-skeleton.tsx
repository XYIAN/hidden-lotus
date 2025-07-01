import { Skeleton } from 'primereact/skeleton';

interface LoadingSkeletonProps {
  type: 'card' | 'image' | 'text';
  className?: string;
}

export function LoadingSkeleton({ type, className = '' }: LoadingSkeletonProps) {
  switch (type) {
    case 'card':
      return (
        <div className={`yoga-card p-4 ${className}`}>
          <div className="flex flex-column gap-3">
            <Skeleton className="w-16rem h-4rem" />
            <Skeleton className="w-12rem h-2rem" />
            <Skeleton className="w-16rem h-1rem" />
            <Skeleton className="w-14rem h-1rem" />
            <Skeleton className="w-8rem h-2rem" />
          </div>
        </div>
      );
    case 'image':
      return <Skeleton className={`w-full h-full ${className}`} />;
    case 'text':
      return <Skeleton className={`w-full h-1rem ${className}`} />;
    default:
      return <Skeleton className={className} />;
  }
}
