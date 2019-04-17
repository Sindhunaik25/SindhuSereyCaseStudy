import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import { HotpostsComponent } from './hotposts/hotposts.component';
/* const routes: Routes = [{
  path:'login', component:'LoginComponent'
}];
 */
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'hot', component: HotpostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing =[LoginComponent,RegistrationComponent, ForgotPasswordComponent,HotpostsComponent]
