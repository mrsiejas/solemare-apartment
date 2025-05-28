// Language switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('language') || 'pl';

    // Set initial language
    setLanguage(currentLang);

    // Add click handlers to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });
});

function setLanguage(lang) {
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        const keys = key.split('.');
        let value = translations[lang];
        keys.forEach(k => {
            value = value[k];
        });
        element.textContent = value;
    });

    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.dataset.translatePlaceholder;
        const keys = key.split('.');
        let value = translations[lang];
        keys.forEach(k => {
            value = value[k];
        });
        element.placeholder = value;
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
} 