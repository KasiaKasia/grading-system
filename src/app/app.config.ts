import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { httpErrorInterceptor } from './core/interceptors/http-error/http-error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideZonelessChangeDetection(), 
    provideHttpClient(withFetch(), withInterceptors([httpErrorInterceptor]))
  ]
};