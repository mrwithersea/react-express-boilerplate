const Config = {
  nodePath: process.env.NODE_PATH,
  port: process.env.PORT,
  version: Math.random()
};

export function clientConfig() {
  return (req, res, next) => {
    res.locals.config = `window.__CONFIG__ = ${JSON.stringify(Config)};`;

    next();
  };
}

export default Config;
