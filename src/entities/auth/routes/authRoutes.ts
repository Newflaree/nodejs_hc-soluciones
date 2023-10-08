// ExpressJS
import { Router } from 'express';
// Controllers
import { authRegisterController } from '../controllers';

const router: Router = Router();

router.post( '/register', [
], authRegisterController );

router.post( '/login' );


export default router;
