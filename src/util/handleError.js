function handleHttpError(res, message = 'Algo está mal ', code = 403) {
  // 403 Forbidden
  // 404 Not Found
  // 500 Internal Server Error

  res.status(code).send({ error: message });
}

export { handleHttpError };
