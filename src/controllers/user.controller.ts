import {Request, Response} from 'express';
import { ConvertToEntity } from '../utils/convert-to-entity';
import { User } from '../Models/user.model';
import { Repositories } from '../repository/repositories';
export class UserController {
  constructor() { }

  public createUser = async (req: Request, res: Response) => {
    const user = ConvertToEntity.convert<User>(req.body);

    try {
      const userSaved = await Repositories.getRepository<User>(User).save(user);
      res.status(201).json(userSaved);
    } catch (e) {
      console.trace(e);
      res.status(500).json(e);
    }
  }
}
