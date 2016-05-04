import express from 'express';
import logMiddleware from 'server/middlewares/logMiddleware';
import renderMiddleware from 'server/middlewares/renderMiddleware';

const getAThing = express.Router({ mergeParams: true });

getAThing.use(logMiddleware('GetAThing'));
getAThing.use(renderMiddleware('AThing'));

export default getAThing;
