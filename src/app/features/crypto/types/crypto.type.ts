export type Crypto = {
  items: Array<{
    id: number;
    lower: number;
    higher: number;
    open: number;
    volume: number;
    avg_close: number | null;
    close: number | null;
    change: null;
    timestamp: Date;
  }>;
  total: number;
  page: number;
  size: number;
};
