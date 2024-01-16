import { check } from 'express-validator';
import { validationResults } from '../util/handleValidator.js';

const validatorCreateItem = [
  check('name').exists().notEmpty().withMessage('El nombre es obligatorio'),
  check('album').exists().notEmpty().withMessage('El album es obligatorio'),
  check('cover').exists().notEmpty().withMessage('El cover es obligatorio'),
  check('artist_name').exists().notEmpty().withMessage('El artista es obligatorio'),
  check('artist_nickname').exists().notEmpty().withMessage('El artista es obligatorio'),
  check('artist_nationality').exists().notEmpty().withMessage('El artista es obligatorio'),
  check('duration_start').exists().notEmpty().withMessage('La duración es obligatoria'),
  check('duration_end').exists().notEmpty().withMessage('La duración es obligatoria'),
  check('mediaId').exists().notEmpty().withMessage('El mediaId es obligatorio'),
  (req, res, next) => {
    try {
      validationResults(req).throw();
      next(); // Si no hay errores, continua con la siguiente función de middleware
    } catch (error) {
      return res.status(403).json({ error: error.errors });
    }
  },
];

const validatorUpdateItem = [
  check('id').exists().notEmpty().withMessage('El id es obligatorio'),
  check('name').exists().notEmpty().withMessage('El nombre es obligatorio'),
  check('album').exists().notEmpty().withMessage('El album es obligatorio'),
  check('cover').exists().notEmpty().withMessage('El cover es obligatorio'),
  check('artist_name').exists().notEmpty().withMessage('El artista es obligatorio'),
  check('artist_nickname').exists().notEmpty().withMessage('El artista es obligatorio'),
  check('artist_nationality').exists().notEmpty().withMessage('El artista es obligatorio'),
  check('duration_start').exists().notEmpty().withMessage('La duración es obligatoria'),
  check('duration_end').exists().notEmpty().withMessage('La duración es obligatoria'),
  check('mediaId').exists().notEmpty().withMessage('El mediaId es obligatorio'),
];

const validatorGetItem = [
  check('id').exists().notEmpty(),
  (req, res, next) => {
    validationResults(req, res, next);
  },
];

export { validatorCreateItem, validatorUpdateItem, validatorGetItem };
