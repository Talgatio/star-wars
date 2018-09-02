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
  user = this.userService.getProfile();

  toggleDropdown(e) {
    e.stopPropagation();
    this.showDropdown = !this.showDropdown;
  }

  ngOnInit() {
    window.addEventListener('click', () => {
      this.showDropdown = false;
    }, false);
  }

}
