import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getToken } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class RedirectHomeGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuth = getToken()
      console.log(isAuth)
      if (isAuth) return this.router.createUrlTree(['/'])
      return true
  }
  
}
