import {RoomTypes} from './actions';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RoomTypes.FETCH_ROOMS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

// Exports
export default reducer;
