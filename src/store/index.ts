import * as News from "../reducers/news-reducer";

export interface ApplicationState {
  news: News.NewsState | undefined;
}

export const reducers = {
  news: News.newsReducer
};

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
