import { useEffect, useState } from 'react';
import api from '../../api';
import './style.css';

function MovieCatalog() {
    const [movieList, setMovieList] = useState([]);

    async function fetchData() {
        return await api.get('/movie/list').then((response) => {
            console.log(response.data);
            setMovieList(response.data);
            return response.data;
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return <>
        <div className="catalog_body">
            {movieList.map((movie) => {
                return <div className='card'>
                    <h2>{movie.movie}</h2>
                    <img style={{maxHeight: '12.5rem', maxWidth: '12.5rem'}} src={movie.imdb_url}></img>
                    <h2>{movie.rating}</h2>
                    {/* {Array(Math.ceil(movie.rating)).fill().map((_, i) => {
                            <div>
                                <AiFillStar
                                    className='star'
                                    color={"#ffc107"}
                                    size={25} />
                            </div>
                        })} */}
                    <a href={movie.imdb_url} target='_blank'>IMDB LINK</a>
                </div>
            })}
        </div>
    </>
}

export { MovieCatalog };