// High-performance LoadingSkeleton component
import styled, { keyframes } from 'styled-components'

// Skeleton animation
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`

// Base skeleton component
const SkeletonBase = styled.div<{
  width?: string
  height?: string
  borderRadius?: string
  className?: string
}>`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '1rem' }) => height};
  border-radius: ${({ borderRadius = '0.25rem' }) => borderRadius};
  display: block;
`

// Card skeleton
export const CardSkeleton = styled.div`
  background: linear-gradient(135deg, #f1e2bb 0%, #f0ede4 100%);
  border: 1px solid #8baa7a;
  border-radius: 1.25rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  width: 100%;
`

// Image skeleton
export const ImageSkeleton = styled(SkeletonBase)`
  width: 12rem;
  height: 12rem;
  border-radius: 0.75rem;
  margin: 0 auto 1rem;
`

// Text skeleton
export const TextSkeleton = styled(SkeletonBase)`
  height: 1rem;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

// Title skeleton
export const TitleSkeleton = styled(SkeletonBase)`
  height: 1.5rem;
  width: 80%;
  margin: 0 auto 1rem;
`

// Button skeleton
export const ButtonSkeleton = styled(SkeletonBase)`
  height: 2.5rem;
  width: 8rem;
  border-radius: 0.5rem;
  margin: 0 auto;
`

// LoadingSkeleton component
interface LoadingSkeletonProps {
  type: 'card' | 'image' | 'text' | 'button' | 'title'
  className?: string
  width?: string
  height?: string
  count?: number
}

export const LoadingSkeleton = ({ 
  type, 
  className, 
  width, 
  height, 
  count = 1 
}: LoadingSkeletonProps) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <CardSkeleton className={className}>
            <ImageSkeleton />
            <TitleSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton width="60%" />
            <ButtonSkeleton />
          </CardSkeleton>
        )
      
      case 'image':
        return (
          <ImageSkeleton 
            className={className}
            width={width}
            height={height}
          />
        )
      
      case 'text':
        return (
          <div className={className}>
            {Array.from({ length: count }).map((_, index) => (
              <TextSkeleton 
                key={index}
                width={width}
                height={height}
              />
            ))}
          </div>
        )
      
      case 'button':
        return (
          <ButtonSkeleton 
            className={className}
            width={width}
            height={height}
          />
        )
      
      case 'title':
        return (
          <TitleSkeleton 
            className={className}
            width={width}
            height={height}
          />
        )
      
      default:
        return (
          <SkeletonBase 
            className={className}
            width={width}
            height={height}
          />
        )
    }
  }

  return <>{renderSkeleton()}</>
}

// Grid skeleton for multiple cards
export const GridSkeleton = styled.div<{
  columns?: { mobile?: number; tablet?: number; desktop?: number }
  gap?: string
}>`
  display: grid;
  gap: ${({ gap = '1.5rem' }) => gap};
  grid-template-columns: repeat(${({ columns }) => columns?.mobile || 1}, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(${({ columns }) => columns?.tablet || 2}, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(${({ columns }) => columns?.desktop || 3}, 1fr);
  }
`

// Skeleton wrapper for entire sections
export const SkeletonWrapper = styled.div<{
  isLoading: boolean
  children: React.ReactNode
}>`
  position: relative;

  ${({ isLoading }) =>
    isLoading &&
    `
    & > * {
      opacity: 0.3;
      pointer-events: none;
    }
  `}
`

// Pulse animation for loading states
export const PulseSkeleton = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 0.25rem;
`
