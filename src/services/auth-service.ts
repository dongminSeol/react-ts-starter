export default class Auth {
  // 토큰 키
  // 스토리지 사용하지 않을 경우 타입 변경.
  public static STORAGE_KEY: string = "token";

  public static getToken() {
    return window.localStorage.getItem(Auth.STORAGE_KEY);
  }
  public static setToken(token: string) {
    window.localStorage.setItem(Auth.STORAGE_KEY, token);
  }
  public static removeToken(): void {
    window.localStorage.removeItem(Auth.STORAGE_KEY);
  }
}
