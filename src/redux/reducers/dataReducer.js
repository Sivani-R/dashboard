import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/dataActions';

const initialState = {
  data: {},
  error: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;