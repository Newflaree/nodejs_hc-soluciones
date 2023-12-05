// ExpressJS
import {
  Request,
  Response
} from "express";
// Utils
import {logger} from "../../../utils";
import authLoginModule from "../modules/authLoginModule";


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
    const {
      statusCode,
      ok,
      message,
      user,
      token
    } = await authLoginModule( req )

    res.status( statusCode ).json({
      ok,
      message,
      user,
      token
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
