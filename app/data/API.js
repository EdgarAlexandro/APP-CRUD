const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const puerto = 3001;

//Documentacion PRISMA:
//https://www.prisma.io/docs/reference/api-reference/prisma-client-reference

// Habilitar CORS para todas las rutas
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Max-Age", "86400");
  next();
});

app.use(express.json());

//Ruta para obtener los cines
app.get("/cines", async (_req, res) => {
  try {
    const cines = await prisma.cine.findMany({
      orderBy: [
        {
          id: "asc",
        },
      ],
    });
    res.json(cines);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los cines" });
  }
});

//Ruta para obtener las peliculas
app.get("/peliculas", async (_req, res) => {
  try {
    const peliculas = await prisma.pelicula.findMany({
      orderBy: [
        {
          id: "asc",
        },
      ],
    });
    res.json(peliculas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las peliculas" });
  }
});

//Ruta para modificar un cine
app.put("/cines/:id", async (req, res) => {
  const cineId = parseInt(req.params.id);
  const { nombre, direccion } = req.body;
  // Actualiza los datos del cine
  const cine = await prisma.cine.update({
    where: {
      id: cineId,
    },
    data: { nombre: nombre, direccion: direccion },
  });
  // Envia una respuesta exitosa
  res.json({ message: "Cine actualizado correctamente", cine });
});

//Ruta para eliminar un cine
app.delete("/cines/:id", async (req, res) => {
  const cineId = parseInt(req.params.id);
  //Elimina el cine con ese ID
  const cine = await prisma.cine.delete({
    where: { id: cineId },
  });
  // Envia una respuesta exitosa
  res.json({ message: "Cine eliminado correctamente", cine });
});

//Ruta para agregar un cine
app.post("/cines", async (req, res) => {
  const { nombre, direccion } = req.body;
  //Crea el cine con los datos del request
  const cine = await prisma.cine.create({
    data: { nombre: nombre, direccion: direccion },
  });
  // Envia una respuesta exitosa
  res.json({ message: "Cine creado correctamente", cine });
});

app.listen(puerto, () => {
  console.log(`Servidor iniciado en el puerto ${puerto}`);
});
