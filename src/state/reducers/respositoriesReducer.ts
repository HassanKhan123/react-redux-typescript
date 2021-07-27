interface RepositoresState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RepositoresState, action: any) => {
  switch (action.type) {
    case 'search_repositores':
      return {
        loading: true,
        error: null,
        data: [],
      };
    case 'search_repositores_success':
      return {
        loading: false,
        error: null,
        data: action.payload,
      };

    case 'search_repositores_error':
      return {
        loading: false,
        error: action.payload,
        data: [],
      };

    default:
      return state;
  }
};

export default reducer;
