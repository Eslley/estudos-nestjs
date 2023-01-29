import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Validate account middlewate');
    const { valid } = req.headers;
    if (valid) next();
    else res.status(401).send({ error: 'Account is invalid' });
  }
}
