// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Import BrowserAnimationsModule
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AuthService } from './app/auth.service';

bootstrapApplication(AppComponent, {
  providers: [
    
    importProvidersFrom(ToastrModule.forRoot()),  
    importProvidersFrom(BrowserAnimationsModule),
    ...appConfig.providers,
    AuthService
  ]
}).catch((err) => console.error(err));
