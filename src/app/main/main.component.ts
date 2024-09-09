import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  name: string | null = null; // Definir 'name' en lugar de 'username'

  constructor(private router: Router) {}

  ngOnInit() {
    // Obtener el nombre del usuario desde el localStorage o algún otro almacenamiento
    this.name = localStorage.getItem('name');
  }

  logout() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.router.navigate(['/login']);
  }

  goToChangePassword() {
    this.router.navigate(['/change-password']);
  }
}
