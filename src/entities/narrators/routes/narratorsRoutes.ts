// ExpressJS
import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import { findNearbyNarratorsController } from '../controllers';
// Middlewares
import { validateFields } from '../../../middlewares';


const router: Router = Router();

// PATH: /api/narrators/find-nearby-narrators
router.post( '/find-nearby-narrators', [
  check( 'latitude', 'La Latitud en requerida' ).not().isEmpty(),
  check( 'longitude', 'La Longitud en requerida' ).not().isEmpty(),
  validateFields
], findNearbyNarratorsController );

// PATH: /api/narrators
router.get( '/' );

// PATH: /api/narrators/:id
router.get( '/:id' );


export default router;
