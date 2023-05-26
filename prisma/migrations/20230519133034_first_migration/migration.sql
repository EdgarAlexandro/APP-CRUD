-- CreateTable
CREATE TABLE "Cine" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,

    CONSTRAINT "Cine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sala" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "capacidad" INTEGER NOT NULL,
    "id_cine" INTEGER NOT NULL,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genero" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Genero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pelicula" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "duracion_minutos" INTEGER NOT NULL,
    "id_genero" INTEGER NOT NULL,

    CONSTRAINT "Pelicula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funcion" (
    "id" SERIAL NOT NULL,
    "id_pelicula" INTEGER NOT NULL,
    "id_sala" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Funcion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boleto" (
    "id" SERIAL NOT NULL,
    "id_funcion" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "asiento" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Boleto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo" TEXT,
    "telefono" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sala" ADD CONSTRAINT "Sala_id_cine_fkey" FOREIGN KEY ("id_cine") REFERENCES "Cine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pelicula" ADD CONSTRAINT "Pelicula_id_genero_fkey" FOREIGN KEY ("id_genero") REFERENCES "Genero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funcion" ADD CONSTRAINT "Funcion_id_pelicula_fkey" FOREIGN KEY ("id_pelicula") REFERENCES "Pelicula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funcion" ADD CONSTRAINT "Funcion_id_sala_fkey" FOREIGN KEY ("id_sala") REFERENCES "Sala"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boleto" ADD CONSTRAINT "Boleto_id_funcion_fkey" FOREIGN KEY ("id_funcion") REFERENCES "Funcion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boleto" ADD CONSTRAINT "Boleto_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
