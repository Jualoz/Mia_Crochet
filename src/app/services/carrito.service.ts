// src/app/services/carrito.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { ItemCarrito } from '../data/carrito';
import { Producto } from '../data/productos';

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private carrito: ItemCarrito[] = [];
  private carritoSubject = new BehaviorSubject<ItemCarrito[]>([]);
  private isBrowser: boolean;

  carrito$ = this.carritoSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const data = localStorage.getItem('carrito');
      if (data) {
        this.carrito = JSON.parse(data);
        this.carritoSubject.next(this.carrito);
      }
    }
  }

  private guardarEnStorage() {
    if (this.isBrowser) {
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }
  }

  agregar(producto: Producto) {
    const item = this.carrito.find((i) => i.producto.id === producto.id);
    if (item) {
      item.cantidad++;
    } else {
      this.carrito.push({ producto, cantidad: 1 });
    }
    this.carritoSubject.next(this.carrito);
    this.guardarEnStorage();
  }

  quitar(id: number) {
    this.carrito = this.carrito.filter((i) => i.producto.id !== id);
    this.carritoSubject.next(this.carrito);
    this.guardarEnStorage();
  }

  getTotal() {
    return this.carrito.reduce((acc, i) => acc + i.producto.precio * i.cantidad, 0);
  }

  generarMensajeWhatsApp(): string {
    let mensaje = 'Hola, quiero hacer este pedido:%0A';
    this.carrito.forEach((i) => {
      mensaje += `- ${i.producto.nombre} x${i.cantidad} = $${i.producto.precio * i.cantidad}%0A`;
    });
    mensaje += `Total: $${this.getTotal()}`;
    return mensaje;
  }

  getItems() {
    return this.carrito;
  }
}
