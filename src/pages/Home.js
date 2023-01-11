import React from "react";

import { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, CSSProperties } from "react";


const Home = () => {

    let [loading2, setLoading2] = useState(true);
    let [color, setColor] = useState("#ffffff");
  const dispatch = useDispatch();

  const { popularMovies, topMovies, upcommingMovies , loading} = useSelector(
    (state) => state.movie
  );

  if (topMovies.results) console.log("kkkk", topMovies.results[0]);

  useEffect(() => {
    dispatch(movieAction.getMovies());
    console.log("use effect ");

  }, []);

 if(loading){
    return
    <ClipLoader
    color="red"
    loading={loading}
   
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  
  />
}

   return (
     <div>
    <ClipLoader
    color= "red"
    loading2={loading2}
   
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  
  />

       {topMovies.results && <Banner movie={popularMovies.results[0]} />}
       <h1>Popular Movies</h1>
       <MovieSlide movies={popularMovies} />
       <h1>Top Movies</h1>
       <MovieSlide movies={topMovies} />
       <h1>Upcomming Movies</h1>
       <MovieSlide movies={upcommingMovies} />
     </div>
   );
};

export default Home;
