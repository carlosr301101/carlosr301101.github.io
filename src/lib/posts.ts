import { getCollection, type CollectionEntry } from 'astro:content'

export type BlogPost = CollectionEntry<'blog'>

/**
 * Returns the blog entries that should be visible on the site, excluding drafts.
 */
export async function getPublishedPosts(): Promise<BlogPost[]> {
	const posts = await getCollection('blog')
	return posts.filter((post) => !post.data.draft)
}
