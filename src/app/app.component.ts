import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor'; 



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,  // Ensure that the multi flag is set to true
    },
  ],
  template : `<router-outlet> </router-outlet>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QuoteApp';
}
