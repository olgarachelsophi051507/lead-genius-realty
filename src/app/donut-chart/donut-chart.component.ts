// src/app/donut-chart/donut-chart.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
  standalone: true, // Asegúrate de que tenga esta propiedad
})
export class DonutChartComponent {
  @Input() value = 0;
}
