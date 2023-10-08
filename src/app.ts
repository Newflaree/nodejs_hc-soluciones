export * from 'colors';
import dotenv from 'dotenv';
// Models
import { Server } from './models';

dotenv.config();

// Init Server
const server = new Server();
server.listen();
