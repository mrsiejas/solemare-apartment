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
- 📝 Contact form with n8n webhook integration
- 🎨 Modern, responsive design with Tailwind CSS
- 🖼️ Image gallery
- 🏖️ Local attractions guide
- 📅 Google Calendar display showing booked dates with future AI workflow integration (planned)
- 🌤️ Real-time weather information and forecasts for given location (planned)
- 🤖 Agentic AI workflow to automate the booking process

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
  - Security scanning (npm audit)
  - Performance monitoring (Lighthouse)
- **APIs**: 
  - Google Maps
  - Google Calendar
  - n8n Webhook
  - OpenWeatherMap (planned)
- **Version Control**: Git/GitHub

## Project Structure

```
solemare-apartment/
├── src/                 # Source files
│   ├── components/      # React components
│   ├── lib/             # Utility functions and libraries
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── dist/                # Build output
└── configuration files  # Various config files
```

## Agentic AI Workflow

```
[Webhook] → [Google Calendar Check] → [Decision Node] → [Email Response] → [Calendar Update] → [Owner Notification]
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
     - `N8N_WEBHOOK_URL`
   - Preview environment (all other branches):
     - Same variables as production
   - `OPENWEATHERMAP_API_KEY` (for future use)

## Development

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- npm (comes with Node.js)
- Git

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/solemare-apartment.git
   cd solemare-apartment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Testing GitHub Actions Workflows Locally

You can test GitHub Actions workflows locally using `act`, a tool that allows you to run GitHub Actions locally:

1. Install `act`:
   ```bash
   # Using Homebrew
   brew install act
   
   # Or using the official installer
   curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash
   ```

2. Run specific jobs:
   ```bash
   # Run the quality check job
   act -j quality
   
   # Run a specific workflow
   act workflow_dispatch -e .github/workflows/main.yml
   ```

3. Available workflows:
   - `quality`: Runs code quality checks (HTML, CSS validation, npm audit)
   - `deploy-preview`: Deploys to preview environment
   - `deploy-production`: Deploys to production environment

Note: Some jobs might require environment variables. You can create a `.secrets` file in your project root to provide these:
```bash
CLOUDFLARE_API_TOKEN=your_token
CLOUDFLARE_ACCOUNT_ID=your_account_id
```

## Deployment

The project is deployed to Cloudflare Pages. The CI/CD pipeline handles deployments automatically based on pushes to the `preview` and `main` branches.

### Cloudflare Pages Configuration

Ensure the following build configurations are set in your Cloudflare Pages project settings:

-   **Build command**: `npm run build`
-   **Build output directory**: `dist`
-   **Node.js version**: Consider setting the Node.js version (e.g., 20) to match your `.nvmrc` file for consistency.

### Environment Variables

Make sure to set the necessary environment variables in your Cloudflare Pages project settings for both `Production` and `Preview` environments. These variables are required for certain application functionalities.

-   `GOOGLE_MAPS_API_KEY`
-   `GOOGLE_CALENDAR_ID`
-   `N8N_WEBHOOK_URL`
-   `OPENWEATHERMAP_API_KEY`

It is recommended to mark these variables as 'Encrypted' for security.

## Local Testing

### Running Quality Checks Locally

Before pushing your changes, you can run the quality checks locally to catch potential issues early. This requires having the necessary tools installed globally or within your project's `node_modules`.

-   **HTML Validation**: `npx html-validate index.html`
-   **CSS Validation**: `npx stylelint "src/**/*.css" "src/**/*.jsx"`
-   **JavaScript Validation**: `npx eslint "src/**/*.{js,jsx}"`
-   **Dependency Vulnerability Scanning**: `npm audit --production --audit-level=moderate`

### Running Accessibility Tests Locally

You can run the accessibility tests locally after building your project. Navigate to the project root and run:

```bash
npm install
npm run build
node scripts/accessibility-test.js
```

Note: This requires Node.js and npm to be installed.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## n8n Workflow Integration

The project includes an AI-powered booking assistant workflow for n8n. This workflow handles the contact form submissions and automates the booking process.

### Workflow Location
The workflow file is located in `n8n/workflows/booking-assistant.json`.

### Prerequisites
- n8n instance (self-hosted or cloud)
- OpenAI API key
- Google Calendar API credentials
- A Google Calendar for managing bookings

### Installation

1. Install n8n CLI following the [official installation guide](https://docs.n8n.io/hosting/installation/npm/)

2. Import the workflow:
   ```bash
   # Using n8n CLI
   n8n import --input=n8n/workflows/booking-assistant.json

   # Or manually through n8n UI:
   # 1. Go to your n8n instance
   # 2. Click "Workflows" in the sidebar
   # 3. Click "Import from File"
   # 4. Select the booking-assistant.json file
   ```

3. Configure the workflow:
   - Replace `YOUR_OPENAI_CREDENTIALS_ID` with your OpenAI API credentials
   - Replace `YOUR_GOOGLE_CALENDAR_CREDENTIALS_ID` with your Google Calendar credentials
   - Replace `YOUR_CALENDAR_ID` with your Google Calendar ID
   - Update the webhook URL in your frontend application to match the new webhook URL

4. Activate the workflow in n8n

### Workflow Features
- AI-powered booking assistant
- Automatic calendar availability checking
- Bilingual support (Polish/English)
- Customizable booking rules
- Email notifications

### Testing the Workflow
You can test the workflow by sending a POST request to the webhook URL with the following structure:
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "123456789",
  "guests": "2",
  "checkIn": "2024-04-01",
  "checkOut": "2024-04-05",
  "message": "Test booking",
  "language": "en"
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact Form Provider Toggle

The contact form supports two providers: n8n webhook and Formspree. You can control which provider is used via the environment variable `VITE_CONTACT_FORM_PROVIDER`.

- If `VITE_CONTACT_FORM_PROVIDER` is set to `n8n`, the form will POST to the n8n webhook URL (`VITE_N8N_WEBHOOK_URL`).
- If `VITE_CONTACT_FORM_PROVIDER` is set to `formspree` or is not set, the form will POST to Formspree (`VITE_FORMSPREE_ENDPOINT`, default: `https://formspree.io/f/xovwaplo`).

### Required Environment Variables

- `VITE_CONTACT_FORM_PROVIDER` (optional, values: `n8n` or `formspree`, default: `formspree`)
- `VITE_N8N_WEBHOOK_URL` (required if using n8n)
- `VITE_FORMSPREE_ENDPOINT` (optional, defaults to `https://formspree.io/f/xovwaplo`)

Example usage:
```env
# For n8n
VITE_CONTACT_FORM_PROVIDER=n8n
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance/webhook/your-id

# For Formspree (default)
# VITE_CONTACT_FORM_PROVIDER=formspree
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
``` 