export interface Movie {
	id: number,
	title: string,
	release_date: string,
	overview: string | null,
	poster_path: string,
};

export interface Movies {
	movies: Movie[],
	total_pages: number,
	total_results: number
};
export interface Header {
	title: string,
};

export interface Headers {
	headers: Header[],
};
