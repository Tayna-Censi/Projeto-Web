import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { ApiError, InternalError, isApiError } from '../core/ApiError';
import { corsUrl, environment } from '../config';
import Logger from '../services/loggingService';

import apiRouter from './endpoints';

process.on('uncaughtException', (e) => {
  Logger.error(e);
  console.error(e);
});

const app = express();

// Limita tamanho do body das requisições para evitar ataque DDOS e consumo indevido de recursos.
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));

// Define rotas
app.use('/api', apiRouter);

// Middleware Error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (isApiError(err)) {
    ApiError.handle(err, res);
    Logger.error(err);
    console.error(err);
  } else {
    Logger.error(err);
    console.error(err);
    return res.status(500).send(err.message);
  }
});

export default app;
