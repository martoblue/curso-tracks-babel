import express from 'express';
import { getItems } from '../controllers/tracks.js';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Hola Mundo desde la ruta de tracks');
  res.send('Hola Mundo desde la ruta de tracks');
});
router.get('/all', getItems);

export default router;
