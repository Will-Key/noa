import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { getToken } from 'src/app/utils';
import { selectUser as selectUserFromApp } from '../../../store/app.selector';
import { selectUser as selectUserFromAuth } from '../store/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuth = getToken()
      if (isAuth) return true
      return this.router.createUrlTree(['/auth/login'])
      // return combineLatest([
      //   this.store.select(selectUserFromAuth),
      //   this.store.select(selectUserFromApp as any)
      // ]).pipe(map(([userFromAuth, userFromApp]) => {
      //   console.log(userFromApp)
      //   console.log(userFromAuth)
      //   const isAuth = !!userFromAuth || !!userFromApp
      //   console.log('Auth guard ' + isAuth)
      //   if (isAuth) return true
      //   return this.router.createUrlTree(['/auth/login'])
      // }))
  }
  
}
