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

        // Replace environment variables
        html = html.replace(/{{ENV_GOOGLE_MAPS_API_KEY}}/g, env.ENV_GOOGLE_MAPS_API_KEY);
        html = html.replace(/{{ENV_GOOGLE_CALENDAR_API_KEY}}/g, env.ENV_GOOGLE_CALENDAR_API_KEY);
        html = html.replace(/{{ENV_GOOGLE_CLIENT_ID}}/g, env.ENV_GOOGLE_CLIENT_ID);
        html = html.replace(/{{ENV_FORMSPREE_ID}}/g, env.ENV_FORMSPREE_ID);

        // Return the modified HTML
        return new Response(html, {
            headers: {
                'content-type': 'text/html;charset=UTF-8',
            },
        });
    },
}; 