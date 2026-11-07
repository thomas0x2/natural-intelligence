/**
 * Turns a plain markdown edition into the catalog layout:
 *
 *   ## Section            -> <section class="sec"> with a numbered header
 *   text before any ###   -> the section's intro
 *   ### Entry             -> <article class="card">
 *   ![alt](/art/plates/07-x.jpg "Plate 07 · Physarum")
 *                         -> the card's plate, with the title as its label
 *   > **Access** · ...    -> the card's access line
 *
 * Writers keep writing ordinary markdown; this plugin only regroups it.
 */
const el = (tagName, properties, children = []) => ({ type: 'element', tagName, properties: properties ?? {}, children });
const txt = (value) => ({ type: 'text', value });
const isEl = (n, tag) => n?.type === 'element' && (!tag || n.tagName === tag);
const blank = (n) => n.type === 'text' && !n.value.trim();
const textOf = (n) => (n.type === 'text' ? n.value : (n.children ?? []).map(textOf).join(''));
const cls = (n, c) => { n.properties.className = [...(n.properties.className ?? []), c]; return n; };

/** A paragraph that holds nothing but one image. */
function loneImage(n) {
  if (!isEl(n, 'p')) return null;
  const kids = n.children.filter((k) => !blank(k));
  return kids.length === 1 && isEl(kids[0], 'img') ? kids[0] : null;
}

/** "PLATE 23 · Chip die. Text" -> <figcaption><b>PLATE 23</b><span>Chip die. Text</span></figcaption> */
export function caption(title) {
  const i = title.indexOf(' · ');
  const [num, rest] = i > 0 ? [title.slice(0, i), title.slice(i + 3)] : ['', title];
  return el('figcaption', { className: ['plate-cap', 'm'] }, [el('b', {}, [txt(num)]), el('span', {}, [txt(rest)])]);
}

function plateLabel(img) {
  const title = img.properties.title;
  delete img.properties.title;
  if (!title) return null;
  const [num, name] = String(title).split(/\s+·\s+/);
  return el('div', { className: ['plate-label', 'm'] }, [el('span', {}, [txt(num)]), el('span', {}, [txt(name ?? '')])]);
}

function card(nodes) {
  const [h3, ...rest] = nodes;
  const body = rest.filter((n) => !blank(n));
  const out = [];
  const img = loneImage(body[0]);
  if (img) {
    body.shift();
    cls(img, 'plate');
    out.push(img);
    const label = plateLabel(img);
    if (label) out.push(label);
  }
  out.push(h3);
  for (const n of body) {
    if (isEl(n, 'blockquote') && /^\s*Access\b/.test(textOf(n))) cls(n, 'access');
    else if (isEl(n, 'p') && loneImage(n)) cls(loneImage(n), 'plate');
    out.push(n);
  }
  return el('article', { className: ['card'] }, out);
}

function section(nodes, number) {
  const [h2, ...rest] = nodes;
  const intro = [];
  const entries = [];
  for (const n of rest) {
    if (isEl(n, 'h3')) entries.push([n]);
    else if (entries.length) entries[entries.length - 1].push(n);
    else intro.push(n);
  }
  // A lead plate: an image in the section intro (before the first ###) runs full width.
  const lead = [];
  const leadAt = intro.findIndex((n) => loneImage(n));
  const leadImg = leadAt >= 0 ? loneImage(intro[leadAt]) : null;
  if (leadImg && entries.length) {
    intro.splice(leadAt, 1);
    cls(leadImg, 'plate');
    const title = leadImg.properties.title;
    delete leadImg.properties.title;
    const cap = title ? [caption(String(title))] : [];
    lead.push(el('figure', { className: ['lead-plate'] }, [leadImg, ...cap]));
  }
  const kicker = entries.length ? `Section ${String(number).padStart(2, '0')}` : '';
  const head = el('div', { className: ['sec-head', 'g'] }, [
    el('div', { className: ['sec-num', 'm'] }, kicker ? [txt(kicker)] : []),
    h2,
    el('div', { className: ['sec-intro'] }, intro),
  ]);
  const kids = [head, ...lead];
  if (entries.length) kids.push(el('div', { className: ['cards', 'g'] }, entries.map(card)));
  return el('section', { className: ['sec', entries.length ? 'sec-catalog' : 'sec-text'] }, kids);
}

export default function rehypeCatalog() {
  return (tree, file) => {
    // Only editions get the catalog layout; brain docs stay as plain prose.
    const path = String(file?.path ?? file?.history?.[0] ?? '');
    if (path && !path.includes('/editions/')) return;
    const groups = [];
    let pre = [];
    for (const n of tree.children) {
      if (isEl(n, 'h2')) groups.push([n]);
      else if (groups.length) groups[groups.length - 1].push(n);
      else pre.push(n);
    }
    if (!groups.length) return;
    let num = 0;
    tree.children = [...pre, ...groups.map((g) => {
      const hasEntries = g.some((n) => isEl(n, 'h3'));
      return section(g, hasEntries ? ++num : 0);
    })];
  };
}
