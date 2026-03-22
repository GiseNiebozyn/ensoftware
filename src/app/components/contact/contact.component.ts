import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailServiceService } from '../../services/email-service.service';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formData = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  constructor(private emailService: EmailServiceService,
    private snackBar: MatSnackBar
  ) {}

   enviarFormulario() {
    this.emailService.sendEmail(this.formData)
      .then(() => {
        this.snackBar.open('Mensaje enviado correctamente ✅', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['success-snackbar']
        });

        this.formData = { nombre: '', email: '', mensaje: '' };
      })
      .catch((error) => {
        console.error(error);

        this.snackBar.open('Error al enviar el mensaje ❌', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['error-snackbar']
        });
      });
  }
}