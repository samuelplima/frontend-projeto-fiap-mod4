import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './views/pages/about-page/about-page.component';
import { HomepageComponent } from './views/pages/homepage/homepage.component';
import { LoginPageComponent } from './views/pages/login-page/login-page.component';
import { MyAccountComponent } from './views/pages/my-account/my-account.component';
import { RegistrationPageComponent } from './views/pages/registration-page/registration-page.component';
import { SchedulePageComponent } from './views/pages/schedule-page/schedule-page.component';
import { ServicePageComponent } from './views/pages/service-page/service-page.component';

const routes: Routes = [
  { path: "", component: LoginPageComponent},
  { path: "registration", component: RegistrationPageComponent },
  { path: "home", component: HomepageComponent },
  { path: "my-account", component: MyAccountComponent },
  { path: "about", component: AboutPageComponent },
  { path: "service", component: ServicePageComponent },
  { path: "schedule", component: SchedulePageComponent },
  // { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
