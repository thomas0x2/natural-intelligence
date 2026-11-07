import { getCollection } from 'astro:content';

/** Published editions, newest first. Drafts show in `npm run dev` but not in the built site. */
export async function getEditions() {
  const all = await getCollection('editions', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.number - a.data.number);
}
