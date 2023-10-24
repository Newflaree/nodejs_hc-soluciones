// ExpressJS
import {
  Request,
  Response
} from "express";
// Utils
import {logger} from "../../../utils";


/**
 * Handler description
 *
 * PATH: /api/...
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 *
 * @param { Object } req - The HTTP request object.
 * @param { Object } res - The HTTP response object.
 * @returns { void }
 */
const authLoginController = async (
  req: Request,
  res: Response 
): Promise<void> => {
  try {
    res.status( 200 ).json({
      ok: true,
      msg: 'authLoginController'
    });
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'authLoginController' );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Administrator'
    });
  }
}

export default authLoginController;
