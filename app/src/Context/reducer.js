const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_LOADING": {
        return {
          isLoading: true,
          isAuth: false,
          token: "",
          isError: false,
        };
      }
      case "LOGIN_SUCCESS": {
        return {
          isLoading: true,
          isAuth: true,
          token: action.payload,
          isError: true,
        };
      }
      case "LOGIN_FAILURE": {
          return {
            isLoading: false,
            isAuth: false,
            token: "",
            isError: true,
          };
        }
        case "LOGOUT_SUCCESS": {
          return {
            isLoading: false,
            isAuth: false,
            token: "",
            isError: false,
          };
        }
      default: {
        return state;
      }
    }
  };
  
  export default reducer;