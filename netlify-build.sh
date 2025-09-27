#!/bin/bash

# Netlify build script for Hidden Lotus
echo "Starting Netlify build process..."

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the project
echo "Building project..."
npm run build

# Verify build output
echo "Verifying build output..."
if [ -d "out" ]; then
    echo "Build successful - out directory created"
    ls -la out/
else
    echo "Build failed - out directory not found"
    exit 1
fi

echo "Netlify build process completed successfully!"
