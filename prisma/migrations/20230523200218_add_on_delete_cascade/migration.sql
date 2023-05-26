-- DropForeignKey
ALTER TABLE "Boleto" DROP CONSTRAINT "Boleto_id_cliente_fkey";

-- DropForeignKey
ALTER TABLE "Boleto" DROP CONSTRAINT "Boleto_id_funcion_fkey";

-- DropForeignKey
ALTER TABLE "Funcion" DROP CONSTRAINT "Funcion_id_pelicula_fkey";

-- DropForeignKey
ALTER TABLE "Funcion" DROP CONSTRAINT "Funcion_id_sala_fkey";

-- DropForeignKey
ALTER TABLE "Pelicula" DROP CONSTRAINT "Pelicula_id_genero_fkey";

-- DropForeignKey
ALTER TABLE "Sala" DROP CONSTRAINT "Sala_id_cine_fkey";

-- AddForeignKey
ALTER TABLE "Sala" ADD CONSTRAINT "Sala_id_cine_fkey" FOREIGN KEY ("id_cine") REFERENCES "Cine"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pelicula" ADD CONSTRAINT "Pelicula_id_genero_fkey" FOREIGN KEY ("id_genero") REFERENCES "Genero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funcion" ADD CONSTRAINT "Funcion_id_pelicula_fkey" FOREIGN KEY ("id_pelicula") REFERENCES "Pelicula"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funcion" ADD CONSTRAINT "Funcion_id_sala_fkey" FOREIGN KEY ("id_sala") REFERENCES "Sala"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boleto" ADD CONSTRAINT "Boleto_id_funcion_fkey" FOREIGN KEY ("id_funcion") REFERENCES "Funcion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boleto" ADD CONSTRAINT "Boleto_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;
