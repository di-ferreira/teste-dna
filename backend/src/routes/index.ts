import { Router } from 'express';

import sessionsRoutes from './session.routes';
import usersRoutes from './users.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
