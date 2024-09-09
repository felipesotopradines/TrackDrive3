import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { passValidator } from '../helpers/validation.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);

      //Validamos con helper
      const isValid = passValidator(this.password);
      console.log('Is password valid?', isValid);
      if(!isValid){
        alert('Is password valid');
        return;
      }


      if (this.email === user.email && this.password === user.password) {
        this.router.navigate(['/main']);
      } else {
        alert('Correo o contraseña incorrectos');
      }
    } else {
      alert('No se encontró ningún usuario registrado');
    }
  }

  goToResetPassword() {
    this.router.navigate(['/reset-password']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
