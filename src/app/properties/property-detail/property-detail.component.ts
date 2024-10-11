import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MlsIntegrationService } from '../mls-integration.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  property: any;

  constructor(
    private route: ActivatedRoute,
    private mlsService: MlsIntegrationService
  ) {}

  ngOnInit(): void {
    const propertyId = this.route.snapshot.paramMap.get('id');
    if (propertyId) {
      this.mlsService.getPropertyDetails(propertyId).subscribe((data) => {
        this.property = data;
      });
    }
  }
}
