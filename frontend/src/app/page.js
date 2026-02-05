import MovieList from "../components/movie-list.jsx";
import { headers } from "next/headers";
import {getMovies} from "../utils/functions/movies.js"

export default  async function Home() {
 

const datos = await getMovies();
const { page, results, total_results, total_pages }= datos;

  return (
    <div>
      <MovieList
        results={results}
      />
    </div>
  );
    
}
