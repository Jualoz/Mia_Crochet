import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-cart-widget',
  imports: [],
  templateUrl: './cart-widget.html',
  styleUrl: './cart-widget.scss',
})
export class CartWidget {
  isOpen = false;
  constructor(private cartService: CarritoService) {}

  get cart() {
    return this.cartService.getItems();
  }

  get cartCount() {
    return this.cart.length;
  }

  toggleCart() {
    this.isOpen = !this.isOpen;
  }

  remove(index: number) {
    this.cartService.quitar(index);
  }

  finalizarCompra() {
    const mensaje = this.cartService.generarMensajeWhatsApp();
    const url = `https://wa.me/573202681597?text=${mensaje}`;
    window.open(url, '_blank');
  }
}
