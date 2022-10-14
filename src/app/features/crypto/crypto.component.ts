import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DateOrder } from './constants/date-order.enum';
import { StatsLimits } from './constants/stats-limits.enum';
import { TimeIntervalResolution } from './constants/time-interval-resolution.enum';
import { FetchCryptoStatsDTO } from './dtos/fetch-crypto-stats.dto';
import { CryptoService } from './services/crypto.service';
import { Crypto } from './types/crypto.type';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit {
  private _statsLimits: StatsLimits;
  private _timeIntervalResolution: TimeIntervalResolution;
  private _dateOrder: DateOrder;

  private _cryptoStats: Array<number>;

  constructor(
    private readonly _cryptoService: CryptoService,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {
    this._statsLimits = StatsLimits.MIN_LIMIT;
    this._timeIntervalResolution = TimeIntervalResolution.DAY;
    this._dateOrder = DateOrder.DESC;
    this._cryptoStats = [];
  }

  ngOnInit(): void {
    this._initializeCryptoStats();
  }

  public get cryptoStats(): Array<number> {
    return this._cryptoStats;
  }

  private _initializeCryptoStats(): void {
    const fetchCryptoStatsDTO: FetchCryptoStatsDTO = {
      date_order: this._dateOrder,
      bucket: this._timeIntervalResolution,
      limit: this._statsLimits,
    };

    this._cryptoService
      ._fetchCryptoStats(fetchCryptoStatsDTO)
      .subscribe((data: Crypto) => {
        const { items } = data;
        const stats = [];

        for (const item of items) {
          stats.push(item.avg_close !== null ? item.avg_close! : item.close!);
        }

        this._cryptoStats = stats;

        this._changeDetectorRef.detectChanges();
      });
  }

  public updateTimeIntervalResolutionByWeek(): void {
    this._timeIntervalResolution = TimeIntervalResolution.WEEK;
    this._dateOrder = DateOrder.ASC;

    this._initializeCryptoStats();

    this._changeDetectorRef.detectChanges();
    this._changeDetectorRef.markForCheck();
  }

  public updateTimeIntervalResolutionByDay(): void {
    this._timeIntervalResolution = TimeIntervalResolution.MONTH;
    this._dateOrder = DateOrder.ASC;

    this._initializeCryptoStats();

    this._changeDetectorRef.detectChanges();
    this._changeDetectorRef.markForCheck();
  }

  public updateTimeIntervalResolutionByYear(): void {
    this._timeIntervalResolution = TimeIntervalResolution.YEAR;
    this._dateOrder = DateOrder.ASC;

    this._initializeCryptoStats();

    this._changeDetectorRef.detectChanges();
    this._changeDetectorRef.markForCheck();
  }
}
