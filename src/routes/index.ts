import { Router, response } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

routes.get('/', (req, resp) => resp.json({ message: 'aaaa' }));

export default routes;
