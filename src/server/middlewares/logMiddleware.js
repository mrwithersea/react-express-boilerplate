function logMiddleware(msg) {
  return (req, res, next) => {
    console.log(msg);

    next();
  };
}

export default logMiddleware;
