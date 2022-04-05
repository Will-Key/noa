import { User } from "../features/auth/models";
import { LOCAL_STORAGE_USER_TOKEN_KEY } from "./token-key";

export function setToken(userInfos: User) {
    localStorage.removeItem(LOCAL_STORAGE_USER_TOKEN_KEY)
    localStorage.setItem(LOCAL_STORAGE_USER_TOKEN_KEY, JSON.stringify(userInfos))
}

export function getToken() {
    console.log(localStorage.getItem(LOCAL_STORAGE_USER_TOKEN_KEY))
    const tokenStoreString = localStorage.getItem(LOCAL_STORAGE_USER_TOKEN_KEY)
    console.log(tokenStoreString)
    return tokenStoreString ? JSON.parse(tokenStoreString) : null
}