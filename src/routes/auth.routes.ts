import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const routes = Router();
const api = '/api';
const resourceUrl = api + '/auth';

routes.post(`${resourceUrl}/google`, AuthController.loginWithGoogle);

export default routes;
