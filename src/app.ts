import express, { Application } from 'express';

const startServer = async () => {
  const app: Application = express();

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
};

startServer();
