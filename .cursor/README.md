# Hidden Lotus Cursor Configuration

This folder contains Cursor IDE configuration and MCP (Model Context Protocol) server for the Hidden Lotus project.

## Files

- `mcp.json` - MCP server configuration
- `mcp-server.js` - MCP server implementation with intelligent code analysis
- `package.json` - MCP server dependencies
- `rules.md` - Development rules and guidelines
- `settings.json` - Cursor IDE settings
- `README.md` - This file

## MCP Server Features

The MCP server provides intelligent analysis tools:

### 1. Component Need Analysis

- Analyzes if a new component is needed
- Suggests existing components that could be reused
- Checks component complexity and provides recommendations

### 2. Component Reuse Suggestions

- Suggests existing components based on use case
- Provides reasoning for suggestions
- Helps maintain DRY principles

### 3. Changelog Requirement Check

- Automatically checks if changes require changelog updates
- Categorizes change types (feature, bug fix, breaking change, etc.)
- Lists affected files

### 4. Component Structure Validation

- Validates components follow Hidden Lotus patterns
- Checks TypeScript compliance
- Verifies accessibility features
- Provides quality score and suggestions

## Usage

The MCP server runs automatically when Cursor IDE is started. You can use the tools through the Cursor interface:

1. **Before creating a component**: Use the component analysis tools
2. **Before making changes**: Check changelog requirements
3. **After creating components**: Validate structure and quality

## Development Rules

See `rules.md` for comprehensive development guidelines including:

- Mandatory changelog updates
- Component reuse requirements
- TypeScript best practices
- Accessibility requirements
- Performance guidelines
- Code quality standards

## Installation

The MCP server dependencies are managed separately:

```bash
cd .cursor
npm install
```

## Configuration

The MCP server is configured in `mcp.json` and will automatically start when Cursor IDE launches.

## Troubleshooting

If the MCP server doesn't work:

1. Check that Node.js 18+ is installed
2. Install dependencies: `cd .cursor && npm install`
3. Restart Cursor IDE
4. Check the Cursor logs for MCP server errors

## Contributing

When modifying the MCP server:

1. Update the server logic in `mcp-server.js`
2. Test the changes thoroughly
3. Update this README if needed
4. Follow the changelog requirements
