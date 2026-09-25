import rss from '@astrojs/rss'
import { SITE_TITLE, SITE_DESCRIPTION } from '../config'
import createSlug from '../lib/createSlug'
import { getPublishedPosts } from '../lib/posts'

export async function GET() {
	const blog = await getPublishedPosts()
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${createSlug(post.data.title, post.slug)}/`,
		})),
	})
}
