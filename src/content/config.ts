import { z, defineCollection, type CollectionEntry } from 'astro:content'

const blogCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			badge: z.string().optional(),
			tags: z
				.array(z.string())
				.refine((items) => new Set(items).size === items.length, {
					message: 'tags must be unique',
				})
				.optional(),
			timeRead: z.number().optional(),
		}),
})

const storeCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		custom_link_label: z.string(),
		custom_link: z.string().optional(),
		updatedDate: z.coerce.date(),
		pricing: z.string().optional(),
		oldPricing: z.string().optional(),
		badge: z.string().optional(),
		checkoutUrl: z.string().optional(),
		heroImage: z.string().optional(),
	}),
})

export type BlogSchema = CollectionEntry<'blog'>['data']
export type StoreSchema = CollectionEntry<'store'>['data']

export const collections = {
	blog: blogCollection,
	store: storeCollection,
}
