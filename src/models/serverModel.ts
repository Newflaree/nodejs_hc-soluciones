// ExpressJS
import express, { Application } from 'express';
// Cors
import cors from 'cors';
// Interfaces
import { ApiPaths } from '../interfaces';
// Routes
import { authRoutes } from '../entities/routes';
// Utils
import { logger } from '../utils';

class Server {
  private app: Application;
  private port: string;
  private apiPaths: ApiPaths;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.apiPaths = {
      auth: '/api/auth'
    }

    // Initial methods
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use( cors() );
    this.app.use( express.json() );
  }

  routes() {
    this.app.use( this.apiPaths.auth, authRoutes );
  }

  listen() {
    this.app.listen( this.port, () => {
      logger.listenServerLogger( this.port );
    });
  }
}

export default Server;
