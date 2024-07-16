import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { inject } from '@angular/core';

interface GuestResponse {
  data: { nama: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class GuestValidatorGuard {
  constructor(private http: HttpClient, private router: Router) {}

  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> => {
    const guestName = route.paramMap.get('guestName');
    if (!guestName) {
      return of(true);
    }

    return this.http.get<GuestResponse>('https://script.google.com/macros/s/AKfycby0ljAjceQAhLO2RnGm_2U_Fv4F-eLx055Xfp_3Q7M0vgvpREZaTuvyEzZlxRmGWL6rsQ/exec')
      .pipe(
        map(response => {
          const isValidGuest = response.data.some(guest => 
            guest.nama.toLowerCase() === decodeURIComponent(guestName).toLowerCase()
          );
          if (!isValidGuest) {
            this.router.navigate(['/404']);
            return false;
          }
          return true;
        }),
        catchError(() => {
          this.router.navigate(['/404']);
          return of(false);
        })
      );
  }
}

export const guestValidatorGuard: CanActivateFn = (route, state) => {
  return inject(GuestValidatorGuard).canActivate(route, state);
};