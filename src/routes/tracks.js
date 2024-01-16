import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Hola Mundo desde la ruta de tracks');
  res.send('Hola Mundo desde la ruta de tracks');
});

export default router;
