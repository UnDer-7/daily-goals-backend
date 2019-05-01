import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { config } from './config/database.config';
import { ConsoleColors } from './utils/console.colors';
import authRoutes from './routes/auth.routes';
import { GoogleStrategy } from './passaport/google.strategy';
import helmet = require('helmet');

class Server {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.startDatabase();
    this.initializeStrategies();
    this.middleware();
    this.routes();
  }

  private async startDatabase(): Promise<void> {
    try {
      await createConnection(config);
      console.log(ConsoleColors.FgGreen, '\nSuccessfully connected to the Database\n')
    } catch (e) {
      console.log(ConsoleColors.FgRed, '\nUnable to connect to the Database\n');
      console.trace(e);
    }
  }

  private initializeStrategies(): void {
    GoogleStrategy.strategy();
  }

  private middleware(): void {
    this.express.use(helmet());
    this.express.use(cors({
      origin: 'http://localhost:4200'
    }));
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use([
      authRoutes
    ])
  }
}

export default new Server().express;
