// Initial State
const initialState = {
  isAuthenticated: false,
};

// Reducers (Modifies The State And Returns A New State)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case 'LOGIN': {
      return {
        // State
        ...state,
        // Redux Store
        isAuthenticated: action.trueFalse,
      };
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default reducer;
