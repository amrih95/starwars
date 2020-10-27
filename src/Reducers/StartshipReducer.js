import {
  FETCH_STARSHIPS,
  FIND_STARSHIPS,
  GET_STARSHIP,
} from '../Constans/Actions.constant';

const initialState = {
  starships: [],
  starship: null,
  find_starships: [],
  starshipslist: [],
  keyword: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARSHIPS:
      return {
        ...state,
        starships: action.payload,
        starshipslist: state.starshipslist.concat(action.payload?.results),
      };
    case GET_STARSHIP:
      return {
        ...state,
        starship: action.payload,
      };
    case FIND_STARSHIPS:
      return {
        ...state,
        find_starships: action.payload,
        keyword: action.keyword,
      };
    default:
      return state;
  }
};
