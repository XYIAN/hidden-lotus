/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	// Disable experimental features that might cause issues
	experimental: {},
	// Ensure static assets are properly handled
	assetPrefix: '',
}

module.exports = nextConfig
