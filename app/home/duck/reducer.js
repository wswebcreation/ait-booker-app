import {BrandingTypes} from './actions';

const initialState = {
  map: {
    latitude: 0,
    longitude: 0,
  },
  logoUrl: '',
  description: '',
  name: '',
  contact: {
    name: '',
    address: '',
    phone: '',
    email: '',
  },
  showModal: false,
  errors: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BrandingTypes.FETCH_BRANDING: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

// Exports
export default reducer;
