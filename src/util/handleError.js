const handleHttpError = (res, message = 'Algo está mal ', code = 403) => {
  res.status(code);
  res.send({ error: message });
};

export { handleHttpError };
