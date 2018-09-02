import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  showDropdown: boolean;
  user: any;
  toggleDropdown(e) {
    e.stopPropagation();
    this.showDropdown = !this.showDropdown;
  }

  ngOnInit() {
    this.user = this.userService.getProfile();
    console.log(this.user);
    window.addEventListener('click', () => {
      this.showDropdown = false;
    }, false);
  }

}
