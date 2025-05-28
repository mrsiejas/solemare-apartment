// Google Calendar integration
function initCalendar() {
    const calendarId = GOOGLE_CALENDAR_ID;
    if (!calendarId) {
        console.error('Google Calendar ID not set');
        return;
    }

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
    iframe.src = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0&mode=MONTH&hl=${getCurrentLanguage()}`;
    iframe.style.border = '0';
    iframe.width = '100%';
    iframe.height = '600';
    iframe.frameBorder = '0';
    iframe.scrolling = 'no';

    calendarContainer.appendChild(iframe);
    calendarSection.appendChild(calendarContainer);

    // Insert calendar section before contact section
    document.querySelector('main').insertBefore(
        calendarSection,
        document.querySelector('#contact')
    );
}

// Initialize calendar when DOM is ready
document.addEventListener('DOMContentLoaded', initCalendar);

// Update calendar when language changes
document.addEventListener('languageChanged', () => {
    const iframe = document.querySelector('.calendar-container iframe');
    if (iframe) {
        iframe.src = iframe.src.replace(/hl=[a-z]{2}/, `hl=${getCurrentLanguage()}`);
    }
});
