import { Request, Response } from 'express';

export const userController = (req: Request, res: Response): void => {
    res.send([
        {
            name: "Rafael",
            lastName: "Nascimento",
            birthday: "2002-06-16"
        }
    ]);
};
