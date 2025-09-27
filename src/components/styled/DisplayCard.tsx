// High-performance styled DisplayCard component
import React, { useState, memo } from 'react'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import { CardBody, YogaCard } from './Card'
import { Button } from './Button'
import { Flex, Stack } from './Layout'
import { LoadingSkeleton } from './LoadingSkeleton'
import { DisplayCardProps } from '@/types'

// Styled components for DisplayCard
const CardContainer = styled(YogaCard)<{
	cardSize: 'small' | 'medium' | 'large'
}>`
	${({ cardSize }) => {
		switch (cardSize) {
			case 'small':
				return css`
					max-width: 20rem;
				`
			case 'large':
				return css`
					max-width: 28rem;
				`
			default:
				return css`
					max-width: 24rem;
				`
		}
	}}
`

const ImageContainer = styled.div`
	position: relative;
	margin-bottom: ${({ theme }) => theme.spacing.md};
	display: flex;
	justify-content: center;
`

const ImageWrapper = styled.div`
	width: 12rem;
	height: 12rem;
	border-radius: ${({ theme }) => theme.borderRadius.lg};
	overflow: hidden;
	background-color: ${({ theme }) => theme.colors.lightTan};
	border: 1px solid ${({ theme }) => theme.colors.sageGreen200};
	display: flex;
	align-items: center;
	justify-content: center;
`

const StyledImage = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.05);
	}
`

const PlaceholderIcon = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.sageGreen};
	font-size: 3rem;
`

const CardTitle = styled.h3`
	font-size: ${({ theme }) => theme.typography.fontSize.xl};
	font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
	color: ${({ theme }) => theme.colors.primaryGreen};
	margin-bottom: ${({ theme }) => theme.spacing.sm};
	text-align: center;
`

const CardDescription = styled.p`
	color: ${({ theme }) => theme.colors.earthBrown};
	font-size: ${({ theme }) => theme.typography.fontSize.sm};
	margin-bottom: ${({ theme }) => theme.spacing.md};
	line-height: 1.4;
	text-align: center;
`

const CardBio = styled.p`
	color: ${({ theme }) => theme.colors.earthBrown};
	font-size: ${({ theme }) => theme.typography.fontSize.sm};
	margin-bottom: ${({ theme }) => theme.spacing.md};
	line-height: 1.4;
	text-align: center;
`

const DetailsContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: ${({ theme }) => theme.spacing.md};
	flex: 1;
`

const DetailsList = styled(Stack)`
	align-items: flex-start;
	gap: ${({ theme }) => theme.spacing.sm};
`

const DetailItem = styled(Flex)`
	align-items: center;
	gap: ${({ theme }) => theme.spacing.sm};
	color: ${({ theme }) => theme.colors.earthBrown};
	font-size: ${({ theme }) => theme.typography.fontSize.sm};
`

const Icon = styled.i`
	color: ${({ theme }) => theme.colors.sageGreen600};
	font-size: 1rem;
`

const TypeBadge = styled.div<{ type: string }>`
	display: flex;
	justify-content: center;
	margin-bottom: ${({ theme }) => theme.spacing.md};

	.p-tag {
		background-color: ${({ theme, type }) => {
			switch (type) {
				case 'class':
					return theme.colors.sageGreen600
				case 'team':
					return theme.colors.pastelPink
				case 'story':
					return theme.colors.yellowGold
				default:
					return theme.colors.sageGreen600
			}
		}};
		color: white;
		border: none;
		border-radius: ${({ theme }) => theme.borderRadius.md};
		padding: 0.25rem 0.75rem;
		font-size: 0.75rem;
		font-weight: 500;
	}
`

const SpecialtiesContainer = styled.div`
	margin-bottom: ${({ theme }) => theme.spacing.md};
`

const SpecialtiesTitle = styled.h4`
	font-size: ${({ theme }) => theme.typography.fontSize.sm};
	font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
	color: ${({ theme }) => theme.colors.primaryGreen};
	margin-bottom: ${({ theme }) => theme.spacing.sm};
	text-align: center;
`

const TagsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.25rem;
	justify-content: center;
`

