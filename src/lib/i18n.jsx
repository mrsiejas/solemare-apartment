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
            title: 'Hej!',
            welcome: 'Hej!',
            description: 'Nasz apartament w Kątach Rybackich znajduje się na najwyższej kondygnacji z widokiem na Zatokę Wiślaną. Oferujemy komfortowe, 40-metrowe mieszkanie z klimatyzacją i prywatnym miejscem parkingowym.\n\nW budynku dostępne są: winda, podgrzewany basen oraz plac zabaw dla dzieci. W odległości 5 minut spacerem znajduje się plaża, sklepy, restauracje oraz rezerwat kormoranów. W odległości 15 minut spacerem znajduje się Krynica Morska.',
            features: {
                guests: 'Goście',
                beds: 'Łóżka',
                bathrooms: 'Łazienki',
                size: 'Powierzchnia'
            }
        },
        amenities: {
            title: 'Udogodnienia',
            subtitle: 'Wszystko, czego potrzebujesz do komfortowego pobytu',
            items: {
                wifi: 'Darmowe Wi-Fi',
                tv: 'Smart TV',
                parking: 'Parking',
                coffee: 'Ekspres do kawy',
                kitchen: 'W pełni wyposażona kuchnia',
                ac: 'Klimatyzacja',
                pool: 'Podgrzewany basen',
                dishwasher: 'Zmywarka do naczyń',
                gym: 'Siłownia na świeżym powietrzu',
                security: 'System bezpieczeństwa'
            }
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
            subtitle: 'Odkryj najlepsze miejsca w okolicy',
            categories: {
                beaches: 'Plaże',
                restaurants: 'Restauracje',
                entertainment: 'Rozrywka'
            },
            items: {
                southBeach: {
                    name: 'Plaża Południowa',
                    description: 'Słynna plaża z białym piaskiem i turkusową wodą, idealna do opalania i obserwowania ludzi.',
                    distance: '5 min spacerem'
                },
                northShore: {
                    name: 'Park Północny',
                    description: 'Spokojniejsza plaża z doskonałymi warunkami do pływania i pięknymi widokami na zachód słońca.',
                    distance: '15 min spacerem'
                },
                hauloverBeach: {
                    name: 'Plaża Haulover',
                    description: 'Przestronna plaża z doskonałymi udogodnieniami i wypożyczalnią sprzętu wodnego.',
                    distance: '10 min samochodem'
                },
                oceanViewBistro: {
                    name: 'Bistro z Widokiem na Ocean',
                    description: 'Ekskluzywna restauracja z owocami morza, panoramiczny widok na ocean i świeże lokalne ryby.',
                    distance: '5 min spacerem'
                },
                coastalKitchen: {
                    name: 'Kuchnia Nadmorska',
                    description: 'Restauracja farm-to-table specjalizująca się w kuchni śródziemnomorskiej z nowoczesnym akcentem.',
                    distance: '10 min spacerem'
                },
                beachsideTaco: {
                    name: 'Taco Shack przy Plaży',
                    description: 'Przytulne miejsce z autentycznym meksykańskim jedzeniem ulicznym i orzeźwiającymi margaritami.',
                    distance: '7 min spacerem'
                },
                newWorldSymphony: {
                    name: 'Nowa Światowa Symfonia',
                    description: 'Światowej klasy sala koncertowa z występami muzyki klasycznej i koncertami WALLCAST na świeżym powietrzu.',
                    distance: '15 min spacerem'
                },
                artDecoDistrict: {
                    name: 'Dzielnica Art Deco',
                    description: 'Ikoniczna dzielnica z kolorowymi zabytkowymi budynkami i wycieczkami z przewodnikiem.',
                    distance: '10 min spacerem'
                },
                perezArtMuseum: {
                    name: 'Muzeum Sztuki Pérez',
                    description: 'Muzeum sztuki współczesnej z imponującą architekturą i widokiem na nabrzeże.',
                    distance: '25 min samochodem'
                }
            }
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
            welcome: 'Hi!',
            description: 'Our apartment in Kąty Rybackie is located on the top floor with a view of the Vistula Lagoon. We offer a comfortable, 40-square-meter apartment with air conditioning and private parking.\n\nAvailable in the building: elevator, heated swimming pool, and children\'s playground. Within a 5-minute walk, you\'ll find the beach, shops, restaurants, and the Cormorant Reserve. Krynica Morska is a 15-minute walk away.',
            features: {
                guests: 'Guests',
                beds: 'Beds',
                bathrooms: 'Bathrooms',
                size: 'Size'
            }
        },
        amenities: {
            title: 'Amenities',
            subtitle: 'Everything you need for a comfortable stay',
            items: {
                wifi: 'Free Wi-Fi',
                tv: 'Smart TV',
                parking: 'Parking',
                coffee: 'Coffee Machine',
                kitchen: 'Fully Equipped Kitchen',
                ac: 'Air Conditioning',
                pool: 'Heated Swimming Pool',
                dishwasher: 'Dishwasher',
                gym: 'Outdoor Gym',
                security: 'Security System'
            }
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
            subtitle: 'Discover the best places in the area',
            categories: {
                beaches: 'Beaches',
                restaurants: 'Restaurants',
                entertainment: 'Entertainment'
            },
            items: {
                southBeach: {
                    name: 'South Beach',
                    description: 'Famous beach with white sand and turquoise waters, perfect for sunbathing and people-watching.',
                    distance: '5 min walk'
                },
                northShore: {
                    name: 'North Shore Park',
                    description: 'Quieter beach with excellent swimming conditions and beautiful sunset views.',
                    distance: '15 min walk'
                },
                hauloverBeach: {
                    name: 'Haulover Beach',
                    description: 'Spacious beach with great facilities and water sports rentals available.',
                    distance: '10 min drive'
                },
                oceanViewBistro: {
                    name: 'Ocean View Bistro',
                    description: 'Upscale seafood restaurant with panoramic ocean views and fresh local catches.',
                    distance: '5 min walk'
                },
                coastalKitchen: {
                    name: 'Coastal Kitchen',
                    description: 'Farm-to-table restaurant specializing in Mediterranean cuisine with a modern twist.',
                    distance: '10 min walk'
                },
                beachsideTaco: {
                    name: 'Beachside Taco Shack',
                    description: 'Casual spot for authentic Mexican street food and refreshing margaritas.',
                    distance: '7 min walk'
                },
                newWorldSymphony: {
                    name: 'New World Symphony',
                    description: 'World-class concert hall featuring classical music performances and outdoor WALLCAST concerts.',
                    distance: '15 min walk'
                },
                artDecoDistrict: {
                    name: 'Art Deco Historic District',
                    description: 'Iconic neighborhood with colorful historic buildings and guided walking tours.',
                    distance: '10 min walk'
                },
                perezArtMuseum: {
                    name: 'Pérez Art Museum',
                    description: 'Contemporary art museum with stunning architecture and waterfront views.',
                    distance: '25 min drive'
                }
            }
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

const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

const useTranslation = () => {
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

export { useLanguage, useTranslation }; 