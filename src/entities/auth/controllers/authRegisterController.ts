// Express
import { Request, Response } from 'express';
// Modules
import { authRegisterModule } from '../modules';
// Utils
import { logger } from '../../../utils';


/**
 * Handler description
 *
 * PATH: /api/auth/register
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 *
 * @param { Object } req - The HTTP request object.
 * @param { Object } res - The HTTP response object.
 * @returns { void }
 */
const authRegisterController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      ok,
      message,
      error,
    } = await authRegisterModule( req );

    res.status( 201 ).json({
      ok,
      message,
      error
    });

  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'authRegisterController' );

    res.status( 500 ).json({
      ok: false,
      message: 'Something went wrong. Talking the Administrator'
    });
  }
}

export default authRegisterController;
