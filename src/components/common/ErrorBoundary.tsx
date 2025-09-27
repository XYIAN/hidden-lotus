// Error Boundary component for graceful error handling
import React, { Component, ErrorInfo, ReactNode } from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'
import { Card, CardBody } from '../styled/Card'
import { Stack } from '../styled/Layout'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

// Error display component
const ErrorContainer = styled(Card)`
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.error};
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
`

const ErrorIcon = styled.div`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 1rem;
`

const ErrorTitle = styled.h2`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: 1rem;
`

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.earthBrown};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const ErrorDetails = styled.details`
  text-align: left;
  margin: 1.5rem 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.sageGreen200};
`

const ErrorSummary = styled.summary`
  cursor: pointer;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.earthBrown};
  margin-bottom: 0.5rem;
`

const ErrorStack = styled.pre`
  font-family: ${({ theme }) => theme.typography.fontFamily.mono.join(', ')};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.earthBrown};
  background: rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    
    this.setState({
      error,
      errorInfo,
    })

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Log to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      // TODO: Integrate with error reporting service (Sentry, LogRocket, etc.)
      console.error('Production error:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
      })
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
      return (
        <ErrorContainer>
          <CardBody>
            <Stack spacing="lg" align="center">
              <ErrorIcon>⚠️</ErrorIcon>
              
              <div>
                <ErrorTitle>Oops! Something went wrong</ErrorTitle>
                <ErrorMessage>
                  We're sorry, but something unexpected happened. 
                  Please try refreshing the page or contact support if the problem persists.
                </ErrorMessage>
              </div>

              {this.state.error && (
                <ErrorDetails>
                  <ErrorSummary>Technical Details</ErrorSummary>
                  <div>
                    <p><strong>Error:</strong> {this.state.error.message}</p>
                    {this.state.error.stack && (
                      <ErrorStack>{this.state.error.stack}</ErrorStack>
                    )}
                    {this.state.errorInfo?.componentStack && (
                      <div>
                        <p><strong>Component Stack:</strong></p>
                        <ErrorStack>{this.state.errorInfo.componentStack}</ErrorStack>
                      </div>
                    )}
                  </div>
                </ErrorDetails>
              )}

              <ButtonGroup>
                <Button variant="primary" onClick={this.handleRetry}>
                  Try Again
                </Button>
                <Button variant="outline" onClick={this.handleReload}>
                  Reload Page
                </Button>
              </ButtonGroup>
            </Stack>
          </CardBody>
        </ErrorContainer>
      )
    }

    return this.props.children
  }
}

// Hook for functional components to trigger error boundary
export const useErrorHandler = () => {
  return (error: Error, errorInfo?: ErrorInfo) => {
    // This will be caught by the nearest ErrorBoundary
    throw error
  }
}

// Higher-order component for wrapping components with error boundary
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  )

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
  
  return WrappedComponent
}

// Error fallback component for specific error types
export const ErrorFallback = ({ 
  error, 
  resetError 
}: { 
  error: Error
  resetError: () => void 
}) => (
  <ErrorContainer>
    <CardBody>
      <Stack spacing="lg" align="center">
        <ErrorIcon>🚫</ErrorIcon>
        <div>
          <ErrorTitle>Something went wrong</ErrorTitle>
          <ErrorMessage>{error.message}</ErrorMessage>
        </div>
        <Button variant="primary" onClick={resetError}>
          Try Again
        </Button>
      </Stack>
    </CardBody>
  </ErrorContainer>
)
