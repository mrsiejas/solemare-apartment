// Google Calendar API integration
function loadGoogleCalendarAPI() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
        gapi.load('client:auth2', initClient);
    };
    document.head.appendChild(script);
}

function initClient() {
    gapi.client.init({
        apiKey: window.ENV_GOOGLE_CALENDAR_API_KEY,
        clientId: window.ENV_GOOGLE_CLIENT_ID,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.readonly'
    }).then(() => {
        // Listen for sign-in state changes
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        // Handle the initial sign-in state
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        listUpcomingEvents();
    }
}

function listUpcomingEvents() {
    gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
    }).then(response => {
        const events = response.result.items;
        displayEvents(events);
    });
}

function displayEvents(events) {
    const calendarContainer = document.createElement('div');
    calendarContainer.className = 'calendar-container';

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'calendar-event';

        const start = new Date(event.start.dateTime || event.start.date);
        const end = new Date(event.end.dateTime || event.end.date);

        eventElement.innerHTML = `
            <h3>${event.summary}</h3>
            <p>${start.toLocaleDateString()} - ${end.toLocaleDateString()}</p>
        `;

        calendarContainer.appendChild(eventElement);
    });

    // Add calendar to the page
    const calendarSection = document.createElement('section');
    calendarSection.id = 'calendar';
    calendarSection.innerHTML = '<h2>Dostępność</h2>';
    calendarSection.appendChild(calendarContainer);

    document.querySelector('main').insertBefore(
        calendarSection,
        document.querySelector('#contact')
    );
}

// Load calendar when DOM is ready
document.addEventListener('DOMContentLoaded', loadGoogleCalendarAPI);
