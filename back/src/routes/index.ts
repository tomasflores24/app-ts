import routerRoute from './contries-route';
import express from 'express';
const routes = express.Router();

routes.use('/countries', routerRoute);

export default routes;