/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	trailingSlash: true,
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
	assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
	// Disable unnecessary preloading to fix warnings
	experimental: {
		optimizeCss: false,
	},
	// Optimize CSS loading
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
}

module.exports = nextConfig
