export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoriaId: string[];
}

export interface Categoria {
  id: string;
  name: string;
  icon: string;
}