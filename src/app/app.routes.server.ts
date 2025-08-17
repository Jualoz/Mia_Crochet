import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',              // Ruta principal prerenderizada
    renderMode: RenderMode.Prerender
  },
  {
    path: 'productos',     // Lista general de productos prerenderizada
    renderMode: RenderMode.Prerender
  },
  {
    path: 'productos',  // Rutas con parámetro se renderizan en cliente
    renderMode: RenderMode.Prerender
  },
  {
    path: 'contacto',      // Contacto prerenderizado
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',             // Otras rutas también prerenderizadas
    renderMode: RenderMode.Prerender
  }
];
