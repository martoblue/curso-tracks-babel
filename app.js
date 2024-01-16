import express from 'express';
import cors from 'cors';
import config from './src/config/connection.js';
import { dbConnection, getConnection } from './src/database/dbConnection.js';
import router from './src/routes/index.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use((req, res, next) => {
  // Dominio que tengan acceso (ej. 'http://example.com')
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Metodos de solicitud que deseas permitir
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // Encabecedados que permites (ej. 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

const port = config.port || 3000;
const ver = config.version || '1.0.0';

app.use(`/api`, router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use('*', (req, res) => res.status(404).send('404 - Ruta no encontrada'));

// getConnection()
//   .then((connection) => {
//     console.log('Database connected');
//     console.log(connection);
//   })
//   .catch((error) => {
//     console.log('Database connection failed: ' + error);
//   });

dbConnection();
