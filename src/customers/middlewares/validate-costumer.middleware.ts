import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('hello world, middleware costumer');
    const { authorization } = req.headers;
    if (!authorization)
      return res
        .status(403)
        .send({ error: 'No authentication token provided' });

    if (authorization === 'teste') next();
    else
      return res
        .status(403)
        .send({ error: 'Invalid token authorization provided' });
  }
}
