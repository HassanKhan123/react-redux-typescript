import { Actiontype } from '../action-types';

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

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
