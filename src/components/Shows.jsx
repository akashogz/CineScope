import { useEffect, useState } from "react";
import { fetchPopularTVShows, fetchTrendingTVShows, fetchTopRatedTVShows } from "../tv-shows.js";
import { Link, useLocation } from 'react-router-dom';

function Shows(){
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [trending, setTrending] = useState([]);

    useEffect(() => {
      const getMovies = async () => {
        const popularData = await fetchPopularTVShows();
        setPopular(popularData.slice(0, 5));

        const trendingData = await fetchTrendingTVShows();
        setTrending(trendingData.slice(0,5));

        const topRatedData = await fetchTopRatedTVShows();
        setTopRated(topRatedData.slice(0,5));
      };

      getMovies();
    }, []);


    return( 
        <div className=" mt-[36px] px-[5%] mb-[100px]">
            <div className="flex flex-col w-full justify-between gap-[10px]">
            <p className="text-[36px] font-semibold">Trending Today</p>
            <div className="flex h-full justify-between mt-[36px] lg:overflow-visible mb-[20px] overflow-y-auto">
                {trending.map((movie) => (
                  <Link key={movie.id} to={`/tv/${movie.id}`}>
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
            <p className="text-[36px] font-semibold">Currently Popular</p>
            <div className="flex h-full justify-between mt-[36px] lg:overflow-visible mb-[20px] overflow-y-auto">
                {popular.map((movie) => (
                  <Link key={movie.id} to={`/tv/${movie.id}`}>
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
            <p className="text-[36px] font-semibold">Top Shows of All Time</p>
            <div className="flex h-full justify-between mt-[36px] lg:overflow-visible mb-[20px] overflow-y-auto">
                {topRated.map((movie) => (
                  <Link key={movie.id} to={`/tv/${movie.id}`}>
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

export default Shows