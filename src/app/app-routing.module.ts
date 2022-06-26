import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/pages/homepage/homepage.component';
import { LoginPageComponent } from './views/pages/login-page/login-page.component';
import { RegistrationPageComponent } from './views/pages/registration-page/registration-page.component';

const routes: Routes = [
  { path: "", component: LoginPageComponent},
  { path: "registration", component: RegistrationPageComponent },
  { path: "home", component: HomepageComponent }
  // { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
