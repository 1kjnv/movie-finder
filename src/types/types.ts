export interface Movie {
	id: number,
	title: string,
	release_date: string,
	overview: string,
	poster_path: string,
	runtime: number,
	vote_average: number,
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
