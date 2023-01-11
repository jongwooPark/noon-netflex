let initialState = {
  popularMovies: [],
  topMovies: [],
  upcommingMovies: [],
  loading: true,
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "GET_MOVIES_SUCCESS":
      console.log("GET_MOVIES_SUCCESS...");
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topMovies: payload.topMovies,
        upcommingMovies: payload.upcommingMovies,
        loading: false,
      };
      break;

    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
      break;
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
      break;
    default:
      return { ...state };
  }
}
export default movieReducer;
