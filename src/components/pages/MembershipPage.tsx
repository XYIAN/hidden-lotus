// Optimized Membership Page with styled-components
'use client'

import React, { memo } from 'react'
import styled from 'styled-components'
import { TabView, TabPanel } from 'primereact/tabview'
import { Tag } from 'primereact/tag'
import { Button } from '../styled/Button'
import { Card, CardBody } from '../styled/Card'
import { Container, Grid, Stack, Section } from '../styled/Layout'
import { HeroSection } from '../common/hero-section'
import { ErrorBoundary } from '../common/ErrorBoundary'

// Styled components for membership page
const MembershipContainer = styled(Container)`
  max-width: 6xl;
  margin: 0 auto;
  padding: 1rem;
`

const MembershipCard = styled(Card)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.sageGreen200};
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(107, 142, 90, 0.1);
`

const TabContainer = styled.div`
  .p-tabview {
    .p-tabview-nav {
      border-bottom: 2px solid ${({ theme }) => theme.colors.sageGreen200};
      margin-bottom: 2rem;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 12px 12px 0 0;
      padding: 0.5rem;
      transition: all 0.3s ease;

      .p-tabview-nav-link {
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.colors.earthBrown};
        font-weight: 500;
        padding: 1rem 1.5rem;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 8px;
        margin: 0 0.25rem;
        transform: translateY(0);

        &:hover {
          background: ${({ theme }) => theme.colors.sageGreen200};
          color: ${({ theme }) => theme.colors.primaryGreen};
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(107, 142, 90, 0.15);
        }

        &.p-highlight {
          background: ${({ theme }) => theme.colors.sageGreen600};
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(107, 142, 90, 0.2);
        }
      }
    }

    .p-tabview-panels {
      padding: 2rem;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 0 0 12px 12px;
      animation: fadeIn 0.6s ease-out;
    }
  }
`

const ProgramCard = styled(Card)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.sageGreen200};
  border-radius: 1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(107, 142, 90, 0.1);
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 40px rgba(107, 142, 90, 0.25);
    border-color: ${({ theme }) => theme.colors.softSage};
  }

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
  &:nth-child(6) { animation-delay: 0.6s; }
`

const PricingCard = styled(Card)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95),
    rgba(237, 232, 224, 0.9)
  );
  backdrop-filter: blur(10px);
  border: 2px solid ${({ theme }) => theme.colors.sageGreen300};
  border-radius: 1.25rem;
  box-shadow: 0 8px 32px rgba(107, 142, 90, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 2rem;
  animation: fadeInUp 1s ease-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 16px 48px rgba(107, 142, 90, 0.3);
    border-color: ${({ theme }) => theme.colors.sageGreen600};
  }
`

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.earthBrown};

  i {
    color: ${({ theme }) => theme.colors.sageGreen600};
    font-size: 1.25rem;
  }
`

const PriceDisplay = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.sageGreen600};
  margin-bottom: 0.5rem;

  span {
    font-size: 1.125rem;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.earthBrown};
  }
`

const IconEmoji = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
`

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hidden Lotus Complete Wellness Membership',
  description: 'Join our exclusive wellness membership program with unlimited access to yoga, meditation, wellness coaching, and holistic healing.',
  provider: {
    '@type': 'Organization',
    name: 'Hidden Lotus',
    url: 'https://hidden-lotus.netlify.app',
    logo: 'https://hidden-lotus.netlify.app/hl-f-icon2.png',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Wellness Community',
  },
  serviceType: 'Wellness Membership Program',
  offers: {
    '@type': 'Offer',
    price: '149',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '149',
      priceCurrency: 'USD',
      unitText: 'MONTH',
    },
    availability: 'https://schema.org/InStock',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Wellness Programs',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Yoga & Meditation Classes',
          description: 'Unlimited access to all yoga and meditation classes',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wellness Coaching',
          description: 'Monthly wellness consultations with our experts',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Holistic Healing',
          description: 'Access to energy healing, sound therapy, and other alternative wellness modalities',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Community Events',
          description: 'Monthly workshops, wellness retreats, and community gatherings',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wellness Library',
          description: 'Extensive collection of wellness resources, guided practices, and educational content',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Goal Tracking',
          description: 'Personalized wellness tracking and progress monitoring',
        },
      },
    ],
  },
}

