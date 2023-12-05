import {User} from "../models";
import {db} from "../../../config";
import {logger} from "../../../utils";
// Database
// Models



/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
 */
const findUserByEmailService = async (
  email: string
): Promise<any> => {
  try {
    await db.connect();
    const user = await User.findOne({ email });
    await db.disconnect();

    return {
      user
    }
  } catch ( error ) {
    await db.disconnect();

    logger.consoleErrorsHandler( error, 'findUserByEmailService' );
  }
}

export default findUserByEmailService;
