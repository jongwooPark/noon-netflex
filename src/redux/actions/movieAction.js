import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async (dispatch) => {

    dispatch({type:"GET_MOVIES_REQUEST"})
    try {
      const popularMovieApi = api.get(
        `movie/popular?api_key=${API_KEY}&language=ko&page=1`
      );
      const topMovieApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=ko&page=1`
      );
      const upcommingMovieApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=ko&page=1`
      );

      let [popularMovie, topMovie, upcommingMovie] = await Promise.all([
        popularMovieApi,
        topMovieApi,
        upcommingMovieApi,
      ]);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovie.data,
          topMovies: topMovie.data,
          upcommingMovies: upcommingMovie.data,
        },
      });
    } catch (error) {
      //에러 핸들링
      dispatch({type:"GET_MOVIES_FAILURE"})
    }
  };
}

export const movieAction = { getMovies };
