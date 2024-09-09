import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  email: string = '';
  securityWord: string = '';  // Asegúrate de que el nombre sea 'securityWord'
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onResetPassword() {
    // Validación de los campos de entrada
    if (!this.email || !this.securityWord || !this.newPassword || !this.confirmPassword) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Lógica para validar la palabra de seguridad y la nueva contraseña
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);

      if (this.email === user.email && this.securityWord === user.securityWord) {
        // Actualiza la contraseña en localStorage
        user.password = this.newPassword;
        localStorage.setItem('user', JSON.stringify(user));

        alert('Contraseña restablecida con éxito');
        this.router.navigate(['/login']);
      } else {
        alert('Correo electrónico o palabra de seguridad incorrectos');
      }
    } else {
      alert('No se encontró ningún usuario registrado');
    }
  }
}
