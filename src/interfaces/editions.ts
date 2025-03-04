export interface Editions {
	links: {
		self: string,
		work: string,
		next: string
	},
	size: number,
	entries: EditionEntry[]
}

export interface EditionEntry {
	title: string,
	type: {
		key: string
	},
	isbn_10: string[],
	isbn_13: string[],
	covers: number[],
	languages: {
		key: string
	}[],
	physical_format: string,
	local_id: string[],
	source_records: string[],
	key: string,
	works: {
		key: string
	}[],
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