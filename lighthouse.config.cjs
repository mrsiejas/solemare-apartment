module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run dev',
            url: ['http://localhost:5173'],
            numberOfRuns: 3,
        },
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.8 }],
                'categories:accessibility': ['error', { minScore: 0.9 }],
                'categories:best-practices': ['error', { minScore: 0.9 }],
                'categories:seo': ['error', { minScore: 0.9 }],
                'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
                'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
                'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
                'total-blocking-time': ['error', { maxNumericValue: 300 }],
                'interactive': ['error', { maxNumericValue: 3500 }],
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
}; 