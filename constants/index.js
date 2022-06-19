export const API_KEY = "edf5ccd35cad61d72a503681143ea7d0";
export const baseurl='https://api.themoviedb.org/3';
export const requests = {
    fetchTrending: `${baseurl}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${baseurl}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${baseurl}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${baseurl}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${baseurl}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${baseurl}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${baseurl}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${baseurl}/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

