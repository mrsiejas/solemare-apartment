// Environment variables
export const config = {
    GOOGLE_CALENDAR_ID: process.env.GOOGLE_CALENDAR_ID,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    // FORMSPREE_ID: process.env.FORMSPREE_ID // Uncomment when Formspree is set up
};

// Validate environment variables
const requiredEnvVars = [
    'GOOGLE_CALENDAR_ID',
    'GOOGLE_MAPS_API_KEY',
    // 'FORMSPREE_ID' // Uncomment when Formspree is set up
];

requiredEnvVars.forEach(envVar => {
    if (!config[envVar]) {
        console.warn(`Missing required environment variable: ${envVar}`);
    }
}); 