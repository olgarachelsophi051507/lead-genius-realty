import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports = [
    { title: 'Reporte de Ventas', date: '2024-10-10' },
    { title: 'Análisis de Clientes', date: '2024-10-12' }
  ];

  constructor() {}

  ngOnInit(): void {}

  generateReport(): void {
    // Lógica para generar reportes personalizados
  }
}
