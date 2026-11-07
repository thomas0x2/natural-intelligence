import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getEditions } from '../editions';
import { SITE_TITLE, SITE_TAGLINE, url, pad } from '../site';

// Full-content feed. Email services such as Buttondown can send each new item
// to subscribers automatically (RSS-to-email), so this feed doubles as the email pipeline.
export async function GET(context: APIContext) {
  const site = context.site!;
  const abs = (html: string) => html.replace(/(src|href)="\/(?!\/)/g, `$1="${site.origin}/`);
  const editions = await getEditions();
  return rss({
    title: SITE_TITLE,
    description: SITE_TAGLINE,
    site: new URL(url('/'), site).href,
    items: editions.map((e) => {
      const cover = e.data.cover
        ? `<p><img src="${new URL(url(e.data.cover), site).href}" alt="${e.data.coverAlt ?? ''}" /></p>`
        : '';
      return {
        title: `${pad(e.data.number)} · ${e.data.title}`,
        description: e.data.summary,
        pubDate: e.data.date,
        link: url(`/editions/${e.id}/`),
        content: cover + abs(e.rendered?.html ?? ''),
      };
    }),
  });
}
