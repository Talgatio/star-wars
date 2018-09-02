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
      IN.API.Raw('/people/~:(id,first_name,picture-url)').result((resp) => {
        this.userService.setProfile(resp);
        this.goToMainpage();
      }).error((e) => {

      });
    }, (e) => {
      console.log(e);
    });
  }

  ngOnInit() {

  }

  goToMainpage() {
    const routerService = this.injector.get(Router);
    const ngZone: any = this.injector.get(NgZone);
    ngZone.run(() => {
      routerService.navigate(['/main'], { skipLocationChange: true });
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      FB.Event.subscribe('auth.statusChange', (response) => {
        console.log(response);
        if (response.status === 'connected') {
          FB.api('/me?fields=id, name, first_name,last_name, picture', (resp) => {
            console.log(resp);
            this.userService.setProfile(resp);
            this.goToMainpage();
          });
        }
      });
    }, 3000);
  }

}
