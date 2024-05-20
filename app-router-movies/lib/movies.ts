export const getMoviesGenres = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDZmYWU5MjhlN2E1MTc5YzU5NWI0ODcxNDRiZmRlNCIsInN1YiI6IjYzZTM2ZTBhMjJlNDgwMDBhNzkzMGFkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UD3nfwAvVjS6YevwxrwBKJLcgrvxEtOgj2zngCQvyKA'
        }
      };
      
      fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}