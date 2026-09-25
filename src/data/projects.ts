import type { ImageMetadata } from 'astro'
import booksScrape from '../assets/books_scrape.webp'
import cargoTree from '../assets/cargo_tree.webp'
import firstApproach from '../assets/first-approach-to-optimize-precision-for-classical-1-dimensional-neutron-diffusion-problems.webp'
import int64grep from '../assets/int64grep.webp'
import minegocio from '../assets/minegocio.pythonanywhere.com.webp'
import pixRemesas from '../assets/pix-remesas.webp'
import prefabhabana from '../assets/prefabhabana.webp'
import spider from '../assets/spider.webp'
import todoFastapi from '../assets/todo-fastapi.webp'

export type ProjectCategory = 'fullstack' | 'community' | 'utils'

export interface Project {
	title: string
	img: ImageMetadata
	desc: string
	url: string
	badge: string
	category: ProjectCategory
	/** Shown on the home page. */
	featured?: boolean
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
	{ id: 'fullstack', label: 'Full-Stack Development 🌟' },
	{ id: 'community', label: 'Community Projects 🫂' },
	{ id: 'utils', label: 'Utils Projects 🛠️' },
]

export const projects: Project[] = [
	{
		title: 'Prefab Habana Solutions Landing Page',
		img: prefabhabana,
		desc: 'Landing page for Prefab Habana Solutions, a company specializing in the design and construction of prefabricated modular homes. The website showcases their services, portfolio, and contact information, providing an engaging user experience.',
		url: 'https://prefabhabana.com',
		badge: 'Wordpress',
		category: 'fullstack',
		featured: true,
	},
	{
		title: 'Pix Remesas. Sending Money to Cuba from Brazil',
		img: pixRemesas,
		desc: "An automated, full-stack MVP built with Next.js designed for seamless money transfers and digital top-ups using Brazil's Pix payment system. The platform features an instant multi-currency calculator, frictionless Google OAuth login with an integrated referral marketing system, automated secure webhook reconciliation with Mercado Pago, and instant email notifications for successful transactions.",
		url: 'https://serviceshermes.com/',
		badge: 'Django (DRF) | Next.js',
		category: 'fullstack',
		featured: true,
	},
	{
		title: 'Books to Scrape',
		img: booksScrape,
		desc: 'Developed a Next.js-based frontend for a book scraping system, featuring a responsive and user-friendly interface built with shadcn/ui, Tailwind CSS, and TypeScript. Integrated axios to communicate with a FAST API backend, enabling users to trigger scraping jobs.',
		url: 'https://github.com/carlosr301101/book_scrape',
		badge: 'FastAPI | Next.js',
		category: 'fullstack',
	},
	{
		title: 'Mi Negocio Web App',
		img: minegocio,
		desc: 'Developed and maintain a retail sales management platform for small businesses, enabling them to showcase products and services online. Implemented JWT-based authentication, a responsive Bootstrap frontend for an intuitive shopping experience, and a lightweight P2P payment integration via QR codes and WhatsApp.',
		url: 'https://minegocio.pythonanywhere.com/Mi_negocio/listar_tiendas',
		badge: 'Django | Bootstrap',
		category: 'fullstack',
	},
	{
		title: 'Spider Man Brand New Day Landing Page',
		img: spider,
		desc: "Project from Midudevs Community, a landing page for the Spider Man: Brand New Day movie, built with Astro and Tailwind CSS. The project showcases the movie's features, trailers, and promotional content, providing an engaging user experience for fans.",
		url: 'https://github.com/midudev/spiderman-brand-new-day',
		badge: 'Astro | Tailwind CSS',
		category: 'community',
	},
	{
		title: 'Cargo-Tree-Tui',
		img: cargoTree,
		desc: 'Project from Orhumdevs Community, a TUI (Text User Interface) application built with Rust and Ratatui. The project provides a visual representation of the dependency tree for Rust projects, allowing developers to easily navigate and understand their dependencies.',
		url: 'https://github.com/orhun/cargo-tree-tui',
		badge: 'Rust',
		category: 'community',
	},
	{
		title: 'Fast API Todo with IA integration',
		img: todoFastapi,
		desc: "Another Todo APP, but it's difference from others because use integration with IA to build resumes of your daily rutine and activities",
		url: 'https://github.com/carlosr301101/todo-backend-FastAPI',
		badge: 'FastAPI',
		category: 'utils',
	},
	{
		title: 'int64grep',
		img: int64grep,
		desc: "It's a new flavour of grep, builded in Rust, to enhance speed and relaibility.",
		url: 'https://crates.io/crates/int64grep',
		badge: 'Rust',
		category: 'utils',
		featured: true,
	},
	{
		title: 'neutron-diffusion-dd-rust',
		img: firstApproach,
		desc: "1-D Neutron Diffusion Solver using the Diamond Difference Method implemented in Rust. This project aims to provide a fast and reliable tool for simulating neutron transport in nuclear reactors, leveraging Rust's performance and safety features.",
		url: 'https://crates.io/crates/neutron-diffusion-dd',
		badge: 'Rust',
		category: 'utils',
		featured: true,
	},
]
