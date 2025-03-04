export interface SearchResponse {
	start: number,
	numFound: number,
	numFoundExact: boolean,
	num_found: number,
	documentation_url: string,
	q?: string,
	offset: number | null,
	docs: Docs[]
}

export interface Docs {
	author_key?: string[],
	author_name?: string[],
	cover_edition_key?: string,
	cover_i?: number,
	edition_count?: number,
	first_publish_year?: number,
	has_fulltext?: boolean,
	ia?: string[],
	ia_collection_s?: string,
	key?: string,
	language?: string[],
	lending_edition_s?: string,
	lending_identifier_s?: string,
	public_scan_b?: boolean,
	title?: string
}

export interface SearchParams {
	q?: string,
	fields?: string,
	sort?: string,
	lang?: string,
	title?: string,
	author?: string
}