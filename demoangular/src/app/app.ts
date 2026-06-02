import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demoangular');
  usuarios = [
    { id: 1, nombre: 'Juan', correo: 'juan@example.com' },
    { id: 2, nombre: 'Ana', correo: 'ana@example.com' },
  { id: 3, nombre: 'Pedro', correo: 'pedro@example.com' },
  ];
  hobbies = [
  { id: 1, nombre: 'Fútbol', descripcion: 'Practicar deporte en equipo' },
  { id: 2, nombre: 'Lectura', descripcion: 'Leer libros o artículos' },
  { id: 3, nombre: 'Música', descripcion: 'Escuchar o tocar instrumentos' },
  { id: 4, nombre: 'Dibujo', descripcion: 'Realizar dibujos o pinturas' },
  { id: 5, nombre: 'Videojuegos', descripcion: 'Jugar en consola, PC o celular' },
  { id: 6, nombre: 'Cocina', descripcion: 'Preparar comidas o postres' },
];
}
