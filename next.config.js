/** @type {import('next').NextConfig} */
const nextConfig = {
	// Only use static export for production builds
	...(process.env.NODE_ENV === 'production' && {
		output: 'export',
		trailingSlash: true,
		images: {
			unoptimized: true,
		},
		assetPrefix: '',
	}),
	// Disable experimental features that might cause issues
	experimental: {},
}

module.exports = nextConfig
