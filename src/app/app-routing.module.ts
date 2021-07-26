import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MeetupsListComponent} from './meetups-list/meetups-list.component';
import {NewMeetupComponent} from './new-meetup/new-meetup.component';
import {AuthGuard} from './auth/auth.guard';
import {AuthComponent} from './auth/auth.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'list', component: MeetupsListComponent},
  {path: 'new', component: NewMeetupComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
