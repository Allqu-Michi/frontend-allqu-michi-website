import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SupabaseService } from '../services/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  
  session = this.supabase.session;
  constructor(
    private readonly supabase: SupabaseService,
    private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.session){
      this.router.navigate(["/nge-admin"]);
      return false;
    }else{
      return true;
    }
  }
  
}
