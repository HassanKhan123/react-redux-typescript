import axios from 'axios';
import { Dispatch } from 'redux';

import { Actiontype } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Actiontype.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(`https://api.npms.io/v2/search`, {
        params: {
          q: term,
        },
      });

      const names = data.results.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: Actiontype.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: Actiontype.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
