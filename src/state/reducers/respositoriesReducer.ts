interface RepositoresState {
  loading: boolean;
  error: string | null;
  data: string[];
}

enum Actiontype {
  SEARCH_REPOSITORIES = 'search_repositores',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositores_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositores_error',
}
interface SearchRepositoriesAction {
  type: Actiontype.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: Actiontype.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: Actiontype.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

const reducer = (state: RepositoresState, action: Action): RepositoresState => {
  switch (action.type) {
    case Actiontype.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case Actiontype.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };

    case Actiontype.SEARCH_REPOSITORIES_ERROR:
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
