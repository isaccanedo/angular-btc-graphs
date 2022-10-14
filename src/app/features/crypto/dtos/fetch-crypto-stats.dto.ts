import { DateOrder } from '../constants/date-order.enum';
import { StatsLimits } from '../constants/stats-limits.enum';
import { TimeIntervalResolution } from '../constants/time-interval-resolution.enum';

export class FetchCryptoStatsDTO {
  public date_order!: DateOrder;
  public bucket!: TimeIntervalResolution;
  public limit!: StatsLimits;
}
