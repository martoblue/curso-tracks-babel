import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Hola Mundo desde la ruta de AUTH');
  res.send('Hola Mundo desde la ruta de AUTH');
});

export default router; // Añadido nestedRouter a la exportación
