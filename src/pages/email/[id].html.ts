import type { APIContext } from 'astro';
import { getEditions } from '../../editions';
import { SITE_TITLE, url, pad } from '../../site';

// An email-ready copy of each edition at /email/<id>.html.
// Inline styles and absolute links only, because email clients ignore stylesheets
// and relative paths. Paste it into your newsletter tool, or let the tool pull the RSS feed.
export async function getStaticPaths() {
  const editions = await getEditions();
  return editions.map((entry) => ({ params: { id: entry.id }, props: { entry } }));
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET({ props, site }: APIContext) {
  const { entry } = props as { entry: Awaited<ReturnType<typeof getEditions>>[number] };
  const d = entry.data;
  const origin = site!.origin;
  const webUrl = new URL(url(`/editions/${entry.id}/`), site).href;
  const ink = '#0B0B0B', paper = '#F2F2EE', soft = '#E4E4DE', sans = "'Schibsted Grotesk','Helvetica Neue',Helvetica,Arial,sans-serif", serif = sans;

  let body = (entry.rendered?.html ?? '').replace(/(src|href)="\/(?!\/)/g, `$1="${origin}/`);
  // Inline the catalog styles onto the elements email clients will keep.
  body = body
    .replace(/<h2([^>]*)>/g, `<h2$1 style="font-family:${sans};font-size:12px;letter-spacing:2px;text-transform:uppercase;border-top:3px solid ${ink};padding-top:8px;margin:36px 0 16px;">`)
    .replace(/<h3([^>]*)>/g, `<h3$1 style="font-family:${sans};font-size:20px;margin:28px 0 8px;">`)
    .replace(/<p>/g, `<p style="font-family:${serif};font-size:17px;line-height:1.55;margin:0 0 14px;">`)
    .replace(/<blockquote>/g, `<blockquote style="margin:12px 0 28px;padding:10px 12px;border:1px solid ${ink};background:${soft};font-family:${sans};font-size:13px;">`)
    .replace(/<img /g, `<img style="max-width:100%;height:auto;background:#000;" `)
    .replace(/<a /g, `<a style="color:${ink};" `);

  const cover = d.cover
    ? `<img src="${new URL(url(d.cover), site).href}" alt="${esc(d.coverAlt ?? '')}" width="600" style="width:100%;max-width:600px;height:auto;background:#000;display:block;" />` +
      (d.coverCredit ? `<p style="font-family:${sans};font-size:11px;color:#4a463d;margin:6px 0 0;">${esc(d.coverCredit)}</p>` : '')
    : '';

  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(`${pad(d.number)} · ${d.title}`)}</title></head>
<body style="margin:0;padding:0;background:${paper};color:${ink};">
<div style="max-width:600px;margin:0 auto;padding:24px 16px;">
<p style="font-family:${sans};font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:0 0 4px;"><a href="${webUrl}" style="color:${ink};">Read on the web</a></p>
<p style="font-family:${sans};font-weight:900;font-size:18px;text-transform:uppercase;border-bottom:3px solid ${ink};padding-bottom:8px;margin:0 0 20px;">${SITE_TITLE}</p>
<p style="font-family:${sans};font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:0;">Edition ${pad(d.number)}</p>
<h1 style="font-family:${sans};font-size:36px;line-height:1.1;margin:4px 0 12px;">${esc(d.title)}</h1>
<p style="font-family:${serif};font-size:18px;line-height:1.5;margin:0 0 20px;">${esc(d.summary)}</p>
${cover}
${body}
</div></body></html>`;
  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}
