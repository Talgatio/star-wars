import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private profile: any = {};

  getProfile() {
    return this.profile;
  }

  setProfile(val) {
    this.profile = val;
  }

  constructor() { }

}
