#!/usr/bin/env node

/**
 * Hidden Lotus MCP Server
 * Provides intelligent code analysis and component recommendations
 */

const { Server } = require('@modelcontextprotocol/sdk/server/index.js')
const {
	StdioServerTransport,
} = require('@modelcontextprotocol/sdk/server/stdio.js')
const {
	CallToolRequestSchema,
	ListToolsRequestSchema,
} = require('@modelcontextprotocol/sdk/types.js')

class HiddenLotusMCPServer {
	constructor() {
		this.server = new Server(
			{
				name: 'hidden-lotus-rules',
				version: '1.0.0',
			},
			{
				capabilities: {
					tools: {},
				},
			}
		)

		this.setupToolHandlers()
		this.setupErrorHandling()
	}

	setupToolHandlers() {
		// List available tools
		this.server.setRequestHandler(ListToolsRequestSchema, async () => {
			return {
				tools: [
					{
						name: 'analyze_component_need',
						description:
							'Analyze if a new component is needed or if existing components can be reused',
						inputSchema: {
							type: 'object',
							properties: {
								componentName: {
									type: 'string',
									description: 'Name of the proposed component',
								},
								description: {
									type: 'string',
									description: 'Description of what the component should do',
								},
								props: {
									type: 'array',
									items: { type: 'string' },
									description: 'Proposed props for the component',
								},
							},
							required: ['componentName', 'description'],
						},
					},
					{
						name: 'suggest_component_reuse',
						description:
							'Suggest existing components that could be reused instead of creating new ones',
						inputSchema: {
							type: 'object',
							properties: {
								useCase: {
									type: 'string',
									description: 'Description of the use case',
								},
								requirements: {
									type: 'array',
									items: { type: 'string' },
									description: 'List of requirements for the component',
								},
							},
							required: ['useCase'],
						},
					},
					{
						name: 'check_changelog_requirement',
						description: 'Check if changes require a changelog entry',
						inputSchema: {
							type: 'object',
							properties: {
								changes: {
									type: 'array',
									items: { type: 'string' },
									description: 'List of changes made',
								},
								filePaths: {
									type: 'array',
									items: { type: 'string' },
									description: 'File paths that were modified',
								},
							},
							required: ['changes', 'filePaths'],
						},
					},
					{
						name: 'validate_component_structure',
						description:
							'Validate component follows Hidden Lotus patterns and best practices',
						inputSchema: {
							type: 'object',
							properties: {
								componentCode: {
									type: 'string',
									description: 'The component code to validate',
								},
								componentType: {
									type: 'string',
									enum: ['functional', 'styled', 'page', 'layout'],
									description: 'Type of component',
								},
							},
							required: ['componentCode', 'componentType'],
						},
					},
				],
			}
		})

		// Handle tool calls
		this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
			const { name, arguments: args } = request.params

			switch (name) {
				case 'analyze_component_need':
					return this.analyzeComponentNeed(args)
				case 'suggest_component_reuse':
					return this.suggestComponentReuse(args)
				case 'check_changelog_requirement':
					return this.checkChangelogRequirement(args)
				case 'validate_component_structure':
					return this.validateComponentStructure(args)
				default:
					throw new Error(`Unknown tool: ${name}`)
			}
		})
	}

	async analyzeComponentNeed({ componentName, description, props = [] }) {
		// Check against existing components
		const existingComponents = [
			'DisplayCard',
			'Button',
			'Card',
			'FormField',
			'FilterPanel',
			'HeroSection',
			'LoadingSkeleton',
			'CardGrid',
			'ClassesGrid',
			'TeamCard',
			'StoryCard',
			'ClassCard',
			'InputTextHL',
			'DropdownHL',
			'InputTextareaHL',
			'ResultsCount',
			'BackToTop',
			'GlobalLoadingOverlay',
		]

		const similarComponents = existingComponents.filter(
			(comp) =>
				comp.toLowerCase().includes(componentName.toLowerCase()) ||
				componentName.toLowerCase().includes(comp.toLowerCase())
		)

		const recommendations = []

		if (similarComponents.length > 0) {
			recommendations.push({
				type: 'warning',
				message: `Consider reusing existing components: ${similarComponents.join(
					', '
				)}`,
				suggestion: 'Review existing components before creating new ones',
			})
		}

		// Check if it's a simple styling variation
		if (
			description.toLowerCase().includes('button') ||
			description.toLowerCase().includes('card')
		) {
			recommendations.push({
				type: 'info',
				message: 'This might be a styling variation of existing components',
				suggestion:
					'Consider extending existing Button or Card components with props',
			})
		}

		// Check component complexity
		if (props.length > 10) {
			recommendations.push({
				type: 'warning',
				message: 'Component has many props - consider breaking it down',
				suggestion: 'Split into smaller, focused components',
			})
		}

		return {
			content: [
				{
					type: 'text',
					text: JSON.stringify(
						{
							needsNewComponent: similarComponents.length === 0,
							recommendations,
							existingSimilarComponents: similarComponents,
							complexity:
								props.length > 10
									? 'high'
									: props.length > 5
									? 'medium'
									: 'low',
						},
						null,
						2
					),
				},
			],
		}
	}

	async suggestComponentReuse({ useCase, requirements = [] }) {
		const componentMap = {
			'display data': ['DisplayCard', 'Card', 'CardGrid'],
			'form input': [
				'FormField',
				'InputTextHL',
				'DropdownHL',
				'InputTextareaHL',
			],
			navigation: ['Button', 'LinkButton', 'IconButton'],
			layout: ['CardGrid', 'Layout', 'FilterPanel'],
			'loading states': ['LoadingSkeleton', 'GlobalLoadingOverlay'],
			'content display': ['HeroSection', 'ResultsCount'],
			'interactive elements': ['Button', 'ButtonGroup', 'FloatingButton'],
		}

		const suggestions = []

		for (const [key, components] of Object.entries(componentMap)) {
			if (
				useCase.toLowerCase().includes(key) ||
				requirements.some((req) => req.toLowerCase().includes(key))
			) {
				suggestions.push(...components)
			}
		}

		return {
			content: [
				{
					type: 'text',
					text: JSON.stringify(
						{
							suggestedComponents: [...new Set(suggestions)],
							reasoning: 'Based on use case and requirements analysis',
							nextSteps:
								'Review suggested components and their props to see if they fit your needs',
						},
						null,
						2
					),
				},
			],
		}
	}

	async checkChangelogRequirement({ changes, filePaths }) {
		const changelogRequired = filePaths.some(
			(path) =>
				!path.includes('docs/') &&
				!path.includes('.md') &&
				!path.includes('node_modules/') &&
				!path.includes('.git/')
		)

		const changeTypes = {
			'new feature': changes.some(
				(change) =>
					change.toLowerCase().includes('add') ||
					change.toLowerCase().includes('new') ||
					change.toLowerCase().includes('create')
			),
			'bug fix': changes.some(
				(change) =>
					change.toLowerCase().includes('fix') ||
					change.toLowerCase().includes('bug') ||
					change.toLowerCase().includes('error')
			),
			'breaking change': changes.some(
				(change) =>
					change.toLowerCase().includes('breaking') ||
					change.toLowerCase().includes('remove') ||
					change.toLowerCase().includes('deprecate')
			),
			performance: changes.some(
				(change) =>
					change.toLowerCase().includes('optimize') ||
					change.toLowerCase().includes('performance') ||
					change.toLowerCase().includes('speed')
			),
		}

		return {
			content: [
				{
					type: 'text',
					text: JSON.stringify(
						{
							changelogRequired,
							changeTypes,
							message: changelogRequired
								? 'CHANGELOG UPDATE REQUIRED: Update CHANGELOG.md with your changes'
								: 'No changelog update needed (only documentation changes)',
							affectedFiles: filePaths.filter(
								(path) =>
									!path.includes('docs/') &&
									!path.includes('.md') &&
									!path.includes('node_modules/')
							),
						},
						null,
						2
					),
				},
			],
		}
	}

	async validateComponentStructure({ componentCode, componentType }) {
		const issues = []
		const suggestions = []

		// Check for TypeScript types
		if (
			!componentCode.includes('interface') &&
			!componentCode.includes('type')
		) {
			issues.push('Missing TypeScript interface or type definition')
		}

		// Check for proper exports
		if (!componentCode.includes('export')) {
			issues.push('Component should be exported')
		}

		// Check for React imports
		if (!componentCode.includes('import') || !componentCode.includes('React')) {
			issues.push('Missing React imports')
		}

		// Check for accessibility
		if (componentType === 'functional' && !componentCode.includes('aria-')) {
			suggestions.push('Consider adding ARIA attributes for accessibility')
		}

		// Check for memoization for performance
		if (
			componentType === 'functional' &&
			!componentCode.includes('memo') &&
			componentCode.includes('props')
		) {
			suggestions.push('Consider using React.memo for performance optimization')
		}

		// Check for proper naming
		if (!componentCode.match(/export\s+(function|const)\s+[A-Z]/)) {
			issues.push('Component should be named with PascalCase')
		}

		return {
			content: [
				{
					type: 'text',
					text: JSON.stringify(
						{
							valid: issues.length === 0,
							issues,
							suggestions,
							score: Math.max(
								0,
								100 - issues.length * 20 - suggestions.length * 5
							),
						},
						null,
						2
					),
				},
			],
		}
	}

	setupErrorHandling() {
		this.server.onerror = (error) => {
			console.error('[MCP Error]', error)
		}

		process.on('SIGINT', async () => {
			await this.server.close()
			process.exit(0)
		})
	}

	async run() {
		const transport = new StdioServerTransport()
		await this.server.connect(transport)
		console.error('Hidden Lotus MCP Server running on stdio')
	}
}

const server = new HiddenLotusMCPServer()
server.run().catch(console.error)
