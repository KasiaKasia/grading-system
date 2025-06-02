import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
// import { httpErrorInterceptor } from './core/interceptors/http-error/http-error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // provideClientHydration(withHttpTransferCacheOptions({
    //   includePostRequests: true
    // })),
    provideAnimations(),
    provideNativeDateAdapter(),
    provideHttpClient(withFetch(),
      // withInterceptors([httpErrorInterceptor]),
    )
  ]
};

