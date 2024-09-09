import { Component } from '@angular/core';
import { Router } from '@angular/router';

//Import custom Helper
import { passValidator } from '../helpers/validation.helper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  securityWord: string = ''; // Campo para la palabra de seguridad

  constructor(private router: Router) {}

  onRegister() {
    if (this.password === this.confirmPassword) {

      //Validamos con helper
      const isValid = passValidator(this.password);
      console.log('Is password valid?', isValid);
      if(!isValid){
        alert('Is password valid');
        return;
      }

      // Aquí puedes agregar lógica para manejar el registro, como enviar los datos a un servidor
      console.log('Nombre:', this.name);
      console.log('Correo:', this.email);
      console.log('Contraseña:', this.password);
      console.log('Palabra de seguridad:', this.securityWord);


      //Almacenamos a LocalStorag
      const user = {
        "name": this.name,
        "email" :  this.email,
        "password": this.password,
        "securityWord":this.securityWord
      }
      localStorage.setItem('user', JSON.stringify(user));

      // Redirige al usuario a la página de login después del registro
      this.router.navigate(['/login']);
    } else {
      alert('Las contraseñas no coinciden');
    }
  }
}
