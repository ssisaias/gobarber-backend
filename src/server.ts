import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import './database/index';
import uploadConfig from './config/upload';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory)); // servindo arquivos estaticos
app.use(routes);

app.listen(3333, () => {
  console.log('🚀, server started;');
});
