// Import required modules
import express, { Request, Response, NextFunction } from 'express';
import * as http from 'http';
import winston from 'winston';

// Create Express app
export const app = express();
const port = process.env.PORT || 3000;

// Configure Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

// Middleware for logging requests
app.use((req: Request, _res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Define a simple route
app.get('/', (_req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Handle 404 errors
app.use((_req: Request, res: Response) => {
  res.status(404).send('Not Found');
});

// Error handler middleware
app.use(
  (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    logger.error(err.stack);
    res.status(500).send('Internal Server Error');
  }
);

// Create HTTP server
const server = http.createServer(app);

// Listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.info('SIGTERM signal received. Closing server gracefully.');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});