const MembershipPageContent = memo(() => (
  <MembershipContainer>
    <Stack spacing="xl">
      {/* Hero Section */}
      <Section>
        <HeroSection
          title="Hidden Lotus Membership"
          description="Join our exclusive wellness community and unlock unlimited access to our holistic healing programs, personalized guidance, and transformative experiences."
        />
      </Section>

      {/* Main Content */}
      <MembershipCard>
        <TabContainer>
          <TabView className="membership-tabs">
            <TabPanel header="Membership Details" leftIcon="pi pi-info-circle">
              <Section>
                <Stack spacing="lg" align="center">
                  <div>
                    <h2 style={{ 
                      fontSize: '1.875rem', 
                      fontWeight: 'bold', 
                      color: '#4a7c59', 
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      Complete Wellness Membership
                    </h2>
                    <p style={{ 
                      fontSize: '1.125rem', 
                      color: '#8b7355', 
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      Our comprehensive membership program designed to support your journey to holistic wellness and inner peace.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <Tag value="Unlimited Access" severity="success" />
                      <Tag value="Personalized Guidance" severity="info" />
                      <Tag value="Community Support" severity="warning" />
                    </div>
                  </div>

                  <Grid columns={{ mobile: 1, tablet: 2 }}>
                    <div>
                      <h3 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: '600', 
                        color: '#4a7c59',
                        marginBottom: '1rem'
                      }}>
                        What's Included
                      </h3>
                      <FeatureList>
                        <FeatureItem>
                          <i className="pi pi-check-circle" />
                          <span>Unlimited access to all yoga and meditation classes</span>
                        </FeatureItem>
                        <FeatureItem>
                          <i className="pi pi-check-circle" />
                          <span>Monthly wellness consultations with our experts</span>
                        </FeatureItem>
                        <FeatureItem>
                          <i className="pi pi-check-circle" />
                          <span>Exclusive workshops and special events</span>
                        </FeatureItem>
                        <FeatureItem>
                          <i className="pi pi-check-circle" />
                          <span>Access to our wellness library and resources</span>
                        </FeatureItem>
                        <FeatureItem>
                          <i className="pi pi-check-circle" />
                          <span>Community support and group sessions</span>
                        </FeatureItem>
                      </FeatureList>
                    </div>

                    <div>
                      <h3 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: '600', 
                        color: '#4a7c59',
                        marginBottom: '1rem'
                      }}>
                        Membership Benefits
                      </h3>
                      <FeatureList>
                        <FeatureItem>
                          <i className="pi pi-star" />
                          <span>Priority booking for all classes and events</span>
                        </FeatureItem>
                        <FeatureItem>
                          <i className="pi pi-star" />
                          <span>Personalized wellness plans and tracking</span>
                        </FeatureItem>
                        <FeatureItem>
                          <i className="pi pi-star" />
                          <span>Discounts on workshops and retreats</span>
                        </FeatureItem>
                        <FeatureItem>
                          <i className="pi pi-star" />
                          <span>Monthly wellness challenges and goals</span>
                        </FeatureItem>
                        <FeatureItem>
                          <i className="pi pi-star" />
                          <span>Access to exclusive member-only content</span>
                        </FeatureItem>
                      </FeatureList>
                    </div>
                  </Grid>
                </Stack>
              </Section>
            </TabPanel>

            <TabPanel header="Features & Programs" leftIcon="pi pi-list">
              <Section>
                <Stack spacing="lg" align="center">
                  <div>
                    <h2 style={{ 
                      fontSize: '1.875rem', 
                      fontWeight: 'bold', 
                      color: '#4a7c59', 
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      Comprehensive Wellness Programs
                    </h2>
                    <p style={{ 
                      fontSize: '1.125rem', 
                      color: '#8b7355',
                      textAlign: 'center'
                    }}>
                      Access our full range of wellness programs designed to nurture your mind, body, and spirit.
                    </p>
                  </div>

                  <Grid columns={{ mobile: 1, tablet: 2, desktop: 3 }}>
                    <ProgramCard>
                      <IconEmoji>🧘‍♀️</IconEmoji>
                      <h3 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: '600', 
                        color: '#4a7c59',
                        marginBottom: '0.75rem'
                      }}>
                        Yoga & Meditation
                      </h3>
                      <p style={{ 
                        color: '#8b7355', 
                        fontSize: '0.875rem',
                        lineHeight: '1.4'
                      }}>
                        Daily classes in various styles including Hatha, Vinyasa, Yin, and guided meditation sessions.
                      </p>
                    </ProgramCard>

                    <ProgramCard>
                      <IconEmoji>💆‍♀️</IconEmoji>
                      <h3 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: '600', 
                        color: '#4a7c59',
                        marginBottom: '0.75rem'
                      }}>
                        Wellness Coaching
                      </h3>
                      <p style={{ 
                        color: '#8b7355', 
                        fontSize: '0.875rem',
                        lineHeight: '1.4'
                      }}>
                        One-on-one sessions with certified wellness coaches for personalized guidance and support.
                      </p>
                    </ProgramCard>

                    <ProgramCard>
                      <IconEmoji>🌿</IconEmoji>
                      <h3 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: '600', 
                        color: '#4a7c59',
                        marginBottom: '0.75rem'
                      }}>
                        Holistic Healing
                      </h3>
                      <p style={{ 
                        color: '#8b7355', 
                        fontSize: '0.875rem',
                        lineHeight: '1.4'
                      }}>
                        Access to energy healing, sound therapy, and other alternative wellness modalities.
                      </p>
                    </ProgramCard>

                    <ProgramCard>
                      <IconEmoji>👥</IconEmoji>
                      <h3 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: '600', 
                        color: '#4a7c59',
                        marginBottom: '0.75rem'
                      }}>
                        Community Events
                      </h3>
                      <p style={{ 
                        color: '#8b7355', 
                        fontSize: '0.875rem',
                        lineHeight: '1.4'
                      }}>
                        Monthly workshops, wellness retreats, and community gatherings for connection and growth.
                      </p>
                    </ProgramCard>

                    <ProgramCard>
                      <IconEmoji>📚</IconEmoji>
                      <h3 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: '600', 
                        color: '#4a7c59',
                        marginBottom: '0.75rem'
                      }}>
                        Wellness Library
                      </h3>
                      <p style={{ 
                        color: '#8b7355', 
                        fontSize: '0.875rem',
                        lineHeight: '1.4'
                      }}>
                        Extensive collection of wellness resources, guided practices, and educational content.
                      </p>
                    </ProgramCard>

                    <ProgramCard>
                      <IconEmoji>🎯</IconEmoji>
                      <h3 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: '600', 
                        color: '#4a7c59',
                        marginBottom: '0.75rem'
                      }}>
                        Goal Tracking
                      </h3>
                      <p style={{ 
                        color: '#8b7355', 
                        fontSize: '0.875rem',
                        lineHeight: '1.4'
                      }}>
                        Personalized wellness tracking and progress monitoring to help you achieve your goals.
                      </p>
                    </ProgramCard>
                  </Grid>
                </Stack>
              </Section>
            </TabPanel>

            <TabPanel header="Pricing & Plans" leftIcon="pi pi-dollar">
              <Section>
                <Stack spacing="lg" align="center">
                  <div>
                    <h2 style={{ 
                      fontSize: '1.875rem', 
                      fontWeight: 'bold', 
                      color: '#4a7c59', 
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      Simple, Transparent Pricing
                    </h2>
                    <p style={{ 
                      fontSize: '1.125rem', 
                      color: '#8b7355',
                      textAlign: 'center'
                    }}>
                      One comprehensive membership plan designed to support your complete wellness journey.
                    </p>
                  </div>

                  <PricingCard>
                    <Stack spacing="lg" align="center">
                      <IconEmoji>🌟</IconEmoji>
                      <h3 style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 'bold', 
                        color: '#4a7c59'
                      }}>
                        Complete Wellness Membership
                      </h3>
                      <PriceDisplay>
                        $149
                        <span>/month</span>
                      </PriceDisplay>
                      <p style={{ 
                        color: '#8b7355',
                        textAlign: 'center'
                      }}>
                        Everything you need for your wellness journey in one comprehensive plan.
                      </p>

                      <FeatureList>
                        <FeatureItem>
                          <i className="pi pi-check-circle" />
                          <span>Unlimited class access</span>
                        </FeatureItem>
                        <FeatureItem>
                          <i className="pi pi-check-circle" />
                          <span>Monthly wellness consultation</span>
                        </FeatureItem>
                        <FeatureItem>
                          <i className="pi pi-check-circle" />
                          <span>All workshops & events</span>
                        </FeatureItem>
                        <FeatureItem>
                          <i className="pi pi-check-circle" />
                          <span>Wellness library access</span>
                        </FeatureItem>
                        <FeatureItem>
                          <i className="pi pi-check-circle" />
                          <span>Community support</span>
                        </FeatureItem>
                      </FeatureList>

                      <Button
                        variant="primary"
                        size="lg"
                        style={{ minWidth: '200px' }}
                      >
                        <i className="pi pi-heart" style={{ marginRight: '0.5rem' }} />
                        Join Membership
                      </Button>

                      <p style={{ 
                        fontSize: '0.875rem', 
                        color: 'rgba(139, 115, 85, 0.7)',
                        textAlign: 'center',
                        marginTop: '0.75rem'
                      }}>
                        Cancel anytime • No long-term commitment
                      </p>
                    </Stack>
                  </PricingCard>
                </Stack>
              </Section>
            </TabPanel>
          </TabView>
        </TabContainer>
      </MembershipCard>
    </Stack>
  </MembershipContainer>
))

export default function MembershipPage() {
  return (
    <ErrorBoundary>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MembershipPageContent />
    </ErrorBoundary>
  )
}
