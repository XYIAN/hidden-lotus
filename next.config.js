/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'hidden-lotus.netlify.app',
				pathname: '/**',
			},
		],
	},
	webpack: (config, { isServer }) => {
		// Suppress punycode deprecation warning
		config.ignoreWarnings = [
			{ module: /node_modules\/punycode/ },
			/.*punycode.*/,
		]
		return config
	},
}

module.exports = nextConfig
