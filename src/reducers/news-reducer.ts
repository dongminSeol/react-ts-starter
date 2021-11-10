import { Reducer } from "redux";
import { NewsAction, NewsActionType } from "../actions";
export interface News {
  nid: string;
  nsubtitle: string;
  newsmoddt: string;
  ncontents: string;
}
export interface NewsList {
  [nid: string]: News;
}
export interface NewsState {
  items: NewsList;
  loading: boolean;
  error: String | null;
}
const initialState = {
  items: {},
  loading: false,
  error: null
};

export const newsReducer: Reducer<NewsState, NewsAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case NewsActionType.GET_ITEM:
    case NewsActionType.GET_ITEM_LIST:
      return { ...state, loading: true };
    default:
      return state;
  }
};
