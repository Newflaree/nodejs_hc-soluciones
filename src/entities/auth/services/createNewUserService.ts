// Database
import { db } from '../../../config';
// Models
import { User } from '../models';
// Interface
import { BodyUserData, UserProps } from '../interfaces';
// Utils
import { logger } from '../../../utils';


/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
 */
const createNewUserService = async (
  userData: BodyUserData | any
): Promise<UserProps | undefined | any> => {
  try {
    const newUser = new User( userData );

    await db.connect();
    await newUser.save();
    await db.disconnect();

    return newUser
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'createNewUserService' );
  }
}

export default createNewUserService;
