import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

class AuthController {
  public loginWithGoogle = (req: Request, res: Response) => {
    console.log('REQ: ', req.body.idToken);
    console.log('VERIFY: ', jwt.verify(req.body.idToken, '7oToOjQsyPxU0hbwd0JL9-a_', {
      algorithms: ['RS256']
    }));
    res.status(200).json('');
  }
}

export default new AuthController();
