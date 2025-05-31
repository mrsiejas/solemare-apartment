import React, { createContext, useContext, useState } from 'react';

const translations = {
    pl: {
        nav: {
            apartment: 'O nas',
            amenities: 'Udogodnienia',
            gallery: 'Galeria',
            availability: 'Dostępność',
            location: 'Lokalizacja',
            attractions: 'Atrakcje',
            contact: 'Kontakt',
            book: 'Rezerwuj'
        },
        hero: {
            title: 'Solemare Apartament 46',
            subtitle: 'Wypoczynek w sercu Kątów Rybackich',
            cta: 'Sprawdź dostępność'
        },
        apartment: {
            title: 'Cześć!',
            description: 'Witaj w naszym luksusowym apartamencie z widokiem na morze, gdzie komfort spotyka się z elegancją. Idealnie usytuowany z zapierającym dech w piersiach widokiem na ocean, nasz nowoczesny apartament oferuje idealne połączenie relaksu i wygody dla Twojego wymarzonego wypoczynku.',
            features: {
                guests: 'Goście',
                beds: 'Łóżka',
                bathrooms: 'Łazienki',
                size: 'Powierzchnia'
            }
        },
        amenities: {
            title: 'Udogodnienia',
            subtitle: 'Wszystko, czego potrzebujesz do komfortowego pobytu'
        },
        gallery: {
            title: 'Galeria',
            subtitle: 'Zobacz nasz apartament'
        },
        availability: {
            title: 'Sprawdź dostępność',
            subtitle: 'Zobacz nasz kalendarz, aby sprawdzić dostępność w wybranych terminach.',
            calendarTitle: 'Kalendarz dostępności',
            bookingInfo: {
                title: 'Informacje o rezerwacji',
                minStay: 'Minimalny pobyt: 3 noce',
                checkIn: 'Czas zameldowania: 15:00',
                checkOut: 'Czas wymeldowania: 11:00',
                deposit: 'Wymagana zaliczka 50% do potwierdzenia rezerwacji',
                payment: 'Pełna płatność wymagana 30 dni przed przyjazdem',
                cancellation: 'Polityka anulowania: Pełny zwrot w przypadku anulowania 30 dni przed przyjazdem'
            }
        },
        location: {
            title: 'Lokalizacja',
            subtitle: 'Idealnie usytuowany w sercu miasta'
        },
        attractions: {
            title: 'Atrakcje w okolicy',
            subtitle: 'Odkryj najlepsze miejsca w okolicy'
        },
        contact: {
            title: 'Kontakt',
            subtitle: 'Skontaktuj się z nami',
            form: {
                name: 'Imię i nazwisko',
                email: 'Email',
                phone: 'Telefon',
                guests: 'Liczba gości',
                checkIn: 'Data przyjazdu',
                checkOut: 'Data wyjazdu',
                message: 'Wiadomość',
                messagePlaceholder: 'Specjalne życzenia lub pytania?',
                submit: 'Wyślij zapytanie'
            },
            businessHours: {
                title: 'Godziny pracy',
                weekdays: 'Poniedziałek - Piątek:',
                saturday: 'Sobota:',
                sunday: 'Niedziela:',
                closed: 'Zamknięte'
            }
        }
    },
    en: {
        nav: {
            apartment: 'About',
            amenities: 'Amenities',
            gallery: 'Gallery',
            availability: 'Availability',
            location: 'Location',
            attractions: 'Attractions',
            contact: 'Contact',
            book: 'Book Now'
        },
        hero: {
            title: 'Solemare Apartment 46',
            subtitle: 'Stay in the heart of Kąty Rybackie',
            cta: 'Check Availability'
        },
        apartment: {
            title: 'Hi!',
            description: 'Welcome to our luxurious beachfront apartment, where comfort meets elegance. Perfectly situated with stunning ocean views, our modern apartment offers the ideal blend of relaxation and convenience for your perfect getaway.',
            features: {
                guests: 'Guests',
                beds: 'Beds',
                bathrooms: 'Bathrooms',
                size: 'Size'
            }
        },
        amenities: {
            title: 'Amenities',
            subtitle: 'Everything you need for a comfortable stay'
        },
        gallery: {
            title: 'Gallery',
            subtitle: 'Take a look at our apartment'
        },
        availability: {
            title: 'Check Availability',
            subtitle: 'View our calendar to check availability for your desired dates.',
            calendarTitle: 'Availability Calendar',
            bookingInfo: {
                title: 'Booking Information',
                minStay: 'Minimum stay: 3 nights',
                checkIn: 'Check-in time: 3:00 PM',
                checkOut: 'Check-out time: 11:00 AM',
                deposit: '50% deposit required to secure booking',
                payment: 'Full payment due 30 days before arrival',
                cancellation: 'Cancellation policy: Full refund if cancelled 30 days before arrival'
            }
        },
        location: {
            title: 'Location',
            subtitle: 'Perfectly situated in the heart of the city'
        },
        attractions: {
            title: 'Local Attractions',
            subtitle: 'Discover the best places in the area'
        },
        contact: {
            title: 'Contact',
            subtitle: 'Get in touch with us',
            form: {
                name: 'Name',
                email: 'Email',
                phone: 'Phone',
                guests: 'Number of Guests',
                checkIn: 'Check-in Date',
                checkOut: 'Check-out Date',
                message: 'Message',
                messagePlaceholder: 'Any special requests or questions?',
                submit: 'Send Inquiry'
            },
            businessHours: {
                title: 'Business Hours',
                weekdays: 'Monday - Friday:',
                saturday: 'Saturday:',
                sunday: 'Sunday:',
                closed: 'Closed'
            }
        }
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('pl');

    const changeLanguage = (newLang) => {
        setLanguage(newLang);
        document.documentElement.lang = newLang;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const useTranslation = () => {
    const { language } = useLanguage();

    return (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };
}; 