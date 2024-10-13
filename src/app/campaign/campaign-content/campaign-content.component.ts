// src/app/campaign/campaign-content/campaign-content.component.ts
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-campaign-content',
  templateUrl: './campaign-content.component.html',
  styleUrls: ['./campaign-content.component.css']
})
export class CampaignContentComponent {
  imageUrl = '/assets/default-image.jpg'; // Ruta de imagen predeterminada
  title = 'Campaign Title'; // Título predeterminado
  description = 'This is a sample campaign description.'; // Descripción predeterminada
}
