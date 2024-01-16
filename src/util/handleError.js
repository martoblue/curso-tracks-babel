const handleHttpError = (res, message = 'Algo está mal ', code = 403) => {
  res.send({ error: message, code: code });
};

export { handleHttpError };
