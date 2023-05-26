import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const funcionSeeder = async () => {
  const funciones = await prisma.funcion.createMany({
    data: [
      {
        id_pelicula: 1,
        id_sala: 1,
        fecha: new Date("2023-05-18 11:00:00"),
      },
      {
        id_pelicula: 4,
        id_sala: 8,
        fecha: new Date("2023-05-18 11:50:00"),
      },
      {
        id_pelicula: 5,
        id_sala: 14,
        fecha: new Date("2023-05-18 15:00:00"),
      },
      {
        id_pelicula: 2,
        id_sala: 20,
        fecha: new Date("2023-05-18 16:50:00"),
      },
      {
        id_pelicula: 1,
        id_sala: 2,
        fecha: new Date("2023-05-18 17:40:00"),
      },
      {
        id_pelicula: 3,
        id_sala: 25,
        fecha: new Date("2023-05-18 11:50:00"),
      },
      {
        id_pelicula: 3,
        id_sala: 5,
        fecha: new Date("2023-05-18 09:00:00"),
      },
      {
        id_pelicula: 2,
        id_sala: 1,
        fecha: new Date("2023-05-18 18:20:00"),
      },
      {
        id_pelicula: 5,
        id_sala: 6,
        fecha: new Date("2023-05-18 15:10:00"),
      },
      {
        id_pelicula: 4,
        id_sala: 13,
        fecha: new Date("2023-05-18 12:50:00"),
      },
    ],
  });
  console.log({ funciones });
  console.log("Funciones seeded successfully.");
};