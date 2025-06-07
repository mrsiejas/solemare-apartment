# n8n Workflows

This directory contains n8n workflows used in the Solemare Apartment project.

## Directory Structure

```
n8n/
├── workflows/           # n8n workflow files
│   └── booking-assistant.json  # AI-powered booking assistant workflow
└── README.md           # This file
```

## Workflows

### Booking Assistant

The booking assistant workflow (`workflows/booking-assistant.json`) is an AI-powered system that handles apartment booking requests. It integrates with:

- OpenAI for natural language processing
- Google Calendar for availability management
- Webhook for receiving booking requests

#### Features

- **AI-Powered Processing**: Uses GPT-4 to understand and process booking requests
- **Calendar Integration**: Automatically checks availability and creates bookings
- **Bilingual Support**: Handles requests in both Polish and English
- **Smart Decision Making**: Can suggest alternative dates if requested dates are unavailable
- **Customizable Rules**: Easy to modify booking rules and business logic

#### Configuration

The workflow requires several credentials and configurations:

1. **OpenAI API**
   - Follow the [OpenAI API setup guide](https://platform.openai.com/docs/quickstart)
   - Add the credentials in n8n

2. **Google Calendar**
   - Follow the [Google Calendar API setup guide](https://developers.google.com/calendar/api/guides/auth)
   - Add the credentials in n8n
   - Create a dedicated calendar for bookings

3. **Webhook**
   - The workflow creates a webhook automatically
   - Update the webhook URL in your frontend application

#### Usage

1. Import the workflow into your n8n instance
2. Configure all required credentials
3. Activate the workflow
4. Update your frontend application with the new webhook URL

#### Testing

You can test the workflow using the n8n UI or by sending POST requests to the webhook URL. See the main README.md for example request structure.

## Development

When modifying workflows:

1. Export the workflow from n8n
2. Save it in the appropriate directory
3. Test thoroughly before committing
4. Update documentation if necessary

## Security

- Never commit sensitive credentials
- Use environment variables for sensitive data
- Regularly rotate API keys and credentials
- Monitor webhook usage and implement rate limiting if needed 