import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthguardService} from './services/authguard.service';
import {LoginComponent} from './components/login/login.component';
import {ListItemsComponent} from './components/list-items/list-items.component';
import {ItemInfoComponent} from './components/item-info/item-info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: ListItemsComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'main/:id',
    component: ItemInfoComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
