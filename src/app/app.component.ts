import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent {
  services = [
    { name: 'Gestión de Leads', description: 'Administra tus contactos y etapas de clientes.' },
    { name: 'Campañas de Facebook Ads', description: 'Crea y administra campañas publicitarias.' },
    { name: 'Integración con WhatsApp', description: 'Mantén contacto directo con tus clientes.' },
    { name: 'Email Marketing', description: 'Envía campañas de marketing personalizadas.' },
    { name: 'Landing Pages Personalizadas', description: 'Diseña y publica páginas de aterrizaje únicas.' },
    { name: 'Hojas de Cálculo Dinámicas', description: 'Calcula ingresos de cada agente con precisión.' },
    { name: 'Integración con Instagram', description: 'Publica anuncios de propiedades directamente.' },
    { name: 'Integraciones con Zapier y Mailchimp', description: 'Conecta con servicios externos de automatización.' },
    { name: 'Análisis Predictivo de Precios', description: 'Predice precios y tendencias del mercado.' },
    { name: 'Mapa Interactivo de Propiedades', description: 'Explora propiedades en un mapa 3D.' },
    { name: 'Asistente Virtual 24/7', description: 'Chatbot de IA para asistencia continua.' },
    { name: 'Gestión de Documentos Digitales', description: 'Organiza y firma documentos digitalmente.' },
    { name: 'Calculadora de Hipoteca y ROI', description: 'Calcula hipotecas y retorno de inversión.' },
    { name: 'Seguimiento de Leads', description: 'Recibe notificaciones sobre tus leads.' },
    { name: 'Integración con MLS', description: 'Accede a listados de propiedades en tiempo real.' },
    { name: 'Realidad Aumentada para Recorridos', description: 'Visitas inmersivas de propiedades en RA.' },
    { name: 'Marketplace de Servicios Complementarios', description: 'Encuentra servicios adicionales para tus clientes.' },
    { name: 'Generador Automático de Propuestas', description: 'Crea propuestas personalizadas para vendedores.' }
  ];

  hoverIn(service: any) {
    service.hovered = true;
  }

  hoverOut(service: any) {
    service.hovered = false;
  }
}
