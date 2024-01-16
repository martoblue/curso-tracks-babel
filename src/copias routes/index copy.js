import express from 'express';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const router = express.Router();
const PATH_ROUTES = dirname(fileURLToPath(import.meta.url));

const removeExtension = (fileName) => {
  return fileName.split('.').shift();
};

const loadRoutes = async () => {
  try {
    const files = await fs.readdir(PATH_ROUTES);

    for (const file of files) {
      const name = removeExtension(file);

      if (name !== 'index') {
        console.log(`Cargando rutas ${name}`);

        try {
          const { router: nestedRouter } = await import(`./${file}`);
          router.use(`/${name}`, nestedRouter);
        } catch (error) {
          console.error(`Error al cargar la ruta ${name}: ${error.message}`);
        }
      }
    }
  } catch (error) {
    console.error(`Error al leer el directorio de rutas: ${error.message}`);
  }
};

loadRoutes();

export default router;
