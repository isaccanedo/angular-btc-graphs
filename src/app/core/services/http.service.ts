import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly _httpClient: HttpClient) {}

  public fetchByParams<T>(
    routeURL: string,
    httpParams: HttpParams
  ): Observable<T> {
    const headers = new HttpHeaders().append(
      'Access-Control-Allow-Origin',
      '*'
    );

    return this._httpClient.get<T>(`${environment.apiURL}/${routeURL}`, {
      headers: headers,
      params: httpParams,
    });
  }
}
