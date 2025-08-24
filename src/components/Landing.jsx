import { useState, useEffect } from "react";
import { fetchPopularMovies } from "../tmdb.js";
import { Link } from "react-router-dom";
import { fetchPopularTVShows } from "../tv-shows.js";

function Landing({ handleSearch, searchFor, setSearchFor }) {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data.slice(0, 5));
    };
    getMovies();
  }, []);

  useEffect(() => {
    const getShows = async () => {
      const data = await fetchPopularTVShows();
      setShows(data.slice(0, 5));
    };
    getShows();
  }, []);

  return (
    <div className="flex px-[5%] flex-col relative justify-center items-center">
      <div className="relative z-10 text-white p-8 space-y-8 w-full rounded-[18px] overflow-hidden drop-shadow-4xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(63,63,63,0.39)] to-[#454545] opacity-20 backdrop-blur-[50px] drop-shadow-2xl rounded-[18px]"/>
        <div className="relative text-white text-center flex flex-col items-center justify-center h-full p-4 pb-8">
          <p className="w-full text-4xl font-bold drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Movie Stats Like Never Before
          </p>
          <p className="text-[14px] w-[100%] lg:w-[410px] font-medium drop-shadow-2xl sm:text-2xl md:text-1xl lg:text-2xl">
            Track ratings, reviews, cast, and more — powered by TMDB.
          </p>
          <span className="w-[100%] md:w-[410px] sm:w-[410px] lg:w-[410px] h-[50px] mt-[29px] border rounded-[25px] flex justify-between items-center pl-[5px] pr-[7px]">
            <input
              id="search"
              type="text"
              placeholder="Search for a movie"
              className="focus:outline-none focus:border-transparent focus:bg-transparent w-[100%] p-[10px] rounded-[20px] h-[38px]"
              onChange={(e) => setSearchFor(e.target.value)}
            />
            <Link to={"/search"}>
              <button
                onClick={() => handleSearch()}
                className="bg-white font-medium text-black w-[86px] h-[38px] rounded-[20px] hover:bg-fuchsia-900 transition duration-300 hover:text-white ease-in-out"
              >
                Search
              </button>
            </Link>
          </span>
        </div>
      </div>

      <div className="w-full h-full text-white mt-[63px]">
        <p className="font-semibold text-[32px]">Top Movies Today</p>
        <div className="flex w-full justify-between mt-[36px] lg:overflow-hidden mb-[20px] overflow-y-auto">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <div className="w-[217px] group">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-[70%] h-[70%] lg:w-[100%] lg:h-[290px] rounded-[10px] object-cover 
                             md:hover:brightness-50 ease-in-out transition-[height] duration-500 
                             hover:h-[215px]"
                />
                <div className="h-[20px] md:hidden"></div>
                <div className="duration-500 rounded-[10px] hidden opacity-0 bg-gradient-to-r from-[rgba(63,63,63,0.2)] to-[rgba(69,69,69,0.2)] group-hover:opacity-100 backdrop-blur-[50] md:flex  flex-col justify-center items-center p-2 mt-[10px]">
                  <p className="text-[18px] font-semibold text-center">
                    {movie.title}
                  </p>
                  <p className="text-[16px] font-medium">
                    {movie.vote_average.toFixed(1)}/10
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full h-full text-white">
        <p className="font-semibold text-[32px]">Top Shows Today</p>
        <div className="flex w-full justify-between mt-[36px] md:overflow-hidden mb-[20px] overflow-y-auto">
          {shows.map((show) => (
            <Link key={show.id} to={`/tv/${show.id}`}>
              <div className="w-[217px] group">
                <img
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  alt={show.name}
                  className="w-[70%] h-[70%] md:w-[100%] md:h-[290px] rounded-[10px] object-cover 
                             md:hover:brightness-50 ease-in-out transition-[height] duration-500 
                             hover:h-[215px]"
                />
                <div className="h-[20px] md:hidden"></div>
                <div className="duration-500 rounded-[10px] hidden opacity-0 bg-gradient-to-r from-[rgba(63,63,63,0.2)] to-[rgba(69,69,69,0.2)] group-hover:opacity-100 backdrop-blur-[50] md:flex  flex-col justify-center items-center p-2 mt-[10px]">
                  <p className="text-[18px] font-semibold text-center">
                    {show.name}
                  </p>
                  <p className="text-[16px] font-medium">
                    {show.vote_average.toFixed(1)}/10
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-white w-full flex flex-col items-center mt-[84px] mb-[84px] gap-[26px]">
        <p className="text-3xl lg:text-5xl font-semibold ">Start Exploring Now</p>
        <Link to={'/movies'}>
        <button className="w-[182px] h-[56px] rounded-[30px] text-[20px] font-medium border hover:bg-fuchsia-900 transition duration-500 ease-in-out hover:text-white hover:border-0 flex items-center justify-between px-[15px]">
          Explore Now
          <img src="/arrow.png" className="size-[31px]" />
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
