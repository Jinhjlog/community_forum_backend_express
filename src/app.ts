import express, { Application } from 'express';
import { userRouter } from './modules/users/route';

const startServer = async () => {
  const app: Application = express();

  const port = process.env.PORT || 3000;

  const router = express.Router();
  router.use('/users', userRouter);

  app.use('/api', router);

  app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
};

startServer();
