import Auth from "../services/auth-service";

export interface IErrorContent {
  error: string;
  error_description: string;
  [key: string]: string;
}

export interface IRestResponse<T> {
  is_error?: boolean;
  error_content?: IErrorContent;
  content?: T;
}

export default class Rest {
  public static get<T>(url: string): Promise<IRestResponse<T>> {
    return Rest.request<T>("GET", url);
  }

  public static delete(url: string): Promise<IRestResponse<void>> {
    return Rest.request<void>("DELETE", url);
  }

  public static put<T>(
    url: string,
    data: Object | string
  ): Promise<IRestResponse<T>> {
    return Rest.request<T>("PUT", url, data);
  }

  public static post<T>(
    url: string,
    data: Object | string
  ): Promise<IRestResponse<T>> {
    return Rest.request<T>("POST", url, data);
  }

  private static request<T>(
    method: string,
    url: string,
    data: Object | any = null
  ): Promise<IRestResponse<T>> {
    let isJsonResponse: boolean = false;
    let isBadRequest = false;
    let body = data;
    let headers = new Headers();

    headers.set("Authorization", `Token ${Auth.getToken()}`);
    headers.set("Accept", "application/json");

    if (data) {
      if (typeof data === "object") {
        headers.set("Content-Type", "application/json");
        body = JSON.stringify(data);
      } else {
        headers.set("Content-Type", "application/x-www-form-urlencoded");
      }
    }

    return fetch(url, {
      method: method,
      headers: headers,
      body: <string>body
    })
      .then((response: any) => {
        if (response.status === 401) {
          Auth.removeToken();
        }

        isBadRequest = response.status === 400;

        let responseContentType = response.headers.get("content-type");
        if (
          responseContentType &&
          responseContentType.indexOf("application/json") !== -1
        ) {
          isJsonResponse = true;
          return response.json();
        } else {
          return response.text();
        }
      })
      .then((responseContent: any) => {
        let response: IRestResponse<T> = {
          is_error: isBadRequest,
          error_content: isBadRequest ? responseContent : null,
          content: isBadRequest ? null : responseContent
        };
        return response;
      });
  }
}
