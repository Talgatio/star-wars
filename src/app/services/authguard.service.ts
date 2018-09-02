import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from './user.service';

@Injectable()
export class AuthguardService implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  notEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return true;
      }
    }
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.userService.getUser()
    if (this.notEmpty(user)) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}



