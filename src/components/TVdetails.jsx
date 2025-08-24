import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFullTVShowDetails } from "../tv-shows";

function TVdetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchFullTVShowDetails(id);
        setShow(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex w-full h-[67vh] items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (!show) {
    return (
      <p className="text-center text-red-400 text-2xl font-bold">
        Error loading TV show
      </p>
    );
  }

  return(
    <>
    <div className="hidden px-[44px] mb-[40px] lg:flex gap-[20px] text-white">
      <div className="flex flex-col gap-[19px]">
        <div className="w-[475px] h-[440px] flex items-center justify-center bg-gradient-to-r from-[rgba(63,63,63,0.24)] to-[#45454538] bg-opacity-5 backdrop-blur-[10px] drop-shadow-2xl rounded-[20px]">
          <img
            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
            alt={show.name}
            className="w-[293px] h-[440px] rounded-[20px] object-contain object-center"
          />
        </div>
        <div className="w-[475px] h-[119px] rounded-[20px] flex flex-col items-center justify-center bg-gradient-to-r from-[rgba(63,63,63,0.24)] to-[#45454538] bg-opacity-5 backdrop-blur-[10px] drop-shadow-2xl">
          <p className="font-bold text-[24px]">{show.name}</p>
          <p className="text-gray-300 font-semibold text-[20px]">
            {show.genres.map((g) => g.name).join(" • ")}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="w-full h-[162px] bg-gradient-to-r from-[rgba(63,63,63,0.24)] to-[#45454538] bg-opacity-5 backdrop-blur-[10px] drop-shadow-2xl rounded-[20px] p-4 overflow-scroll scrollbar-hide">
          <p className="text-[22px] font-medium text-center">{show.overview}</p>
        </div>

        <div className="flex gap-[20px]">
          <div className="w-[466px] h-[395px] bg-gradient-to-r from-[rgba(63,63,63,0.24)] to-[#45454538] bg-opacity-5 backdrop-blur-[10px] drop-shadow-2xl rounded-[20px] p-4 flex flex-col gap-[10px] justify-center items-center">
            <p className="flex flex-col items-center justify-center text-[34px]">
              <span className="opacity-50 text-[20px]">First Air:</span> {show.first_air_date}
            </p>
            <p className="flex flex-col items-center justify-center text-[34px]">
              <span className="opacity-50 text-[20px]">Seasons:</span> {show.number_of_seasons}
            </p>
            <p className="flex flex-col items-center justify-center text-[34px]">
              <span className="opacity-50 text-[20px]">Episodes:</span> {show.number_of_episodes}
            </p>
          </div>

          <div className="w-[466px] h-[395px] bg-gradient-to-r from-[rgba(63,63,63,0.24)] to-[#45454538] bg-opacity-5 backdrop-blur-[10px] drop-shadow-2xl rounded-[20px] p-4 flex flex-col items-center justify-center">
            <div className="w-[400px] h-[20px] bg-gray-700 rounded-[20px] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-[20px]"
                style={{ width: `${show.vote_average * 10}%` }}
              ></div>
            </div>
            <p className="text-[48px] font-bold mt-[20px]">
              {show.vote_average.toFixed(1)}
            </p>
            <p className="text-[20px] font-semibold mb-[40px]">
              ({show.vote_count.toLocaleString()})
            </p>
            <p className="text-[20px] font-semibold opacity-50">Popularity</p>
            <p className="text-[36px] font-bold">
              {show.popularity.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-[20px] lg:hidden">
      <div className="flex items-center justify-center flex-col gap-[10px] px-[5%]">
        <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
          className="w-[180px] object-cover rounded-[20px]"
          />
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl">{show.name}</p>
        <p className="opacity-50">
          {show.genres.map((g) => g.name).join(" • ")}
        </p>
        <p className="font-medium text-[16px] flex text-center">{show.overview}</p>
      </div>
      <div>
      <div className="flex gap-[20px] ml-[5%]">
          <div className=" bg-gradient-to-r from-[rgba(63,63,63,0.05)] to-[#45454520] backdrop-blur-[5px] drop-shadow-2xl rounded-[20px] p-4 w-[50%] flex flex-col gap-[10px]">
            <p className="flex flex-col items-center justify-center text-1xl lg:text-[34px]">
                <span className="opacity-50 text-1xl">First Air:</span> {show.first_air_date}
              </p>
              <p className="flex flex-col items-center justify-center text-1xl lg:text-[34px]">
                <span className="opacity-50 text-1xl">Seasons:</span> {show.number_of_seasons}
              </p>
              <p className="flex flex-col items-center justify-center text-1xl lg:text-[34px]">
                <span className="opacity-50 text-1xl">Episodes:</span> {show.number_of_episodes}
              </p>
          </div>
          <div className="bg-gradient-to-l from-[rgba(63,63,63,0.05)] to-[#45454520] backdrop-blur-[5px] drop-shadow-2xl rounded-[20px] p-4 w-[50%] mr-[5%] items-center justify-center flex flex-col">
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl">
                {show.vote_average.toFixed(1)}
              </p>
              <p className="text-1xl sm:text-2xl md:text-3xl font-semibold mb-[40px]">
                ({show.vote_count.toLocaleString()})
              </p>
              <p className="text-1xl lg:text-[20px] font-semibold opacity-50">Popularity</p>
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl">
                {show.popularity.toFixed(2)}
              </p>
            </div>
          </div>
      </div>
      <div className="mx-[5%]">
        <h2 className="text-2xl font-bold mt-[20px] mb-[10px]">Cast</h2>
        <div className="flex justify-between overflow-y-scroll">
          {show.cast?.slice(0, 10).map((actor) => (
            <div key={actor.id} className="flex flex-col items-center justify-start w-[full]">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "/placeholder.png"
                }
                alt={actor.name}
                className="w-[5rem] h-[5rem] rounded-full object-cover"
              />
              <p className="font-semibold text-center">{actor.name}</p>
              <span className="text-gray-500 text-[14px] truncate w-[100px] text-center">{actor.character}</span>
            </div> 
          ))}
          
         <div className="h-[20px]"></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TVdetails;
