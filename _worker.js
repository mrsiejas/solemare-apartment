export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // Only process HTML files
        if (!url.pathname.endsWith('.html') && url.pathname !== '/') {
            return env.ASSETS.fetch(request);
        }

        // Get the HTML content
        let response = await env.ASSETS.fetch(request);
        let html = await response.text();

        // Debug: Log available environment variables
        console.log('Available env vars:', Object.keys(env));
        console.log('ENV_GOOGLE_CALENDAR_ID:', env.ENV_GOOGLE_CALENDAR_ID);
        console.log('ENV_GOOGLE_MAPS_API_KEY:', env.ENV_GOOGLE_MAPS_API_KEY);
        console.log('ENV_FORMSPREE_ID:', env.ENV_FORMSPREE_ID);

        // Replace environment variables
        html = html.replace(/{{GOOGLE_MAPS_API_KEY}}/g, env.ENV_GOOGLE_MAPS_API_KEY || '');
        html = html.replace(/{{GOOGLE_CALENDAR_ID}}/g, env.ENV_GOOGLE_CALENDAR_ID || '');
        html = html.replace(/{{FORMSPREE_ID}}/g, env.ENV_FORMSPREE_ID || '');

        // Return the modified HTML
        return new Response(html, {
            headers: {
                'content-type': 'text/html;charset=UTF-8',
            },
        });
    },
}; 