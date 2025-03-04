export interface Work {
	description: {
		type: string,
		value: string
	} | string,
	links: Link[],
	title: string,
	covers: number[],
	subject_places: string[],
	first_publish_date: string,
	subject_people: string[],
	key: string,
	authors: Author[],
	excerpts: Excerpt[],
	subjects: string[],
	type: {
		key: string
	},
	subject_times: string[],
	cover_edition: {
		key: string
	},
	latest_revision: number,
	revision: number,
	created: {
		type: string,
		value: string
	},
	last_modified: {
		type: string,
		value: string
	},
}

export interface Link {
	title: string,
	url: URL,
	type: {
		key: string
	}
}

export interface Author {
	author: {
		key: string
	},
	type: {
		key: string
	}
}

export interface Excerpt {
	pages: string,
	excerpt: string,
	author: {
		key: string
	}
}