import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(routes);

app.get('/', (_, res) => res.send('go to /example'));

export default app;
