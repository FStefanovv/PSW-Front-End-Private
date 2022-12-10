import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/hospital/services/auth.service';
import decode from 'jwt-decode';


@Injectable()
export class RoleGuardService implements CanActivate {


  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRole = route.data['expectedRole'];
    const tokenRole = localStorage.getItem('role');
   
    if (tokenRole !== expectedRole || !this.auth.isLoggedIn()) {
           this.router.navigate(['login']);
        return false;
            }
      return true;
    }
   }

  
