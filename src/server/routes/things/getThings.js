import express from 'express';
import logMiddleware from 'server/middlewares/logMiddleware';
import renderMiddleware from 'server/middlewares/renderMiddleware';

const getThings = express.Router();

getThings.use(logMiddleware('GetThings'));
getThings.use(renderMiddleware('ListOfThings'));

export default getThings;
