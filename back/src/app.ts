import morgan from 'morgan';
import express from 'express'
import routes from './routes';
const server = express();

server.use(morgan('dev'));
// server.use(express.json());
server.use('/', routes)

export default server;

