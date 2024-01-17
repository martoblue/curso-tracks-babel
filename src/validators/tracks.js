import { check } from 'express-validator';
import { validationResults } from '../util/handleValidator.js';

const validatorCreateItem = [
  check('name').notEmpty(),
  check('album').notEmpty(),
  check('cover').notEmpty(),
  check('artist_name').notEmpty(),
  check('artist_nickname').notEmpty(),
  check('artisk_nationality').notEmpty(),
  check('duration_start').notEmpty(),
  check('duration_end').notEmpty(),
  check('mediaId').notEmpty(),
  (req, res, next) => {
    validationResults(req, res, next);
  },
];

// const validatorUpdateItem = [
//   check('id').exists().notEmpty().withMessage('El id es obligatorio'),
//   check('name').exists().notEmpty().withMessage('El nombre es obligatorio'),
//   check('album').exists().notEmpty().withMessage('El album es obligatorio'),
//   check('cover').exists().notEmpty().withMessage('El cover es obligatorio'),
//   check('artist_name').exists().notEmpty().withMessage('El artista es obligatorio'),
//   check('artist_nickname').exists().notEmpty().withMessage('El artista es obligatorio'),
//   check('artist_nationality').exists().notEmpty().withMessage('El artista es obligatorio'),
//   check('duration_start').exists().notEmpty().withMessage('La duración es obligatoria'),
//   check('duration_end').exists().notEmpty().withMessage('La duración es obligatoria'),
//   check('mediaId').exists().notEmpty().withMessage('El mediaId es obligatorio'),
// ];

const validatorGetItem = [
  check('id').exists().notEmpty(),
  (req, res, next) => {
    validationResults(req, res, next);
  },
];

export { validatorCreateItem, validatorGetItem };
