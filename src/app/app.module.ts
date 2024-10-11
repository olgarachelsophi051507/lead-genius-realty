// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CampaignTemplatesComponent } from './campaign/campaign-templates/campaign-templates.component';
import { CampaignContentComponent } from './campaign/campaign-content/campaign-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignTemplatesComponent,
    CampaignContentComponent,
    // Agrega aquí cualquier otro componente necesario
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Agrega otros módulos si son necesarios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
