import { Component } from '@angular/core';
import { ItemCarrito } from '../../data/carrito';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss',
})
export class Carrito {
  carrito: ItemCarrito[] = [];
  total: number = 0;
  mensaje: string = '';

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.carrito$.subscribe((items) => {
      this.carrito = items;
      this.total = this.carritoService.getTotal();
      this.mensaje = this.carritoService.generarMensajeWhatsApp();
    });
  }
}
