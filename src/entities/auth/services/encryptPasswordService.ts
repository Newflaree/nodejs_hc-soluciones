// Bcryptjs
import bcrypt from 'bcryptjs';
// Interfaces
import { BodyUserData} from '../interfaces';
// Utils
import { logger } from '../../../utils';


/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
 */
const encryptPasswordService = async (
  userData: BodyUserData
): Promise<BodyUserData | undefined> => {
  try {
    const salt = bcrypt.genSaltSync();

    return {
      ...userData,
      password: bcrypt.hashSync( userData.password, salt )
    };

  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'encryptPasswordService' );
  }
}

export default encryptPasswordService;
