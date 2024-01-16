import express from 'express';
import { getItems, getItem, createItem, updateItem, deleteItem } from '../controllers/tracks.js';
import { validatorGetItem, validatorCreateItem } from '../validators/tracks.js';

const router = express.Router();

router.get('/', getItems);

router.get('/:id', validatorGetItem, getItem);

router.post('/', validatorCreateItem, createItem);

router.put('/:id', updateItem);
//router.put('/:id', validatorGetItem, validatorCreateItem, updateItem);

router.delete('/:id', validatorGetItem, deleteItem);

export default router;
