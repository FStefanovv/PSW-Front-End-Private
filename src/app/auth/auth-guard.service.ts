import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/hospital/services/auth.service';
import decode from 'jwt-decode';


@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRole = route.data['expectedRole'];
    const token = localStorage.getItem('id_token');
    // decode the token to get its payload
    const tokenPayload = decode(token);
    if (!this.auth.isLoggedIn() )
        // tokenPayload.role !== expectedRole) {
       // this.router.navigate(['login']);
        return false;
      //}
      return true;
    }
   }

  