const Tag = styled.span`
	background-color: ${({ theme }) => theme.colors.lightTan};
	border: 1px solid ${({ theme }) => theme.colors.sageGreen200};
	color: ${({ theme }) => theme.colors.earthBrown};
	border-radius: ${({ theme }) => theme.borderRadius.md};
	padding: 0.25rem 0.5rem;
	font-size: 0.75rem;
	font-weight: 500;
`

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: auto;
`

// Main DisplayCard component
export const DisplayCard = memo<DisplayCardProps>(function DisplayCard({
	data,
	showImage = true,
	showType = false,
	showSpecialties = false,
	showCertifications = false,
	showPrice = false,
	showDuration = false,
	showLevel = false,
	showCategory = false,
	showCredentials = false,
	showProfession = false,
	showBio = false,
	showDescription = true,
	showLearnMore = false,
	learnMoreText = 'Learn More',
	cardSize = 'medium',
}) {
	const [imageLoaded, setImageLoaded] = useState(false)
	const [imageError, setImageError] = useState(false)

	const {
		name,
		title,
		description,
		bio,
		image,
		type,
		profession,
		credentials,
		specialties,
		certifications,
		price,
		duration,
		level,
		category,
		href,
		onClick,
	} = data

	const getTypeIcon = (type: string) => {
		const icons: Record<string, string> = {
			class: 'pi pi-calendar',
			team: 'pi pi-users',
			story: 'pi pi-book',
			default: 'pi pi-star',
		}
		return icons[type] || icons.default
	}

	const handleClick = () => {
		if (onClick) {
			onClick()
		} else if (href) {
			window.location.href = href
		}
	}

	return (
		<CardContainer
			cardSize={cardSize}
			hover={!!(href || onClick)}
			onClick={handleClick}
		>
			<CardBody>
				{/* Header */}
				<Stack spacing="sm">
					<CardTitle>{name || title}</CardTitle>
					{showDescription && description && (
						<CardDescription>{description}</CardDescription>
					)}
					{showBio && bio && <CardBio>{bio}</CardBio>}
				</Stack>

				{/* Image */}
				{showImage && image && (
					<ImageContainer>
						<ImageWrapper>
							{!imageLoaded && !imageError && (
								<LoadingSkeleton
									type="image"
									className="w-48 h-48 rounded-lg"
								/>
							)}
							{imageError && (
								<PlaceholderIcon>
									<i className="pi pi-image" />
								</PlaceholderIcon>
							)}
							{!imageError && (
								<StyledImage
									src={image}
									alt={name || title || 'Card image'}
									width={200}
									height={200}
									style={{
										display: imageLoaded ? 'block' : 'none',
									}}
									onLoad={() => setImageLoaded(true)}
									onError={() => setImageError(true)}
								/>
							)}
						</ImageWrapper>
					</ImageContainer>
				)}

				{/* Type Badge */}
				{showType && type && (
					<TypeBadge type={type}>
						<span className="p-tag">
							<i
								className={getTypeIcon(type)}
								style={{ marginRight: '0.5rem' }}
							/>
							{type.charAt(0).toUpperCase() + type.slice(1)}
						</span>
					</TypeBadge>
				)}

				{/* Details */}
				<DetailsContainer>
					<DetailsList>
						{showProfession && profession && (
							<DetailItem>
								<Icon className="pi pi-briefcase" />
								<span>{profession}</span>
							</DetailItem>
						)}
						{showCredentials && credentials && (
							<DetailItem>
								<Icon className="pi pi-certificate" />
								<span>{credentials}</span>
							</DetailItem>
						)}
						{showPrice && price && (
							<DetailItem>
								<Icon className="pi pi-dollar" />
								<span>{price}</span>
							</DetailItem>
						)}
						{showDuration && duration && (
							<DetailItem>
								<Icon className="pi pi-clock" />
								<span>{duration}</span>
							</DetailItem>
						)}
						{showLevel && level && (
							<DetailItem>
								<Icon className="pi pi-star" />
								<span>{level}</span>
							</DetailItem>
						)}
						{showCategory && category && (
							<DetailItem>
								<Icon className="pi pi-tag" />
								<span>{category}</span>
							</DetailItem>
						)}
					</DetailsList>
				</DetailsContainer>

				{/* Specialties */}
				{showSpecialties && specialties && specialties.length > 0 && (
					<SpecialtiesContainer>
						<SpecialtiesTitle>Specialties:</SpecialtiesTitle>
						<TagsContainer>
							{specialties.map((specialty, index) => (
								<Tag key={index}>{specialty}</Tag>
							))}
						</TagsContainer>
					</SpecialtiesContainer>
				)}

				{/* Certifications */}
				{showCertifications && certifications && certifications.length > 0 && (
					<SpecialtiesContainer>
						<SpecialtiesTitle>Certifications:</SpecialtiesTitle>
						<TagsContainer>
							{certifications.map((cert, index) => (
								<Tag key={index}>{cert}</Tag>
							))}
						</TagsContainer>
					</SpecialtiesContainer>
				)}

				{/* Learn More Button */}
				{showLearnMore && (href || onClick) && (
					<ButtonContainer>
						<Button
							variant="outline"
							size="sm"
							onClick={handleClick}
							style={{ minWidth: '120px' }}
						>
							{learnMoreText}
							<i
								className="pi pi-arrow-right"
								style={{ marginLeft: '0.5rem' }}
							/>
						</Button>
					</ButtonContainer>
				)}
			</CardBody>
		</CardContainer>
	)
})
