// ExpressJS
import express, { Application } from 'express';
// Cors
import cors from 'cors';
// Interfaces
import { ApiPaths } from '../interfaces';
// Routes
import {
  authRoutes,
  narratorsRoutes,
  seedRoutes
} from '../entities/routes';
// Utils
import { logger } from '../utils';


class Server {
  private app: Application;
  private port: string;
  private apiPaths: ApiPaths;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3002';
    this.apiPaths = {
      auth: '/api/auth',
      narrators: '/api/narrators',
      seed: '/api/seed'
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
    this.app.use( this.apiPaths.narrators, narratorsRoutes );
    this.app.use( this.apiPaths.seed, seedRoutes );
  }

  listen() {
    this.app.listen( this.port, () => {
      logger.listenServerLogger( this.port );
    });
  }
}

export default Server;
