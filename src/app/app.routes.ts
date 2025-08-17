import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'productos', component: Productos },
  { path: 'productos/:seccion', component: Productos },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' }
];