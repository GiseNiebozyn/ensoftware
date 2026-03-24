import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importante para el *ngIf
import { EmailServiceService } from '../../services/email-service.service';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  // Agregamos CommonModule y MatSnackBarModule aquí
  imports: [FormsModule, CommonModule, MatSnackBarModule], 
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formData = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  // Variable para controlar el estado del botón mientras se envía
  enviando = false;

  constructor(
    private emailService: EmailServiceService,
    private snackBar: MatSnackBar
  ) {}

  enviarFormulario() {
    // 1. VALIDACIÓN EXTRA (Opcional si ya la hacés en HTML, pero recomendada)
    if (!this.formData.nombre || !this.formData.email || !this.formData.mensaje) {
      this.mostrarMensaje('Por favor, completa todos los campos ⚠️', 'error-snackbar');
      return;
    }

    // 2. ACTIVAR ESTADO DE CARGA
    this.enviando = true;

    this.emailService.sendEmail(this.formData)
      .then(() => {
        this.mostrarMensaje('¡Mensaje enviado correctamente! ✅', 'success-snackbar');
        
        // 3. LIMPIAR FORMULARIO
        this.formData = { nombre: '', email: '', mensaje: '' };
      })
      .catch((error) => {
        console.error(error);
        this.mostrarMensaje('Hubo un error al enviar el mensaje ❌', 'error-snackbar');
      })
      .finally(() => {
        // 4. DESACTIVAR ESTADO DE CARGA (Pase lo que pase, el botón vuelve a la vida)
        this.enviando = false;
      });
  }

  // Función auxiliar para no repetir código de SnackBar
  private mostrarMensaje(mensaje: string, clase: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [clase]
    });
  }
}