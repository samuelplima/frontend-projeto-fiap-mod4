import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './views/pages/login-page/login-page.component';
import { ButtonsComponent } from './views/components/buttons/buttons.component';
import { RegistrationPageComponent } from './views/pages/registration-page/registration-page.component';
import { FormFieldsComponent } from './views/components/form-fields/form-fields.component';
import { HomepageComponent } from './views/pages/homepage/homepage.component';
import { HeaderComponent } from './views/content/header/header.component';
import { MyAccountComponent } from './views/pages/my-account/my-account.component';
import { IconButtonComponent } from './views/components/icon-button/icon-button.component';
import { AboutPageComponent } from './views/pages/about-page/about-page.component';
import { ServicePageComponent } from './views/pages/service-page/service-page.component';
import { SchedulePageComponent } from './views/pages/schedule-page/schedule-page.component';
import { GridComponent } from './views/components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ButtonsComponent,
    RegistrationPageComponent,
    FormFieldsComponent,
    HomepageComponent,
    HeaderComponent,
    MyAccountComponent,
    IconButtonComponent,
    AboutPageComponent,
    ServicePageComponent,
    SchedulePageComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
