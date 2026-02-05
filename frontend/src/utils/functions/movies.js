export const getMovieByID = async (id) => {
    const res = await fetch (`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
                Authorization: `Bearer ${process.env.API_AUTH_KEY}`,
                accept: 'application/json'
        }
    });

    const datos = await res.json();

    return datos;
}

export const getVideosByID = async (id) => {
      const res= await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, {
          headers: {
                Authorization: `Bearer ${process.env.API_AUTH_KEY}`,
                accept: 'application/json'
          }
      })

      const datos = await res.json();
      const result = datos.results.find((movie) => movie.type == 'Trailer' && movie.official)

      return result;
}

export const getMovies = async (page, language) => {
    // const { searchParams } = new URL(request.url)

    // const page = searchParams.get('page')
    // const language = searchParams.get('language')

    let BaseUrl = `https://api.themoviedb.org/3/discover/movie?page=${page ?? 1} &language=${language ?? 'es-ES'}`;

    try {
        const response = await fetch(BaseUrl, {
            headers: {
                Authorization: `Bearer ${process.env.API_AUTH_KEY}`,
                accept: 'application/json'
            }
        });

        const data = await response.json();
        // console.log(JSON.stringify(data));

        return data;

    } catch (error) {
        return 'error';
    }
}