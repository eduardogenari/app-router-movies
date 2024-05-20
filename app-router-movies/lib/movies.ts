export type Genre = {
    id: number;
    name: string;
}

export const getMoviesGenres = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`
        }
      };
      
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      const { genres } = await response.json()
      return genres as Genre[];
}

    /*

        const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer xxxxxx'
        }
      };
      
      fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
        */
