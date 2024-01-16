import { check } from 'express-validator';
import { validationResults } from '../util/handleValidator';

const validatorCreateItem = [
  check('name').exists().notEmpty().isLength({ min: 3, max: 30 }).withMessage('El nombre es obligatorio'),
  check('age').exists().notEmpty().withMessage('El age es obligatorio'),
  check('email').exists().notEmpty().isLength({ min: 3, max: 60 }).withMessage('El email es obligatorio'),
  check('password').exists().notEmpty().withMessage('El password es obligatorio'),
  check('active').exists().notEmpty().isBoolean().withMessage('El active es obligatorio'),
  check('role').exists().notEmpty().withMessage('El role es obligatorio'),
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
  check('name').exists().notEmpty().isLength({ min: 3, max: 30 }).withMessage('El nombre es obligatorio'),
  check('age').exists().notEmpty().withMessage('El age es obligatorio'),
  check('email').exists().notEmpty().withMessage('El email es obligatorio').isLength({ min: 3, max: 60 }).isEmail(),
  check('password').exists().notEmpty().withMessage('El password es obligatorio'),
  check('role').exists().notEmpty().withMessage('El role es obligatorio'),
];

const validatorGetItem = [
  check('id').exists().notEmpty(),
  (req, res, next) => {
    validationResults(req, res, next);
  },
];

export { validatorCreateItem, validatorUpdateItem, validatorGetItem };
