import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUserResponseModel } from '../../../../../../../libs/api-interfaces/src/lib/models/user/login-user-response.model';
import { LoginUserModel } from '../../../../../../../libs/api-interfaces/src/lib/models/user/login-user.model';
import { environment } from '../../../../environments/environment';
import { PostUserModel } from '../../../../../../../libs/api-interfaces/src/lib/models/user/post-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  private loginUser(credentials: LoginUserModel): Observable<LoginUserResponseModel> {
    return this.http.post<LoginUserResponseModel>(`${environment.api}/auth/login`, credentials);
  }

  private registerUser(userData: PostUserModel) {
    return this.http.post(`${environment.api}/user/register`, userData);
  }
}
