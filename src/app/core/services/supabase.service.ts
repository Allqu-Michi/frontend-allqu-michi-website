import { Injectable } from '@angular/core';

import {
  ApiError,
  AuthChangeEvent,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { loginCredentials } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase: SupabaseClient = {} as SupabaseClient;

  constructor() { 
    this.supabase = createClient(
      environment.baseUrl,
      environment.supabaseKey
    )
  }

  get session() {
    return this.supabase.auth.session()
  }

  signIn(credentials:loginCredentials){
    // return this.supabase.auth.signIn({ provider: 'google' })
    return this.supabase.auth.signIn(credentials);
  }

}
