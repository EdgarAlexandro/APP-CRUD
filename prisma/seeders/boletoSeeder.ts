import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const boletoSeeder = async () => {
  const boletos = await prisma.boleto.createMany({
    data: [
      {
        id_funcion: 1,
        id_cliente: 5,
        asiento: "C10",
        precio: 75,
      },
      {
        id_funcion: 4,
        id_cliente: 3,
        asiento: "E22",
        precio: 75,
      },
      {
        id_funcion: 6,
        id_cliente: 1,
        asiento: "C5",
        precio: 75,
      },
      {
        id_funcion: 7,
        id_cliente: 5,
        asiento: "B10",
        precio: 75,
      },
      {
        id_funcion: 5,
        id_cliente: 4,
        asiento: "A13",
        precio: 60,
      },
      {
        id_funcion: 9,
        id_cliente: 2,
        asiento: "F1",
        precio: 75,
      },
    ],
  });
  console.log({ boletos });
  console.log("Boletos seeded successfully.");
};