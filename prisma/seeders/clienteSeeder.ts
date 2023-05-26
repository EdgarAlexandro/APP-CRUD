import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const clienteSeeder = async () => {
  const clientes = await prisma.cliente.createMany({
    data: [
      {
        nombre: "Edgar Alexandro",
        apellido: "Castillo Palacios",
        correo: "A00830568@tec.mx",
        telefono: "111111111",
      },
      {
        nombre: "Omar Daniel",
        apellido: "Rodríguez Salinas",
        correo: "omar@tec.mx",
        telefono: "222222222",
      },
      {
        nombre: "Diego Alonso",
        apellido: "Bugarin Estrada",
        telefono: "333333333",
      },
      {
        nombre: "Hugo Edgar",
        apellido: "Palomares Estrella",
        telefono: "444444444",
      },
      {
        nombre: "Santiago",
        apellido: "Ortiz Pérez",
        correo: "santiOP@tec.mx",
        telefono: "555555555",
      },
    ],
  });
  console.log({ clientes });
  console.log("Clientes seeded successfully.");
};