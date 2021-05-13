import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(routes);

let port = 3333;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});