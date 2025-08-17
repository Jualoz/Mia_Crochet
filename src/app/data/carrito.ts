import { Producto } from './productos';

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}