// Environment variables
export const config = {
    GOOGLE_CALENDAR_ID: import.meta.env.VITE_GOOGLE_CALENDAR_ID,
    GOOGLE_MAPS_API_KEY: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    FORMSPREE_ID: import.meta.env.VITE_FORMSPREE_ID
};

// Validate environment variables
const requiredEnvVars = [
    'VITE_GOOGLE_CALENDAR_ID',
    'VITE_GOOGLE_MAPS_API_KEY',
    'VITE_FORMSPREE_ID'
];

requiredEnvVars.forEach(envVar => {
    if (!config[envVar]) {
        console.warn(`Missing required environment variable: ${envVar}`);
    }
}); 