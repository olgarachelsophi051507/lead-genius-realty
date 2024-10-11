// src/app/campaign/campaign-content/campaign-content.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-campaign-content',
  templateUrl: './campaign-content.component.html',
  styleUrls: ['./campaign-content.component.css']
})
export class CampaignContentComponent {
  title = 'Hi Lauren, welcome to your personal offers and streaming bundles.';
  description = 'Nurture prospect and customer relationships with premade, customizable email templates that match your brand. Use built-in analytics to review performance and deliver effective marketing content.';
  imageUrl = 'https://via.placeholder.com/150'; // URL de la imagen
}
