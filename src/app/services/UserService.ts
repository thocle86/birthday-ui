import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, tap} from "rxjs";
import {User} from "../models/User";

@Injectable()
export class UserService {

  configUrl = 'http://localhost:8080/users';

  loading: Observable<boolean> = of(false);

  constructor(private http: HttpClient) {
  }

  setLoading(requete: Observable<any>): Observable<any> {
    this.loading = of(true);
    return requete.pipe(tap(() => this.loading = of(false)));
  }

  getUserList(): Observable<User[]> {
    return this.setLoading(this.http.get<User>(this.configUrl, {observe: 'response'}));
  }

}
