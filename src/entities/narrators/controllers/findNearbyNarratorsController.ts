// ExpressJS
import {
  Request,
  Response
} from 'express';
// Modules
// Utils
import { logger } from '../../../utils';
import {User} from '../../auth/models';
import {db} from '../../../config';


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
const findNearesNarratorsController = async (
  req: Request,
  res: Response 
): Promise<void> => {
  try {
    const { longitude, latitude } = req.body;

    const location = {
      type: 'Point',
      coordinates: [latitude, longitude]
    }

    await db.connect();
    const narrators = await User.find({
      role: 'NARRATOR_ROLE',
      location: { $near: location }
    }).exec();
    await db.disconnect();

    res.status( 200 ).json({
      ok: true,
      narrators
    });
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'findNearesNarratorsController' );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Administrator'
    });
  }
}

export default findNearesNarratorsController;
