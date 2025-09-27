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
		
		// Ensure SCSS files are properly handled
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		})
		
		return config
	},
	// Ensure static assets are properly handled
	assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
	// Disable unnecessary preloading to fix warnings
	experimental: {
		optimizeCss: true,
	},
	// Optimize CSS loading
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	// Ensure CSS is properly generated
	generateBuildId: async () => {
		return 'build-' + Date.now()
	},
}

module.exports = nextConfig
