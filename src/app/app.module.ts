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

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ButtonsComponent,
    RegistrationPageComponent,
    FormFieldsComponent,
    HomepageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
