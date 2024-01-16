import { validationResult } from 'express-validator';

const validationResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    next();
  } catch (err) {
    res.status(403);
    return res.send({ errors: err.array });
  }
};

export { validationResults };
