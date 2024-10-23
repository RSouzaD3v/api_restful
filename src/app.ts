import express from 'express';

import userRouter from "./routes/userRouter.js";
const app = express();
const port = 3000;

app.use('/users', userRouter);

app.listen(port, () => {
    console.log("Servidor rodando na porta ${port}");
});