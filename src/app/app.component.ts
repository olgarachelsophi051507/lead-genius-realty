import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  services = [
    { name: 'SERVICE_LEADS', description: 'SERVICE_LEADS_DESC' },
    { name: 'SERVICE_FACEBOOK_ADS', description: 'SERVICE_FACEBOOK_ADS_DESC' },
    { name: 'SERVICE_WHATSAPP', description: 'SERVICE_WHATSAPP_DESC' },
    { name: 'SERVICE_EMAIL_MARKETING', description: 'SERVICE_EMAIL_MARKETING_DESC' },
    { name: 'SERVICE_LANDING_PAGES', description: 'SERVICE_LANDING_PAGES_DESC' },
    { name: 'SERVICE_SPREADSHEETS', description: 'SERVICE_SPREADSHEETS_DESC' },
    { name: 'SERVICE_INSTAGRAM', description: 'SERVICE_INSTAGRAM_DESC' },
    { name: 'SERVICE_PRICE_PREDICTION', description: 'SERVICE_PRICE_PREDICTION_DESC' },
    { name: 'SERVICE_MAP', description: 'SERVICE_MAP_DESC' },
    { name: 'SERVICE_VIRTUAL_ASSISTANT', description: 'SERVICE_VIRTUAL_ASSISTANT_DESC' },
    { name: 'SERVICE_DOCUMENT_MANAGEMENT', description: 'SERVICE_DOCUMENT_MANAGEMENT_DESC' },
    { name: 'SERVICE_MORTGAGE_CALCULATOR', description: 'SERVICE_MORTGAGE_CALCULATOR_DESC' }
  ];

  constructor(private translate: TranslateService) {
    // Establece el idioma predeterminado
    this.translate.setDefaultLang('en'); // Cambia a 'es' si prefieres español como predeterminado
  }

  // Cambiar idioma
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
