import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import handlebars from 'express-handlebars';

let app = express();

app.engine('handlebars', handlebars({ defaultLayout: 'main', layoutsDir: `${process.env.NODE_PATH}/server/views/layouts/` }));
app.set('views', `${process.env.NODE_PATH}/server/views/`);
app.set('view engine', 'handlebars');

app.use(express.static(`${process.env.NODE_PATH}/client/public/`, { redirect: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use((req, res, next) => {

  res.render('app', {
    app: 'Hello world'
  });

});

app.listen(process.env.PORT);
