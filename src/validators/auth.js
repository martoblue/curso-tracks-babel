import { check } from 'express-validator';
import { validationResults } from '../util/handleValidator';

const validatorLogin = [
  check('email').exists().notEmpty().isLength({ min: 3, max: 60 }).isEmail(),
  check('password').exists().notEmpty(),

  (req, res, next) => {
    validationResults(req, res, next);
  },
];

module.exports = { validatorLogin };
