import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; // 1. Importar el módulo

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatIconModule], // 2. Agregarlo aquí
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent { }