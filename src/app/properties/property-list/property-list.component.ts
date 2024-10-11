import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MlsIntegrationService } from '../mls-integration.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: any[] = [];

  constructor(
    private mlsService: MlsIntegrationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mlsService.getProperties().subscribe((data) => {
      this.properties = data;
    });
  }

  viewDetails(propertyId: string): void {
    this.router.navigate(['/mls/property', propertyId]);
  }
}
