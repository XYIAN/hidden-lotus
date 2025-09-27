// High-performance styled Card components
import styled, { css } from 'styled-components'
import { commonStyles, keyframes } from '@/lib/styled-components'

// Base card component
export const Card = styled.div<{
  variant?: 'default' | 'elevated' | 'compact' | 'horizontal'
  hover?: boolean
}>`
  ${commonStyles.cardBase}
  position: relative;
  overflow: hidden;

  ${({ variant }) => {
    switch (variant) {
      case 'elevated':
        return css`
          box-shadow: ${({ theme }) => theme.shadows.lg};
          &:hover {
            box-shadow: 0 20px 40px rgba(107, 142, 90, 0.2);
          }
        `
      case 'compact':
        return css`
          .card-header,
          .card-body,
          .card-footer {
            padding: ${({ theme }) => theme.spacing.md};
          }
          .card-image {
            height: 150px;
          }
        `
      case 'horizontal':
        return css`
          @media (min-width: 768px) {
            display: grid;
            grid-template-columns: 200px 1fr;
            grid-template-rows: 1fr;
            .card-image {
              border-radius: ${({ theme }) => theme.borderRadius.lg} 0 0 ${({ theme }) => theme.borderRadius.lg};
              height: 100%;
            }
          }
        `
      default:
        return ''
    }
  }}

  ${({ hover }) =>
    hover &&
    css`
      cursor: pointer;
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(107, 142, 90, 0.15);
      }
    `}
`

// Card header
export const CardHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.sageGreen200};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.lightTan} 0%, #f0ede4 100%);

  .card-title {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin: 0;
    color: ${({ theme }) => theme.colors.primaryGreen};
  }

  .card-subtitle {
    color: ${({ theme }) => theme.colors.earthBrown};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
`

// Card body
export const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
`

// Card footer
export const CardFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.sageGreen200};
  background-color: rgba(241, 226, 187, 0.3);
  ${commonStyles.flexBetween}
`

// Card image
export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0 0;
  background-color: ${({ theme }) => theme.colors.lightTan};
`

// Yoga card specific styling
export const YogaCard = styled(Card)`
  text-align: center;
  min-height: 0;

  p {
    line-height: 1.4;
    margin-bottom: 0.75rem;
  }

  .p-tag {
    margin-bottom: 0.5rem;
  }
`

// Team card specific styling
export const TeamCard = styled(Card)`
  text-align: center;
  height: 500px;
  width: 320px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};

  .team-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto ${({ theme }) => theme.spacing.md};
    object-fit: cover;
    border: 3px solid ${({ theme }) => theme.colors.sageGreen200};
  }

  .team-name {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.primaryGreen};
  }

  .team-role {
    color: ${({ theme }) => theme.colors.earthBrown};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  .team-bio {
    color: ${({ theme }) => theme.colors.earthBrown};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`

// Story card specific styling
export const StoryCard = styled(Card)`
  .story-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0 0;
  }

  .story-title {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.primaryGreen};
  }

  .story-excerpt {
    color: ${({ theme }) => theme.colors.earthBrown};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  .story-meta {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.earthBrown};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    margin-top: auto;
  }
`

// Class card specific styling
export const ClassCard = styled(Card)`
  .class-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0 0;
  }

  .class-title {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.primaryGreen};
  }

  .class-description {
    color: ${({ theme }) => theme.colors.earthBrown};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  .class-meta {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.earthBrown};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    margin-top: auto;
  }
`

// Animated card with stagger effect
export const AnimatedCard = styled(Card)<{ delay?: number }>`
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;
  animation-delay: ${({ delay = 0 }) => delay}s;
`

// Add keyframes to the component
AnimatedCard.defaultProps = {
  style: {
    ...keyframes.fadeIn,
  },
}
