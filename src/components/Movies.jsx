import { useEffect, useState } from "react";
import { fetchPopularMovies, fetchTopRatedMovies, fetchTrendingToday } from "../tmdb.js";
import { Link } from 'react-router-dom';

function Movies(){
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [trending, setTrending] = useState([]);

    useEffect(() => {
      const getMovies = async () => {
        const popularData = await fetchPopularMovies();
        setPopular(popularData.slice(0, 5));

        const topRatedData = await fetchTopRatedMovies();
        setTopRated(topRatedData);

        const trendingData = await fetchTrendingToday();
        setTrending(trendingData);
      };

      getMovies();
    }, []);

    return( 
        <div className=" mt-[36px] px-[5%] mb-[100px] h-full">
            <div className="flex flex-col w-full justify-between gap-[10px]">
            <p className="text-[36px] font-semibold">Trending Today</p>
            <div className="flex h-full justify-between mt-[36px] lg:overflow-visible mb-[20px] overflow-y-auto">
                {trending.map((movie) => (
                  <Link Key={movie.id} to={`/movie/${movie.id}`}>
                    <div className="w-[217px] group">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="w-[70%] h-[70%] lg:w-[100%] lg:h-[290px] rounded-[10px] duration-500 object-cover hover:brightness-[0.8] hover:scale-[1.1]"
                        alt={movie.title}
                      />
                    </div>
                    <div className="lg:hidden mt-[20px]"></div>
                  </Link>
                ))}

            </div>
            </div>
            <div className="h-full flex flex-col justify-between mt-[36px] gap-[10px]">
            <p className="text-[36px] font-semibold">Currently Popular</p>
            <div className="flex h-full justify-between mt-[36px] lg:overflow-visible mb-[20px] overflow-y-auto">
                {popular.map((movie) => (
                  <Link Key={movie.id} to={`/movie/${movie.id}`}>
                    <div className="w-[217px] group">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="w-[70%] h-[70%] lg:w-[100%] lg:h-[290px] rounded-[10px] duration-500 object-cover hover:brightness-[0.8] hover:scale-[1.1]"
                        alt={movie.title}
                      />
                    </div>
                    <div className="lg:hidden mt-[20px]"></div>
                  </Link>
                ))}
            </div>
            </div>
            <div className="flex flex-col w-full justify-between mt-[36px] gap-[10px]">
            <p className="text-[36px] font-semibold">Top Movies of All Time</p>
            <div className="flex h-full justify-between mt-[36px] lg:overflow-visible mb-[20px] overflow-y-auto">
                {topRated.map((movie) => (
                  <Link Key={movie.id} to={`/movie/${movie.id}`}>
                    <div className="w-[217px] group">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="w-[70%] h-[70%] lg:w-[100%] lg:h-[290px] rounded-[10px] duration-500 object-cover hover:brightness-[0.8] hover:scale-[1.1]"
                        alt={movie.title}
                      />
                    </div>
                    <div className="lg:hidden mt-[20px]"></div>
                  </Link>
                ))}
            </div>
            </div>            
        </div>
    )
}

export default Movies