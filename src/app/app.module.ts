import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FilterPipeModule} from 'ngx-filter-pipe';

import {RequestService} from './services/request.service';
import {AuthguardService} from './services/authguard.service';
import {UserService} from './services/user.service';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {ListItemsComponent} from './components/list-items/list-items.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ItemInfoComponent} from './components/item-info/item-info.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListItemsComponent,
    HeaderComponent,
    FooterComponent,
    ItemInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FilterPipeModule
  ],
  providers: [RequestService, AuthguardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

/*
MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
* */
