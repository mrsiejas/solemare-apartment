# Solemare Apartment Website

[![Preview](https://img.shields.io/badge/preview-solemare--apartment--preview.pages.dev-blue)](https://preview.solemare-apartment.pages.dev)
[![Production](https://img.shields.io/badge/production-solemare--apartment.pages.dev-green)](https://solemare-apartment.pages.dev)

[![Code Quality](https://github.com/mrsiejas/solemare-apartment/actions/workflows/main.yml/badge.svg)](https://github.com/mrsiejas/solemare-apartment/actions/workflows/main.yml)

A modern, responsive website for Solemare Apartment 46 in Kąty Rybackie, Poland. Built with HTML, CSS, and JavaScript, deployed on Cloudflare Pages.

## Features

- 🌐 Bilingual support (Polish/English)
- 📍 Google Maps integration
- 📅 Google Calendar availability
- 📝 Contact form with Formspree
- 🎨 Modern, responsive design
- 🖼️ Image gallery
- 🏖️ Local attractions guide
- 🌤️ Weather widget (planned)

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Deployment**: Cloudflare Pages (automatic deployments)
- **Quality Assurance**:
  - HTML validation
  - CSS linting
  - JavaScript linting
  - Security scanning (Snyk)
  - Performance monitoring (Lighthouse)
  - Accessibility testing
- **APIs**: 
  - Google Maps
  - Google Calendar
  - Formspree
  - OpenWeatherMap (planned)
- **Version Control**: Git/GitHub

## Getting Started

1. Clone the repository
2. Set up environment variables in Cloudflare Pages:
   - Production environment (main branch):
     - `GOOGLE_MAPS_API_KEY`
     - `GOOGLE_CALENDAR_ID`
     - `ENV_FORMSPREE_ID`
   - Preview environment (all other branches):
     - Same variables as production
   - `OPENWEATHERMAP_API_KEY` (for future use)

## Development

- Run locally using a static server
- Push to any branch for automatic preview deployment
- Push to main branch for automatic production deployment
- Code quality checks run automatically on pull requests and main branch pushes
- Follow the TODO.md for planned features

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

Copyright (c) 2024 Solemare Apartment 46

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 