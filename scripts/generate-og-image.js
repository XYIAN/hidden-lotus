const fs = require('fs');
const path = require('path');

// Create a simple SVG-based Open Graph image
const createOGImage = () => {
  const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#dbcbb1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8baa7a;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fbb6ce;stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#8baa7a;stop-opacity:0.3" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  
  <!-- Accent circles -->
  <circle cx="1000" cy="100" r="150" fill="url(#accent)"/>
  <circle cx="200" cy="500" r="200" fill="url(#accent)"/>
  
  <!-- Main content area -->
  <rect x="100" y="100" width="1000" height="430" rx="20" fill="rgba(255,255,255,0.9)" stroke="#4a7c59" stroke-width="2"/>
  
  <!-- Logo placeholder -->
  <circle cx="600" cy="200" r="80" fill="#4a7c59"/>
  <text x="600" y="210" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="60" font-weight="bold">HL</text>
  
  <!-- Title -->
  <text x="600" y="320" text-anchor="middle" fill="#2d5016" font-family="Arial, sans-serif" font-size="48" font-weight="bold">Hidden Lotus</text>
  
  <!-- Subtitle -->
  <text x="600" y="360" text-anchor="middle" fill="#4a7c59" font-family="Arial, sans-serif" font-size="24">Wellness &amp; Healing Center</text>
  
  <!-- Description -->
  <text x="600" y="400" text-anchor="middle" fill="#6b8e5a" font-family="Arial, sans-serif" font-size="18">Discover your path to wellness and inner peace</text>
  
  <!-- URL -->
  <text x="600" y="450" text-anchor="middle" fill="#8baa7a" font-family="Arial, sans-serif" font-size="16">hiddenlotusmor.com</text>
</svg>`;

  return svg;
};

// Generate and save the OG image
const ogImage = createOGImage();
const outputPath = path.join(__dirname, '../public/og-image.svg');

fs.writeFileSync(outputPath, ogImage);
console.log('Open Graph image generated successfully at:', outputPath);
