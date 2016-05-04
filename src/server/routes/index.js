import express from 'express';
import things from 'server/routes/things';

const routes = express.Router();

routes.use('/things', things);

export default routes;
