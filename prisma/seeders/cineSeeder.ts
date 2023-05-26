import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const cineSeeder = async () => {
  const cines = await prisma.cine.createMany({
    data: [
      {
        nombre: "Cinépolis",
        direccion:
          "Av Hacienda de Peñuelas 6773, Cumbres Las Palmas Residencial, 64340 Monterrey, N.L.",
      },
      {
        nombre: "Cinemex",
        direccion:
          "Av. Abraham Lincoln No. 8000 8000, entre Av. Luis Donaldo Colosio y Bosque de Chapultepec, Cd. Solidaridad, 64100 Monterrey, N.L.",
      },
      {
        nombre: "Cinépolis VIP",
        direccion:
          "Av Hacienda de Peñuelas 6773, Cumbres Las Palmas Residencial, 64340 Monterrey, N.L.",
      },
      {
        nombre: "Cine Tonalá",
        direccion:
          "Tonalá 261, Roma Sur, Cuauhtémoc, 06760 Ciudad de México, CDMX",
      },
      {
        nombre: "Cineteca Nacional",
        direccion: "Diagonal 200, Roma, 64700 Monterrey, N.L.",
      },
    ],
  });
  console.log({ cines });
  console.log("Cines seeded successfully.");
};