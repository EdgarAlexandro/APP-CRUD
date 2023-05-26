import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const generoSeeder = async () => {
  const generos = await prisma.genero.createMany({
    data: [
      { nombre: "Acción" },
      { nombre: "Fantasía" },
      { nombre: "Animación" },
      { nombre: "Ciencia ficción" },
      { nombre: "Drama" },
    ],
  });
  console.log({ generos });
  console.log("Generos seeded successfully.");
};