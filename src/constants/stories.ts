export interface Story {
	id: string
	title: string
	author: string
	date: string
	excerpt: string
	content: string
	category: string
	image: string
}

export const storiesData: Story[] = [
	{
		id: 'hidden-lotus-story',
		title: 'The Hidden Lotus Story',
		author: 'Hidden Lotus Community',
		date: 'January 2025',
		excerpt:
			'We are a completely grass-roots venture with no investors. We have enjoyed the support of many talented, loving, giving individuals, and we commit to building upon what we have been blessed with.',
		content: `The Hidden Lotus story is an adventure tale. It began with a willingness to go into the unknown It continues to thrive on that basis. We are a completely grass-roots venture with no investors. We have enjoyed the support of many talented, loving, giving individuals, and we commit to building upon what we have been blessed with. We invite you to join the adventure. Follow the story as it unfolds on Instagram @hiddenlotus.mor`,
		category: 'Community',
		image: '/story-1.JPG',
	},
]
