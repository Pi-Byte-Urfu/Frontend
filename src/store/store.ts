import {makeAutoObservable} from 'mobx';
import { IUser } from '../types/IUser';
import { UserType } from '../types/userType';
import { createNoSubstitutionTemplateLiteral } from 'typescript';
import { json } from 'stream/consumers';

export default class Store {
  user: IUser | null;
  isAuth: boolean

  constructor() {
    makeAutoObservable(this);
    const isAuthLocalStorage = localStorage.getItem('isAuth')
    this.isAuth = isAuthLocalStorage != null && isAuthLocalStorage != 'false'
    this.user = JSON.parse(localStorage.getItem('user') ?? 'null')
  }

  login(id: number, userType: UserType) {
    this.isAuth = true;
    this.user = {
      id: id,
      userType: userType
    }

    localStorage.setItem('isAuth', 'true')
    localStorage.setItem('user', JSON.stringify(this.user))
  }

  logout() {
    this.isAuth = false;
    localStorage.setItem('isAuth', 'false')
    this.user = null
    localStorage.removeItem('user')
  }
}