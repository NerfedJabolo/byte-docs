import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Byte',
			social: {
				github: 'https://github.com/bit-js/byte',
			},
			sidebar: [
				{
					label: 'Start',
					link: '/start'
				},
				{
					label: 'Concepts',
					items: [
						{ label: 'Routing', link: '/concepts/routing' },
						{ label: 'Context', link: '/concepts/context' },
						{ label: 'Validator', link: '/concepts/validator' },
						{ label: 'Middleware', link: '/concepts/middleware' },
						{ label: 'Plugin', link: '/concepts/plugin' }
					]
				},
				{
					label: 'Utilities',
					items: [
						{ label: 'Response', link: '/utils/response' },
						{ label: 'CORS', link: '/utils/cors' },
						{ label: 'CSRF', link: '/utils/csrf' },
						{ label: 'Query', link: '/utils/query' },
						{ label: 'Client', link: '/utils/client' }
					]
				}
			],
		}),
	],
});
