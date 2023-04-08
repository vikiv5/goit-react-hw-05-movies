const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY= "d31c9faeabd85b83726848cf0b50c5a1";

async function getTrendingMovies () {
    const response = await fetch
    (`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
      );
      if (response.ok){
        return await response.json()
      }
      return await Promise.reject(
        new Error("Oops, something went wrong... We can't load trending movies :(")
  );

}
async function getMoviesById (id) {
    const response = await fetch
    (`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
      if (response.ok){
        return await response.json()
      }
      return await Promise.reject(
        new Error('We are sorry, but we did not find any information about movies :(')
  );

}

async function getMovieCast (id) {
    const response = await fetch
    (`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
      if (response.ok){
        return await response.json()
      }
      return await Promise.reject(
        new Error('We are sorry, but we did not find any information about cast :(')
  );

}

async function getMoviesReview (id) {
    const response = await fetch
    (`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
      if (response.ok){
        return await response.json()
      }
      return await Promise.reject(
        new Error('We do not have any reviews for this movie :(')
  );

}

async function getMoviesQuery (query) {
    const response = await fetch
    (`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
      if (response.ok){
        return await response.json()
      }
      return await Promise.reject(
        new Error(`No results containing ${query} were found.`)
  );

}
export {
    getMovieCast,
    getMoviesById,
    getTrendingMovies,
    getMoviesReview
}