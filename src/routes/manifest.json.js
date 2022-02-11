/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	return {
		body: {
			short_name: 'Edit Next',
			name: 'Edit Next',
			start_url: '/',
			icons: [
				{
					src: 'logo_512.png',
					type: 'image/png',
					sizes: '512x512'
				}
			],
			background_color: '#3367D6',
			display: 'standalone',
			scope: '/',
			theme_color: '#3367D6',
			shortcuts: [],
			description: ''
		}
	};
}
