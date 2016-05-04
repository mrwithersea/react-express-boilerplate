import express from 'express';
import getThings from 'server/routes/things/getThings';
import getAThing from 'server/routes/things/getAThing';

const things = express.Router();

things.get('/', getThings);
things.get('/:id', getAThing);

export default things;
