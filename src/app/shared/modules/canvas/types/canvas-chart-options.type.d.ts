import { ChartTypeRegistry } from 'chart.js/auto';

export type CanvasChartOptions = {
  /** Chart Type */
  type?: keyof ChartTypeRegistry;

  /** Datasets Props */
  datasets?: {
    categoryPercentage?: number;
    barPercentage?: number;
    pointStyle?: 'circle';
    pointRadius?: number;
    borderRadius?: number | string;
    borderSkipped?:
      | false
      | 'start'
      | 'end'
      | 'left'
      | 'right'
      | 'bottom'
      | 'top'
      | 'middle';
    barThickness?: number;
    fill?: boolean;
    cutout?: string;
  };

  /** Scales Props */
  scales?: {
    yAxes?: {
      grid?: { lineWidth?: number; borderWidth: number };
      stacked?: boolean;
      ticks?: {
        font?: { size?: number; lineHeight?: string; style?: 'normal' };
        color?: string;
        display: boolean;
        stepSize?: number;
      };
    };
    xAxes?: {
      grid?: { lineWidth?: number; borderWidth: number };
      stacked?: boolean;
      ticks?: {
        font?: { size?: number; lineHeight?: string; style?: 'normal' };
        color?: string;
        display: boolean;
        stepSize?: number;
      };
    };
  };

  /** Tooltip Props */
  tooltip?: {
    enabled?: boolean;
    metric: string;
    mode: 'nearest' | 'index';
    padding?: number;
    displayColors?: boolean;
    cornerRadius?: number;

    /** Colors */
    backgroundColor?: string;
    titleColor?: string;
    bodyColor?: string;
    borderColor?: string;
    borderWidth?: number;
    bodyFont?: {
      size?: number;
      lineHeight?: number;
      weight?: string;
    };
    boxWidth?: number;
    boxHeight?: number;
    usePointStyle?: boolean;
    position?: 'average';
  };

  /** Base Values and Colors */
  baseValue?: number[] | number | null;
  baseColor?: Array<string> | string;
};
