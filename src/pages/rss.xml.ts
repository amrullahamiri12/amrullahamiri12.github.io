import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../lib/site';

export async function GET(context: APIContext) {
  const notes = (await getCollection('notes')).filter((entry) => !entry.data.draft);

  return rss({
    title: `${site.name} — Notes`,
    description: site.description,
    site: context.site!,
    items: notes
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((note) => ({
        title: note.data.title,
        description: note.data.description,
        pubDate: note.data.pubDate,
        link: `/notes/${note.id}/`,
      })),
  });
}
