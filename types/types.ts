export interface Movie {
	id: number,
	title: string,
	release_date: string,
	overview: string | null,
};

export interface Movies {
	movies: Movie[],
	total_pages: number,
	total_results: number
};