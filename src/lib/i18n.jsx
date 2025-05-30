import React, { createContext, useContext, useState } from 'react';

const translations = {
    pl: {
        nav: {
            apartment: 'Apartament',
            amenities: 'Udogodnienia',
            gallery: 'Galeria',
            availability: 'Dostępność',
            location: 'Lokalizacja',
            attractions: 'Atrakcje',
            contact: 'Kontakt',
            book: 'Rezerwuj'
        }
    },
    en: {
        nav: {
            apartment: 'Apartment',
            amenities: 'Amenities',
            gallery: 'Gallery',
            availability: 'Availability',
            location: 'Location',
            attractions: 'Attractions',
            contact: 'Contact',
            book: 'Book Now'
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