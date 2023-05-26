import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const salaSeeder = async () => {
  const salas = await prisma.sala.createMany({
    data: [
      { numero: 1, capacidad: 100, id_cine: 1 },
      { numero: 2, capacidad: 120, id_cine: 1 },
      { numero: 3, capacidad: 80, id_cine: 1 },
      { numero: 4, capacidad: 90, id_cine: 1 },
      { numero: 5, capacidad: 150, id_cine: 1 },
      { numero: 1, capacidad: 100, id_cine: 2 },
      { numero: 2, capacidad: 120, id_cine: 2 },
      { numero: 3, capacidad: 80, id_cine: 2 },
      { numero: 4, capacidad: 90, id_cine: 2 },
      { numero: 5, capacidad: 150, id_cine: 2 },
      { numero: 1, capacidad: 100, id_cine: 3 },
      { numero: 2, capacidad: 120, id_cine: 3 },
      { numero: 3, capacidad: 80, id_cine: 3 },
      { numero: 4, capacidad: 90, id_cine: 3 },
      { numero: 5, capacidad: 150, id_cine: 3 },
      { numero: 1, capacidad: 100, id_cine: 4 },
      { numero: 2, capacidad: 120, id_cine: 4 },
      { numero: 3, capacidad: 80, id_cine: 4 },
      { numero: 4, capacidad: 90, id_cine: 4 },
      { numero: 5, capacidad: 150, id_cine: 4 },
      { numero: 1, capacidad: 100, id_cine: 5 },
      { numero: 2, capacidad: 120, id_cine: 5 },
      { numero: 3, capacidad: 80, id_cine: 5 },
      { numero: 4, capacidad: 90, id_cine: 5 },
      { numero: 5, capacidad: 150, id_cine: 5 },
    ],
  });
  console.log({ salas });
  console.log("Salas seeded successfully.");
};