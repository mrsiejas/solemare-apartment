// Google Calendar integration
function initCalendar() {
    const calendarId = GOOGLE_CALENDAR_ID;

    // Debug logging
    console.log('Initializing calendar with ID:', calendarId);

    if (!calendarId) {
        console.error('Google Calendar ID not set. Please check Cloudflare Pages environment variables.');
        showCalendarError('Calendar configuration is missing. Please contact the administrator.');
        return;
    }

    try {
        // Create calendar section
        const calendarSection = document.createElement('section');
        calendarSection.id = 'calendar';
        calendarSection.className = 'calendar';

        // Add title
        const title = document.createElement('h2');
        title.setAttribute('data-translate', 'sections.availability');
        title.textContent = getTranslation('sections.availability');
        calendarSection.appendChild(title);

        // Create calendar container
        const calendarContainer = document.createElement('div');
        calendarContainer.className = 'calendar-container';

        // Create iframe for calendar embed
        const iframe = document.createElement('iframe');
        const calendarUrl = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0&mode=MONTH&hl=${getCurrentLanguage()}`;

        console.log('Calendar URL:', calendarUrl);

        iframe.src = calendarUrl;
        iframe.style.border = '0';
        iframe.width = '100%';
        iframe.height = '600';
        iframe.frameBorder = '0';
        iframe.scrolling = 'no';

        // Add error handling for iframe
        iframe.onerror = () => {
            console.error('Failed to load calendar iframe');
            showCalendarError('Failed to load calendar. Please try again later.');
        };

        // Add load event handler
        iframe.onload = () => {
            console.log('Calendar iframe loaded successfully');
            calendarContainer.classList.add('loaded');
        };

        calendarContainer.appendChild(iframe);
        calendarSection.appendChild(calendarContainer);

        // Insert calendar section before contact section
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            document.querySelector('main').insertBefore(calendarSection, contactSection);
        } else {
            console.error('Contact section not found');
            document.querySelector('main').appendChild(calendarSection);
        }
    } catch (error) {
        console.error('Error initializing calendar:', error);
        showCalendarError('An error occurred while loading the calendar. Please try again later.');
    }
}

// Function to show error message
function showCalendarError(message) {
    const calendarSection = document.createElement('section');
    calendarSection.id = 'calendar';
    calendarSection.className = 'calendar';

    const title = document.createElement('h2');
    title.setAttribute('data-translate', 'sections.availability');
    title.textContent = getTranslation('sections.availability');
    calendarSection.appendChild(title);

    const errorContainer = document.createElement('div');
    errorContainer.className = 'calendar-error';
    errorContainer.innerHTML = `
        <p>${message}</p>
        <p class="debug-info" style="display: none;">
            Calendar ID: ${GOOGLE_CALENDAR_ID || 'not set'}<br>
            Language: ${getCurrentLanguage()}
        </p>
    `;
    calendarSection.appendChild(errorContainer);

    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        document.querySelector('main').insertBefore(calendarSection, contactSection);
    } else {
        document.querySelector('main').appendChild(calendarSection);
    }
}

// Initialize calendar when DOM is ready
document.addEventListener('DOMContentLoaded', initCalendar);

// Update calendar when language changes
document.addEventListener('languageChanged', () => {
    const iframe = document.querySelector('.calendar-container iframe');
    if (iframe) {
        const newUrl = iframe.src.replace(/hl=[a-z]{2}/, `hl=${getCurrentLanguage()}`);
        console.log('Updating calendar language:', newUrl);
        iframe.src = newUrl;
    }
});
