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
            book: 'Rezerwuj'
        },
        hero: {
            title: 'Solemare Apartament 46',
            subtitle: 'Wypoczynek w sercu Kątów Rybackich',
            cta: 'Sprawdź dostępność'
        },
        apartment: {
            weather: 'Pogoda w Kątach',
            description: 'Nasz apartament w Kątach Rybackich znajduje się na najwyższej kondygnacji z widokiem na Zatokę Wiślaną. Oferujemy komfortowe, 40-metrowe mieszkanie z klimatyzacją i prywatnym miejscem parkingowym.\n\nW budynku dostępne są: winda, podgrzewany basen oraz plac zabaw dla dzieci. W odległości 25 minut spacerem znajduje się plaża, sklepy, restauracje oraz rezerwat kormoranów. W odległości 15 minut autem znajduje się Krynica Morska.',
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
                wifi: 'Wi-Fi',
                tv: 'Smart TV',
                parking: 'Parking',
                coffee: 'Ekspres do kawy',
                kitchen: 'W pełni wyposażona kuchnia',
                ac: 'Klimatyzacja',
                pool: 'Podgrzewany basen',
                dishwasher: 'Zmywarka do naczyń',
                gym: 'Siłownia na świeżym powietrzu',
                melex: 'Transport Melexem na plażę'
            }
        },
        gallery: {
            title: 'Galeria',
            subtitle: 'Zobacz nasz apartament',
            images: {
                bedroom: {
                    alt: "Apartament Solemare 46 - Sypialnia",
                    description: "Sypialnia z łóżkiem 2 osobowym"
                },
                bathroom1: {
                    alt: "Apartament Solemare 46 - Łazienka",
                    description: "Łazienka z prysznicem i deszczownicą"
                },
                bathroom2: {
                    alt: "Apartament Solemare 46 - Łazienka",
                    description: "Łazienka"
                },
                kitchen: {
                    alt: "Solemare Apartament 46 - Kuchnia",
                    description: "W pełni wyposażona kuchnia: średnia lodówka, zmywarka, mikrofalówka i płyta indukcyjna"
                },
                hallway: {
                    alt: "Solemare Apartament 46 - Korytarz",
                    description: "Wejście do mieszkania i korytarz"
                },
                terrace: {
                    alt: "Solemare Apartament 46 - Taras",
                    description: "Przestronny taras z krzesłami i stolikiem kawowym"
                },
                pool: {
                    alt: "Solemare Apartament 46 - Basen i Parking",
                    description: "Podgrzewany basen i miejsce parkingowe"
                },
                view: {
                    alt: "Solemare Apartament 46 - Widok na Zatokę Wiślaną",
                    description: "Widok na Zatokę Wiślaną z tarasu"
                },
                beach: {
                    alt: "Solemare Apartament 46 - Plaża w kątach",
                    description: "Duży pokój i przesteń jadalniana"
                }
            }
        },
        availability: {
            title: 'Sprawdź dostępność',
            calendarTitle: 'Kalendarz dostępności',
            bookingInfo: {
                title: 'Informacje o rezerwacji',
                minStay: 'Minimalny pobyt: 2 noce',
                checkIn: 'Czas zameldowania: 14:00',
                checkOut: 'Czas wymeldowania: 11:00',
                noAnimals: 'Zwierzęta nie są dozwolone',
                noParties: 'Organizowanie imprez jest zabronione',
                smoking: 'Palenie dozwolone tylko na tarasie',
                bookingComMessage: 'Sprawdź dostępność i zarezerwuj pobyt bezpiecznie przez Booking.com.'
            }
        },
        location: {
            title: 'Lokalizacja',
            subtitle: 'Idealnie usytuowany w sercu Kątów Rybackich',
            description: 'Nasz apartament znajduje się w Kątach Rybackich między Zatoką Gdańską i Zalewem Wiślanym, zapewniając łatwy dostęp do plaży i lokalnych atrakcji.',
            distances: {
                beach: '2 minuty spacerem do plaży',
                restaurants: '5 minut do restauracji i sklepów',
                reserve: '10 minut do rezerwatu kormoranów',
                krynica: '15 minut do Krynicy Morskiej'
            },
            getDirections: 'Pokaż trasę'
        },
        attractions: {
            title: 'Atrakcje i Jedzenie',
            subtitle: 'Odkryj najlepsze miejsca w okolicy',
            categories: {
                attractions: 'Atrakcje',
                food: 'Jedzenie'
            },
            items: {
                beach: {
                    name: 'Plaża 51 Kąty Rybackie',
                    description: 'Piękna plaża z parkingiem dla samochodów.',
                    distance: '2.4 km spacerem'
                },
                vistulaLagoonMuseum: {
                    name: 'Muzeum Zalewu Wiślanego',
                    description: 'Muzeum prezentujące historię i kulturę regionu Zalewu Wiślanego.',
                    distance: 'ul. Rybacka 64, Kąty Rybackie'
                },
                stutthofMuseum: {
                    name: 'Muzeum Stutthof',
                    description: 'Miejsce pamięci i muzeum historyczne.',
                    distance: 'ul. Muzealna 6, Sztutowo'
                },
                ropePark: {
                    name: 'Park Linowy dla Dzieci',
                    description: 'Atrakcyjny park linowy z trasami dostosowanymi do różnych grup wiekowych.',
                    distance: 'ul. Gdańska 12, Stegna'
                },
                pirateTower: {
                    name: 'Wieża Obserwacyjna "Góra Pirat"',
                    description: 'Wieża widokowa z panoramą na okolicę.',
                    distance: 'w okolicy'
                },
                bikeTrails: {
                    name: 'Trasy Rowerowe',
                    description: 'Sieć tras rowerowych, w tym popularna trasa R10.',
                    distance: 'dostępne w okolicy'
                },
                livio: {
                    name: 'Livio - Sklep Spożywczy',
                    description: 'Lokalny sklep spożywczy z podstawowymi produktami.',
                    distance: '300 m od apartamentu'
                },
                polomarket: {
                    name: 'Polomarket i Biedronka',
                    description: 'Duże sieci handlowe z szerokim asortymentem.',
                    distance: 'w Sztutowie'
                },
                fishBar: {
                    name: 'Bar Rybny u Basi',
                    description: 'Lokalny bar serwujący świeże dania rybne.',
                    distance: '150 m od apartamentu'
                },
                tristan: {
                    name: 'Restauracja Kobaltowa',
                    description: 'Tristan Hotel Restauracja',
                    distance: '350 m od apartamentu'
                },
                sztutozeria: {
                    name: 'Sztutozeria',
                    description: 'Pizzeria serwująca włoskie specjały.',
                    distance: 'ul. Obozowa 4, Sztutowo'
                }
            }
        },
        contact: {
            title: 'Rezerwuj',
            subtitle: 'Zarezerwuj swój pobyt',
            form: {
                name: 'Imię i nazwisko',
                email: 'Email',
                phone: 'Telefon',
                guests: 'Liczba gości',
                checkIn: 'Data przyjazdu',
                checkOut: 'Data wyjazdu',
                message: 'Wiadomość',
                messagePlaceholder: 'Specjalne życzenia lub pytania?',
                submit: 'Wyślij zapytanie',
                sending: 'Wysyłam',
                emailError: 'Wprowadź poprawny adres email',
                minStayError: 'Minimalny pobyt to 2 noce',
                maxStayError: 'Maksymalny pobyt to 14 nocy',
                success: {
                    title: 'Zapytanie wysłane!',
                    description: 'Otrzymaliśmy Twoje zapytanie i odpowiemy najszybciej jak to możliwe.'
                },
                error: {
                    title: 'Błąd',
                    description: 'Wystąpił błąd podczas wysyłania zapytania. Spróbuj ponownie.'
                }
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
            book: 'Book Now'
        },
        hero: {
            title: 'Solemare Apartment 46',
            subtitle: 'Stay in the heart of Kąty Rybackie',
            cta: 'Check Availability'
        },
        apartment: {
            weather: 'Weather in Kąty',
            description: 'Our apartment in Kąty Rybackie is located on the top floor with a view of the Vistula Lagoon. We offer a comfortable, 40-square-meter apartment with air conditioning and private parking.\n\nAvailable in the building: elevator, heated swimming pool, and children\'s playground. Within a 25-minute walk, you\'ll find the beach, shops, restaurants, and the Cormorant Reserve. Krynica Morska is a 15-minute drive away.',
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
                melex: 'Electric cart transport to the beach'
            }
        },
        gallery: {
            title: 'Gallery',
            subtitle: 'Take a look at our apartment',
            images: {
                bedroom: {
                    alt: "Solemare Apartment 46 - Bedroom",
                    description: "Bedroom with a double bed"
                },
                bathroom1: {
                    alt: "Solemare Apartment 46 - Bathroom",
                    description: "Bathroom with shower and rain shower"
                },
                bathroom2: {
                    alt: "Solemare Apartment 46 - Bathroom",
                    description: "Bathroom"
                },
                kitchen: {
                    alt: "Solemare Apartment 46 - Kitchen",
                    description: "Fully equipped kitchen: medium refrigerator, dishwasher, microwave, and induction hob"
                },
                hallway: {
                    alt: "Solemare Apartment 46 - Hallway",
                    description: "Apartment entrance and hallway"
                },
                terrace: {
                    alt: "Solemare Apartment 46 - Terrace",
                    description: "Spacious terrace with chairs and coffee table"
                },
                pool: {
                    alt: "Solemare Apartment 46 - Pool and Parking",
                    description: "Heated swimming pool and parking space"
                },
                view: {
                    alt: "Solemare Apartment 46 - Vistula Lagoon View",
                    description: "View of the Vistula Lagoon from the terrace"
                },
                beach: {
                    alt: "Solemare Apartment 46 - Beach in Kąty",
                    description: "Large room and dining area"
                }
            }
        },
        availability: {
            title: 'Check Availability',
            calendarTitle: 'Availability Calendar',
            bookingInfo: {
                title: 'Booking Information',
                minStay: 'Minimum stay: 2 nights',
                checkIn: 'Check-in time: 14:00',
                checkOut: 'Check-out time: 11:00',
                noAnimals: 'Pets are not allowed',
                noParties: 'Parties are not allowed',
                smoking: 'Smoking is only allowed on the terrace',
                bookingComMessage: 'Check availability and book securely via Booking.com.'
            }
        },
        location: {
            title: 'Location',
            subtitle: 'Perfectly situated in the heart of Kąty Rybackie',
            description: 'Our apartment is located in Kąty Rybackie between the Gdańsk Bay and the Vistula Lagoon, providing easy access to the beach and local attractions.',
            distances: {
                beach: '2 minutes walk to the beach',
                restaurants: '5 minutes to restaurants and shops',
                reserve: '10 minutes to the Cormorant Reserve',
                krynica: '15 minutes to Krynica Morska'
            },
            getDirections: 'Get Directions'
        },
        attractions: {
            title: 'Attractions & Food',
            subtitle: 'Discover the best places in the area',
            categories: {
                attractions: 'Attractions',
                food: 'Food'
            },
            items: {
                beach: {
                    name: 'Beach 51 Kąty Rybackie',
                    description: 'Beautiful beach with car parking.',
                    distance: '2.4 km walk'
                },
                vistulaLagoonMuseum: {
                    name: 'Vistula Lagoon Museum',
                    description: 'Museum showcasing the history and culture of the Vistula Lagoon region.',
                    distance: 'Rybacka 64, Kąty Rybackie'
                },
                stutthofMuseum: {
                    name: 'Stutthof Museum',
                    description: 'Memorial site and historical museum.',
                    distance: 'Muzealna 6, Sztutowo'
                },
                ropePark: {
                    name: 'Rope Park for Children',
                    description: 'Attractive rope park with routes adapted to different age groups.',
                    distance: 'Gdańska 12, Stegna'
                },
                pirateTower: {
                    name: 'Observation Tower "Pirate Hill"',
                    description: 'Observation tower with panoramic views of the area.',
                    distance: 'in the vicinity'
                },
                bikeTrails: {
                    name: 'Bike Trails',
                    description: 'Network of cycling routes, including the popular R10 route.',
                    distance: 'available in the area'
                },
                livio: {
                    name: 'Livio - Grocery Store',
                    description: 'Local grocery store with basic products.',
                    distance: '300 m from the apartment'
                },
                polomarket: {
                    name: 'Polomarket and Biedronka',
                    description: 'Large retail chains with a wide range of products.',
                    distance: 'in Sztutowo'
                },
                fishBar: {
                    name: 'Fish Bar at Basia\'s',
                    description: 'Local bar serving fresh fish dishes.',
                    distance: '150 m from the apartment'
                },
                tristan: {
                    name: 'Kobaltowa Restaurant',
                    description: 'Tristan Hotel Restaurant',
                    distance: '350 m from the apartment'
                },
                sztutozeria: {
                    name: 'Sztutozeria',
                    description: 'Pizzeria serving Italian specialties.',
                    distance: 'Obozowa 4, Sztutowo'
                }
            }
        },
        contact: {
            title: 'Book Now',
            subtitle: 'Book your stay',
            form: {
                name: 'Name',
                email: 'Email',
                phone: 'Phone',
                guests: 'Number of Guests',
                checkIn: 'Check-in Date',
                checkOut: 'Check-out Date',
                message: 'Message',
                messagePlaceholder: 'Any special requests or questions?',
                submit: 'Send Inquiry',
                sending: 'Sending',
                emailError: 'Please enter a valid email address',
                minStayError: 'Minimum stay is 2 nights',
                maxStayError: 'Maximum stay is 14 nights',
                success: {
                    title: 'Inquiry Sent!',
                    description: 'We\'ve received your inquiry and will get back to you shortly.'
                },
                error: {
                    title: 'Error',
                    description: 'There was an error sending your inquiry. Please try again.'
                }
            }
        }
    }
};

const LanguageContext = createContext();

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

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('pl');
    const [isSubmitting, setIsSubmitting] = useState(false);

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