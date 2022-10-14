import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { CanvasChartOptions } from './types/canvas-chart-options.type';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  @ViewChild('chartCanvas', { static: true }) canvasElement!: ElementRef;

  @Input() canvasChartOptions!: CanvasChartOptions;
  @Input() set canvasProps(props: Array<number>) {
    if (props !== undefined && props.length > 0) {
      this._cleanChart();
      this._updateChart(props);
    }
  }

  private _canvasChart!: Chart;
  private _canvasChartOptions!: any;

  constructor() {}

  ngOnInit(): void {
    this.canvasChartOptions = {};
    this._canvasChartOptions = this._initializeCanvasChartOptions();
    this._canvasChart = this._initializeCanvasChart();
  }

  private _cleanChart(): void {
    if (this._canvasChart) {
      this._canvasChart.data.datasets = [];
      this._canvasChart.data.labels = [];
      this._canvasChart.update('resize');
    }
  }

  private _initializeCanvasChartOptions() {
    return {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: '',
            data: [],
          },
        ],
      },
      options: {},
    };
  }

  private _initializeCanvasChart(): Chart {
    return new Chart(
      this.canvasElement.nativeElement,
      this._canvasChartOptions
    );
  }

  private _updateChart(series: Array<number>): void {
    const labels = [];

    for (let i = 1; i <= series.length; i++) {
      labels.push(i);
    }

    this._canvasChart.data.labels = labels;
    this._canvasChart.data.datasets = [
      {
        label: 'Average',
        data: series,
      },
    ];

    console.log(this._canvasChart.data.datasets);

    this._canvasChart.update('resize');
  }
}
