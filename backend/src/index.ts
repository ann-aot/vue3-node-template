import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { router as healthRouter } from './routes/health';
import { router as exampleRouter } from './routes/example';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/health', healthRouter);
app.use('/api', exampleRouter);

const swaggerDocument = YAML.load(__dirname + '/openapi.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const port = Number(process.env.PORT || 3000);
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

export default app;
