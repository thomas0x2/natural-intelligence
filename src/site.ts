// Site-wide settings. Edit these as the catalog grows.
export const SITE_TITLE = 'Natural Intelligence Catalog';
export const SITE_TAGLINE = 'Access to tools and ideas for minds, natural and artificial.';

// Where readers subscribe by email. Leave empty until a newsletter account exists;
// the subscribe box then points readers at the RSS feed instead.
export const SUBSCRIBE_URL = '';

export const REPO_URL = 'https://github.com/thomas0x2/natural-intelligence';

/** Prefix a root path with the site's base path. */
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

export const pad = (n: number) => String(n).padStart(3, '0');
