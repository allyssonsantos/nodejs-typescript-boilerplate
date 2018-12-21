import express from "express";
import routes from './routes';

const app = express();

app.use(routes);

app.get('/', (_, res) => res.send('go to /example'));

export default app;