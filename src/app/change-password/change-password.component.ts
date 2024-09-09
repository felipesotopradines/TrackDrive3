import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onChangePassword() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (this.oldPassword === user.password) {
        if (this.newPassword === this.confirmPassword) {
          user.password = this.newPassword;
          localStorage.setItem('user', JSON.stringify(user));
          alert('Contraseña cambiada con éxito');
          this.router.navigate(['/main']);
        } else {
          alert('Las nuevas contraseñas no coinciden');
        }
      } else {
        alert('Contraseña antigua incorrecta');
      }
    } else {
      alert('No se encontró ningún usuario registrado');
    }
  }
}
