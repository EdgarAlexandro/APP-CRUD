import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const peliculaSeeder = async () => {
  const peliculas = await prisma.pelicula.createMany({
    data: [
      {
        titulo: "La Sirenita",
        director: "Rob Marshall",
        duracion_minutos: 135,
        id_genero: 2,
      },
      {
        titulo: "Guardianes de la Galaxia Vol. 3",
        director: "James Gunn",
        duracion_minutos: 149,
        id_genero: 4,
      },
      {
        titulo: "Super Mario Bros. La película",
        director: "Aaron Horvath",
        duracion_minutos: 92,
        id_genero: 3,
      },
      {
        titulo: "Misión Explosiva",
        director: "Mark Neveldine",
        duracion_minutos: 95,
        id_genero: 1,
      },
      {
        titulo: "Mirando al Cielo",
        director: "Antonio Peláez",
        duracion_minutos: 122,
        id_genero: 5,
      },
    ],
  });
  console.log({ peliculas });
  console.log("Peliculas seeded successfully.");
};