import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, throwError } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { CryptoStatsKeys } from '../constants/crypto-stats-keys.enum';
import { FetchCryptoStatsDTO } from '../dtos/fetch-crypto-stats.dto';
import { catchError, map } from 'rxjs/operators';
import { Crypto } from '../types/crypto.type';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  constructor(private readonly _httpService: HttpService) {}

  public _fetchCryptoStats({
    date_order,
    bucket,
    limit,
  }: FetchCryptoStatsDTO): Observable<Crypto> {
    return new Observable((observer: Observer<Crypto>) => {
      const httpParams = new HttpParams()
        .append(CryptoStatsKeys.DATE_ORDER, date_order)
        .append(CryptoStatsKeys.BUCKET, bucket)
        .append(CryptoStatsKeys.LIMIT, limit);

      const routeURL = 'stats';

      this._httpService
        .fetchByParams<Crypto>(routeURL, httpParams)
        .pipe(
          map((data: Crypto) => {
            observer.next(data);
            return observer.complete();
          }),
          catchError((error) => {
            return throwError(observer.error(error));
          })
        )
        .subscribe();
    });
  }
}
