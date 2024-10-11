// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignTemplatesComponent } from './campaign/campaign-templates/campaign-templates.component';

const routes: Routes = [
  { path: 'campaign-templates', component: CampaignTemplatesComponent },
  { path: '', redirectTo: '/campaign-templates', pathMatch: 'full' }  // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
