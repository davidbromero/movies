"use client";

import { useState } from "react";
import MovieCard from "./movie-card";




export default function MovieList({ results }) {

    const [search, setSearch] = useState(' ');
    const [pelisSearch, setPelisSearch] = useState(results);
    const [page, setPage] = useState(1);

    const inputChange = (e) => {
        setSearch(e.target.value);
    }

    const searchMovie = async () => {
        if (search == '') {
            setPelisSearch(results)
        } else {
            const response = await fetch(`http://localhost:3000/api/movies/search?query=${search} `);
            const datos = await response.json();
            setPelisSearch(datos.results);
        }
    }

    const aumentarPagina = async () => {
        setPage(page + 1);
        const response = await fetch(`http://localhost:3000/api/movies?page=${page}`);
        const datos = await response.json();
        setPelisSearch(datos.results);
    }

    const disminuirPagina = async () => {
        setPage(page - 1);
        const response = await fetch(`http://localhost:3000/api/movies?page=${page}`);
        const datos = await response.json();
        setPelisSearch(datos.results);
    }



    return (
        <>
            <div className="barra-buscador">
                <div className="botones">
                    <button onClick={disminuirPagina} >Pagina anterior</button>
                    <button onClick={aumentarPagina}>Siguente pagina</button>
                </div>
                <div className="buscador">
                    <input onChange={inputChange} type="text" placeholder="Buscar Pelicula.." />
                    <button onClick={searchMovie}>Buscar</button>
                </div>
            </div>
          
            

            <div className="flex flex-wrap justify-center gap-5">
                {
                    pelisSearch.length > 0
                    &&
                    pelisSearch.map(
                        (element) => {
                            return (
                                <MovieCard
                                    key={element.id}
                                    info={element}
                                />
                            )
                        }
                    )
                }
            </div>
        </>
    )
}