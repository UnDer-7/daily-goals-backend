import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import { authenticate } from 'passport';

const routes = Router();
const api = '/api';
const resourceUrl = api + '/auth';

routes.get(`${resourceUrl}/google`, authenticate('google', {
  session: false,
  scope: ['profile'],
}));

export default routes;
