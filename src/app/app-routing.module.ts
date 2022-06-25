import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './views/pages/login-page/login-page.component';
import { RegistrationPageComponent } from './views/pages/registration-page/registration-page.component';

const routes: Routes = [
  { path: "", component: LoginPageComponent},
  { path: "registration", component: RegistrationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
