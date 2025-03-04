import { SearchResponse, SearchParams } from './interfaces/search';
import { Work } from './interfaces/work';
import { Editions, EditionEntry } from './interfaces/editions';
import fetch from 'node-fetch';

export class OpenLibraryClient {
	private baseUrl = "https://openlibrary.org";

	async search(params: SearchParams): Promise<SearchResponse> {
		const baseSearchUrl = new URL(this.baseUrl + '/search.json')
		const queryParams = new URLSearchParams(baseSearchUrl.search)

		if(params.fields) {
			queryParams.append('fields', params.fields)
		}

		if(params.lang) {
			queryParams.append('lang', params.lang)
		}

		if(params.q) {
			queryParams.append('q', params.q)
		}

		if(params.sort) {
			queryParams.append('sort', params.sort)
		}

		if(params.title) {
			queryParams.append('title', params.title)
		}

		if(params.author) {
			queryParams.append('author', params.author)
		}

		baseSearchUrl.search = queryParams.toString();
		const response = await fetch(baseSearchUrl);
		return response.json() as Promise<SearchResponse>;		
	}

	async fetchWork(workId: string): Promise<Work> {
		const headers = {'Accept': 'application/json'}
		let url: string;
		if (workId.startsWith('/works/')) {
			url = this.baseUrl + workId
		} else {
			url = this.baseUrl + '/works/' + workId
		}

		const response = await fetch(url, {headers: headers})
		return response.json() as Promise<Work>
	}

	async fetchEditions(workId: string): Promise<Editions> {
		const headers = {'Accept': 'application/json'}
		let url: string;
		if (workId.startsWith('/works/')) {
			url = this.baseUrl + workId + '/editions'
		} else {
			url = this.baseUrl + '/works/' + workId + '/editions'
		}

		const response = await fetch(url, {headers: headers})
		return response.json() as Promise<Editions>
	}

	async fetchIsbn(isbn: number): Promise<EditionEntry> {
		const headers = {'Accept': 'application/json'}
		const response = await fetch(this.baseUrl + '/isbn/' + isbn, {headers: headers})
		return response.json() as Promise<EditionEntry>
	}

	async fetchCoverByIsbn(isbn: number): Promise<Blob> {
		const response = await fetch(this.getCoverUrlByIsbn(isbn))
		return response.blob() as Promise<Blob>
	}

	getCoverUrlByIsbn(isbn: number): string {
		return 'https://covers.openlibrary.org/b/isbn/' + isbn + '-M.jpg?default=false'
	}
}