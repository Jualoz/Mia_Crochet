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

export const PRODUCTOS: Producto[] = [
  {
    id: 1,
    nombre: 'Osito',
    descripcion: 'Hecho a mano',
    precio: 25000,
    imagen: 'osito.jpg',
    categoriaId: ['Amigurumis', 'Accesorios'],
  },
  {
    id: 2,
    nombre: 'Collar',
    descripcion: 'Accesorio artesanal',
    precio: 15000,
    imagen: 'collar.jpg',
    categoriaId: ['Accesorios'],
  },
  {
    id: 3,
    nombre: 'Cuadro',
    descripcion: 'Decoración única',
    precio: 30000,
    imagen: 'cuadro.jpg',
    categoriaId: ['Decoracion'],
  },
  {
    id: 4,
    nombre: 'Camiseta',
    descripcion: 'Ropa artesanal',
    precio: 20000,
    imagen: 'camiseta.jpg',
    categoriaId: ['Ropa'],
  },
  {
    id: 5,
    nombre: 'Llaveros',
    descripcion: 'Diseño especial',
    precio: 10000,
    imagen: 'llavero.jpg',
    categoriaId: ['Otros'],
  },
];

export const CATEGORIES: Categoria[] = [
  { name: 'Bolsos', icon: '👜', id: 'bolsos' },
  { name: 'Amigurumis', icon: '🧸', id: 'amigurumis' },
  { name: 'Decoración', icon: '🏡', id: 'decoracion' },
  { name: 'Ropa', icon: '👗', id: 'ropa' },
  { name: 'Accesorios', icon: '✨', id: 'accesorios' },
];
