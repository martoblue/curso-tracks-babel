import { check } from 'express-validator';
import { validationResults } from '../util/handleValidator.js';

const validatorGetItem = [
  check('id').exists().notEmpty(),
  (req, res, next) => {
    validationResults(req, res, next);
  },
];

export { validatorGetItem };
