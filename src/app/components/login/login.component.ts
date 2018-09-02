import {Component, OnInit, AfterViewInit, Injector, NgZone } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

declare var FB, IN;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private userService: UserService, private injector: Injector) {
  }

  signUpwithLinkedIn() {
    IN.User.authorize(() => {
      IN.API.Raw('/people/~:(id,num-connections,picture-url)').result((resp) => {
        console.log(resp);
      }).error((e) => {

      });
    }, (e) => {
      console.log(e);
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      FB.Event.subscribe('auth.statusChange', (response) => {
        console.log(response);
        if (response.status === 'connected') {
          this.userService.setUser(response.authResponse);
          FB.api('/me?fields=id, name, first_name,last_name, picture', (resp) => {
            console.log(resp);
            this.userService.setProfile(resp);
            const routerService = this.injector.get(Router);
            const ngZone: any = this.injector.get(NgZone);
            ngZone.run(() => {
              routerService.navigate(['/main'], { skipLocationChange: true });
            })
          });
        }
      });
    }, 3000);
  }

}
