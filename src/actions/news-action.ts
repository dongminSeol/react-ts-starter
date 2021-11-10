import { AppThunkAction } from "../store";
import { News, NewsList } from "../reducers/news-reducer";
import Rest from "../services/rest-service";
export enum NewsActionType {
  GET_ITEM,
  GET_ITEM_LIST
}
interface GetItem {
  type: NewsActionType.GET_ITEM;
  payload: News;
}
interface GetItemList {
  type: NewsActionType.GET_ITEM_LIST;
  payload: NewsList;
}
export type NewsAction = GetItem | GetItemList;

export const newsActionCreators = {
  getItem: (nid: string): AppThunkAction<NewsAction> => async (
    dispatch,
    getState
  ) => {},
  getList: (): AppThunkAction<NewsAction> => async (dispatch, getState) => {
    const response = Rest.get<News[]>(
      "https://bgc2m7ynxe.execute-api.ap-northeast-2.amazonaws.com/publish/news-listitems-ver2/22TYO3I9IA"
    );
    console.log(response);
    //const response: AxiosResponse<Post[]> = await posts.get('/posts');
    // dispatch({
    //   type: NewsActionType.GET_ITEM_LIST,
    //   payload: response.data
    // });
  }
};
