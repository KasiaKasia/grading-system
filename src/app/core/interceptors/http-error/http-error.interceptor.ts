import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(

    catchError((Error: any, caught) => {
      switch (Error.status) {
        case 0: // Brak połączenia z serwerem
          console.error('Server is currently offline. Please try again later.');

          return throwError(() => ({
            message: 'Serwer jest niedostępny. Sprawdź połączenie internetowe.',
            code: 'NETWORK_ERROR'
          }));
        case 401: // Nieautoryzowany
          console.error('Unauthorized access. Please log in again.');
          break;
        case 403: // Zabroniony
          console.error('Forbidden access');
          break;
        case 404: // Nie znaleziono
          console.error('Resource not found');
          return throwError(() => ({
            message: `Żądany zasób nie istnieje: ${extractEndpoint(req.url)}`,
            code: 'NOT_FOUND',
            url: req.url
          }));
        case 500: // Błąd serwera
          console.error('Server error. Please try again later.');
          break;
        default: // Inne błędy
          console.error('An error occurred. Please try again.');
      }
      return throwError(() => new Error('An issue occurred. Please try again later.'));
    })
  );
};


function extractEndpoint(fullUrl: string): string {
  try {
    const url = new URL(fullUrl);
    return url.pathname;
  } catch {
    return fullUrl;
  }
}