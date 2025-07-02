/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'hidden-lotus.netlify.app',
				pathname: '/**',
			},
		],
		// Ensure images work on Netlify
		loader: 'default',
		domains: ['hidden-lotus.netlify.app'],
	},
	webpack: (config, { isServer }) => {
		// Suppress punycode deprecation warning
		config.ignoreWarnings = [
			{ module: /node_modules\/punycode/ },
			/.*punycode.*/,
		]
		return config
	},
	// Ensure static assets are properly handled
	assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
	// Add trailing slash for Netlify compatibility
	trailingSlash: false,
}

module.exports = nextConfig
