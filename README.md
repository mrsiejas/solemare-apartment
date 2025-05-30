# Solemare Apartment Website

[![Preview](https://img.shields.io/badge/preview-solemare--apartment--preview.pages.dev-blue)](https://preview.solemare-apartment.pages.dev)
[![Production](https://img.shields.io/badge/production-solemare--apartment.pages.dev-green)](https://solemare-apartment.pages.dev)

[![Code Quality](https://github.com/mrsiejas/solemare-apartment/actions/workflows/main.yml/badge.svg)](https://github.com/mrsiejas/solemare-apartment/actions/workflows/main.yml)

A modern, responsive website for rental apartment. Can be used as QR code URL for the guests that have arrived in the apartment. 
Built with React, Vite, and Tailwind CSS, deployed on Cloudflare Pages.

## Features

- 🌐 Bilingual support (Polish/English)
- 📍 Google Maps integration
- 📅 Google Calendar availability
- 📝 Contact form with Formspree
- 🎨 Modern, responsive design with Tailwind CSS
- 🖼️ Image gallery
- 🏖️ Local attractions guide
- 📅 Google Calendar display showing booked dates with future AI workflow integration (planned)
- 🌤️ Real-time weather information and forecasts for given location (planned)
- 🤖 AI Chatbot Assistant powered by HuggingFace; LLM feed with info about the area

## Tech Stack

- **Frontend**: 
  - React 18
  - Vite
  - Tailwind CSS
  - JavaScript (ES6+)
- **Deployment**: Cloudflare Pages (automatic deployments)
- **Quality Assurance**:
  - HTML validation
  - CSS linting (Stylelint)
  - JavaScript linting (ESLint)
  - Security scanning (Snyk)
  - Performance monitoring (Lighthouse)
  - Accessibility testing
- **APIs**: 
  - Google Maps
  - Google Calendar
  - Formspree
  - OpenWeatherMap (planned)
- **Version Control**: Git/GitHub

## Project Structure

```
solemare-apartment/
├── src/                    # Source files
│   ├── components/        # React components
│   ├── lib/              # Utility functions and libraries
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── dist/                # Build output
└── configuration files  # Various config files
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Set up environment variables in Cloudflare Pages:
   - Production environment (main branch):
     - `GOOGLE_MAPS_API_KEY`
     - `GOOGLE_CALENDAR_ID`
     - `FORMSPREE_ID`
   - Preview environment (all other branches):
     - Same variables as production
   - `OPENWEATHERMAP_API_KEY` (for future use)

## Development

- Run locally using `npm run dev`
- Build for production using `npm run build`
- Push to any branch for automatic preview deployment
- Push to main branch for automatic production deployment
- Code quality checks run automatically on pull requests and main branch pushes

## Quality Assurance

The project includes automated quality checks that run on every pull request and push to main:

- **Code Quality**:
  - HTML validation
  - CSS linting with Stylelint
  - JavaScript linting with ESLint

- **Security**:
  - Vulnerability scanning with Snyk
  - Dependency updates monitoring

- **Performance**:
  - Lighthouse CI for performance metrics
  - Web Vitals monitoring
  - Performance budget enforcement

- **Accessibility**:
  - Automated accessibility testing
  - WCAG compliance checking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details. 