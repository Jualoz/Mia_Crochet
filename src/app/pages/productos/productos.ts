import { Component } from '@angular/core';
import { Producto, PRODUCTOS } from '../../data/productos';
import { CommonModule } from '@angular/common';
import { ProductMenu } from '../../components/product-menu/product-menu';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, ProductMenu],
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})
export class Productos {
  productos: Producto[] = PRODUCTOS;
  categoriaSeleccionada: string = '';

  constructor(
    private carritoService: CarritoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Observa cambios en la URL
    this.route.paramMap.subscribe((params) => {
      this.categoriaSeleccionada = params.get('seccion') || '';
    });
  }

  get productosFiltrados() {
    if (!this.categoriaSeleccionada) return this.productos;
    return this.productos.filter((p) =>
      p.categoriaId.some(
        (c) => c.toLocaleLowerCase() === this.categoriaSeleccionada.toLocaleLowerCase()
      )
    );
  }

  filtrarPorCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregar(producto);
  }
}
