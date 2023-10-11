// ExpressJS
import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import { authRegisterController } from '../controllers';
// Middlewares
import { validateFields } from '../../../middlewares';


const router: Router = Router();

router.post( '/register', [
  check( 'name', 'El nombre es un campo requerido' ).not().isEmpty(),
  check( 'email', 'La dirección de correo es un campo requerido' ).isEmail(),
  check( 'password', 'La contraseña debe ser de mínimo 6 carácteres' ).isLength({ min: 6 }),
  validateFields
], authRegisterController );


// TODO: Implenentate login module
router.post( '/login' );


export default router;
