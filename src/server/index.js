import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

let app = express();

app.use(express.static('build/client/public/', { redirect: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use((req, res, next) => {

  res.send('working');

});

app.listen(process.env.PORT);
