import dotenv from 'dotenv';
dotenv.config();

import 'module-alias/register';
import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import routes from './routes/index.route';
import { CORS_ORIGIN } from './config/config';
import {
  databaseConnect,
  handleDatabaseConnectionError,
} from './database/index';
import logger from './config/logger';

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.initializeMiddleware();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddleware() {
    this.app.use(express.json({ limit: '16kb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '16kb' }));
    this.app.use(
      cors({
        origin: CORS_ORIGIN,
        credentials: true,
      })
    );
    this.app.use(express.static('public'));
    this.app.use(cookieParser());
  }

  private initializeRoutes() {
    this.app.use('/api', routes);
  }

  private initializeErrorHandling() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: express.NextFunction) => {
        logger.error(`Internal Server Error: ${err.message}`);
        res.status(500).send(`Internal Server Error: ${err.message}`);
      }
    );
  }

  public async connectToDatabase() {
    try {
      await databaseConnect();
    } catch (error) {
      handleDatabaseConnectionError(error);
      throw new Error('Database connection failed');
    }
  }

  public getApp() {
    return this.app;
  }
}

const server = new Server();

if (process.env.NODE_ENV !== 'production') {
  server.connectToDatabase()
    .then(() => {
      server.getApp().listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
      });
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
}

export default server.getApp();  
