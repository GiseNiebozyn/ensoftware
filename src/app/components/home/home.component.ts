import { Component, OnInit, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Title, Meta } from '@angular/platform-browser'; // Importamos las herramientas de SEO

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(
    private el: ElementRef,
    private titleService: Title, // Inyectamos el servicio de Título
    private metaService: Meta    // Inyectamos el servicio de Meta Tags
  ) {}

  ngOnInit(): void {
    // --- CONFIGURACIÓN SEO PARA GOOGLE ---
    this.titleService.setTitle('EN Software | Desarrollo Web y Sistemas en Concordia');
    
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Expertos en .NET y Angular en Concordia. Creamos landing pages, e-commerce y sistemas a medida para potenciar tu negocio.' 
    });

    this.metaService.updateTag({ 
      name: 'keywords', 
      content: 'desarrollo web, concordia, software a medida, dotnet, angular, EN Software, programador' 
    });

    // Configuración para que el link se vea profesional en WhatsApp/Redes
    this.metaService.updateTag({ property: 'og:title', content: 'EN Software - Soluciones Digitales' });
    this.metaService.updateTag({ property: 'og:image', content: 'assets/gata.png' });

    // --- EFECTO VISUAL DE CARGA (TU CÓDIGO ACTUAL) ---
    setTimeout(() => {
      const homeElement = this.el.nativeElement.querySelector('.home');
      if (homeElement) {
        homeElement.classList.add('loaded');
      }
    }, 100);
  }
}