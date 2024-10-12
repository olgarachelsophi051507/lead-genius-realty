// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CampaignTemplatesComponent } from './campaign/campaign-templates/campaign-templates.component';
import { CampaignContentComponent } from './campaign/campaign-content/campaign-content.component';

export const APP_ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: 'campaign-templates', component: CampaignTemplatesComponent },
  { path: 'campaign-content', component: CampaignContentComponent },
  // Agrega otras rutas necesarias
];
