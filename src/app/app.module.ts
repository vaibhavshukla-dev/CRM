import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { ScriptsComponent } from './scripts/scripts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ScriptDetailsComponent } from './script-details/script-details.component';
import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoaderComponent } from './loader/loader.component';

import { AuthInterceptor } from './auth-interceptor';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { CommunicateComponent } from './communicate/communicate.component';
import { CommunicateDetailsComponent } from './communicate-details/communicate-details.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { OpportunityNewComponent } from './opportunity-new/opportunity-new.component';
import { CommunicateNewComponent } from './communicate-new/communicate-new.component';

import { StatesModule } from './states/states.module';
import { OpportunityDetailsComponent } from './opportunity-details/opportunity-details.component';
import { AccountNewComponent } from './account-new/account-new.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AccountDetailsComponent } from './account-details/account-details.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    ContactsComponent,
    AccountsComponent,
    LoanApplicationComponent,
    ScriptsComponent,
    ContactDetailsComponent,
    ScriptDetailsComponent,
    LoginComponent,
    LoaderComponent,
    DashboardDetailsComponent,
    CommunicateComponent,
    CommunicateDetailsComponent,
    ContactNewComponent,
    OpportunityNewComponent,
    CommunicateNewComponent,
    OpportunityDetailsComponent,
    AccountNewComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StatesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
