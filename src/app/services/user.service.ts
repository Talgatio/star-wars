import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private user: any = {};
  private profile: any = {};

  getUser() {
    return this.user;
  }

  setUser(val) {
    this.user = val;
  }

  getProfile() {
    return this.profile;
  }

  setProfile(val) {
    this.profile = val;
  }

  constructor() { }

}
