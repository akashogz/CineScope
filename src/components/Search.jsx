import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../tmdb.js';

function Search({ searchFor }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      const data = await searchMovies(searchFor);
      setResults(data);
    };
    if (searchFor) getResults();
  }, [searchFor]);

  if (!searchFor) {
    return (
      <div className="p-8 text-center text-xl text-gray-600">
        Please enter a movie name in the search bar.
      </div>
    );
  }

  const type = ''

  return (
    <div className="px-[5%] lg:px-[44px] w-full mb-[40px]">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Search Results for "{searchFor}"</h2>
      {results.length === 0 ? (
        <div className='h-full w-full flex justify-center items-center'><div className='loader'></div></div>
      ) : (
        <div className="grid grid-cols-3 lg:grid-cols-6 lg:w-full h-full w-full gap-[20px] lg:gap-[29px] justify-center items-center">
          {results.map((movie) => {
            const type = movie.media_type === 'movie' ? 'movie' : 'tv'; // define type here
            return (
              <Link key={movie.id} to={`/${type}/${movie.id}`}>
                <div className='flex items-center justify-center'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title || movie.name}
                    className="w-[10rem] lg:w-[217px] h-full lg:h-[290px] rounded-[10px] duration-500 object-cover hover:brightness-[0.8] hover:scale-[1.1]"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      )}
      </div>
  );
}

export default Search;
