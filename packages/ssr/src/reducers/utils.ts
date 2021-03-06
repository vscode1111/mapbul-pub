import { handleActions } from 'redux-actions';
import { IActionSet } from 'actions';

export interface IPageState<T> {
  currentPage: number;
  list: Array<T>;
  totalPages: number;
  loading: boolean;
}

export const makePageState = <T extends object>(): IPageState<T> => {
  return {
    currentPage: 1,
    list: [],
    totalPages: 0,
    loading: false,
  };
};

export const makePageReducer = <T extends object>(
  actions: IActionSet<T>,
  initialState: IPageState<T>,
) => {
  return handleActions<IPageState<T>, any>(
    {
      [actions.incrementCurrentPage.toString()]: (state): IPageState<T> => {
        return {
          ...state,
          currentPage: state.currentPage + 1,
        };
      },
      [actions.setList.toString()]: (state, { payload }): IPageState<T> => {
        return {
          ...state,
          list: payload,
        };
      },
      [actions.addList.toString()]: (state, { payload }): IPageState<T> => {
        return {
          ...state,
          list: [...state.list, ...payload],
        };
      },
      [actions.setTotalPages.toString()]: (state, { payload }): IPageState<T> => {
        return {
          ...state,
          totalPages: payload,
        };
      },
      [actions.setLoading.toString()]: (state, { payload }): IPageState<T> => {
        return {
          ...state,
          loading: payload,
        };
      },
    },
    initialState,
  );
};
