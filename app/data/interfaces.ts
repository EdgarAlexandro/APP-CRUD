//Modelos de datos

export interface Cines {
  id: number;
  nombre: string;
  direccion: string;
  createdAt: string;
  updatedAt: string;
}

export interface Peliculas {
  id: number;
  titulo: string;
  director: string;
  duracion_minutos: number;
  id_genero: number;
  createdAt: string;
  updatedAt: string;
}