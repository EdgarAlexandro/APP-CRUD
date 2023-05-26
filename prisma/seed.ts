import { PrismaClient } from "@prisma/client";
import { clienteSeeder } from "./seeders/clienteSeeder";
import { cineSeeder } from "./seeders/cineSeeder";
import { generoSeeder } from "./seeders/generoSeeder";
import { salaSeeder } from "./seeders/salaSeeder";
import { peliculaSeeder } from "./seeders/peliculaSeeder";
import { funcionSeeder } from "./seeders/funcionSeeder";
import { boletoSeeder } from "./seeders/boletoSeeder";

const prisma = new PrismaClient();

async function main() {
  await clienteSeeder();
  await cineSeeder();
  await generoSeeder();
  await salaSeeder();
  await peliculaSeeder();
  await funcionSeeder();
  await boletoSeeder();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
