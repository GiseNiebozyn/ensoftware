import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  sendEmail(data: any) {
    const templateParams = {
      nombre: data.nombre,
      email: data.email,
      mensaje: data.mensaje
    };

    return emailjs.send(
      'service_wqvmp7a',
      'template_qkg3k2z',
      templateParams,
      'eaAt2vhylNahtleMf'
    );
  }
}