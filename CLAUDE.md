# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Kevin Shelton's personal website (kevinjshelton.com) - a static HTML portfolio site showcasing his experience as a Senior Software Engineer at StockX. The site is built with vanilla HTML, CSS, and JavaScript without any build tools or package managers.

## Architecture

- **Static HTML Site**: No build process, frameworks, or package managers
- **Single Page Application**: Main content in `index.html` with smooth scrolling navigation
- **Blog Section**: Separate minimal blog at `/blog/index.html` (currently a placeholder)
- **Interactive World Map**: Uses D3.js for travel visualization in `js/world.js`
- **Responsive Design**: Bootstrap CSS framework with custom styling

### File Structure
```
├── index.html          # Main portfolio page
├── blog/
│   ├── index.html     # Blog landing page (minimal)
│   └── example.html   # Blog post template
├── css/
│   ├── style.css      # Custom styles
│   └── bootstrap.*    # Bootstrap framework files
├── js/
│   ├── main.js        # Smooth scrolling functionality
│   ├── world.js       # D3.js world map (large file)
│   └── script.js      # Additional utilities
└── images/            # Company logos and profile pictures
```

## Development

### Commands
- `npm run dev` or `npm start` - Start local development server on port 3000
- `npm run preview` - Start preview server on port 8080
- `npm run validate` - Validate HTML files
- `npm run optimize` - Optimize images (outputs to images/optimized)
- `npm run deploy` - Deploy to Vercel production
- `npm run deploy:preview` - Deploy to Vercel preview

### No Build Process
This is a static site with no build tools or compilation steps. Changes can be made directly to HTML, CSS, and JavaScript files.

### Testing
- Use `npm run dev` for local development server
- `npm run validate` for HTML validation
- Manual testing recommended for cross-browser compatibility

### Deployment
- **Vercel**: Configured for deployment with `vercel.json`
- **Static Hosting**: Files can be uploaded directly to any web server
- **Blog Routing**: `/blog` routes correctly to `/blog/index.html`

## Key Components

### World Map Visualization
- Located in `js/world.js` (large D3.js-based map)
- Shows places Kevin has traveled
- Requires D3.js library (loaded via CDN)

### Smooth Scrolling Navigation
- Implemented in `js/main.js`
- Provides animated scrolling between sections
- Works with anchor links in the navigation

### Responsive Layout
- Uses Bootstrap for base responsiveness
- Custom CSS in `style.css` for specific styling
- Dark theme with gradient backgrounds

## Content Sections
- **Home**: Introduction and navigation
- **Experience**: Work history with company logos
- **Travels**: Interactive world map
- **Projects**: Portfolio items with hover overlays
- **Contact**: Social media links

## External Dependencies
- Bootstrap CSS (local files)
- Font Awesome icons (CDN)
- D3.js for world map (local file)
- Google Analytics tracking