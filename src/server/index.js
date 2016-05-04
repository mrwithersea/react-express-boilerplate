import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import handlebars from 'express-handlebars';
import Config, { clientConfig } from 'server/Config.js';

import routes from 'server/routes';

let app = express();

app.engine('handlebars', handlebars());
app.set('views', `${Config.nodePath}/server/views/`);
app.set('view engine', 'handlebars');

app.use(express.static(`${Config.nodePath}/client/public/`, { redirect: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(clientConfig());

app.use(routes);

app.listen(Config.port);
