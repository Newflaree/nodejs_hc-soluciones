// ExpressJS
import { Request } from 'express';
// DB Config
import { db } from '../../../config';
// Interfaces
// Services
// Utils


// TODO: Write doc for login module
const authLoginModule = async (
  req: Request
  // TODO: Added auth login response interface
): Promise<any> => {
  // TODO: Defined body parameters for this module

  try {
    // TODO: Check if user exists
    // TODO: Check if user is active
    // TODO: Check if password is valid
    // TODO: Genreate JsonWebToken
    // TODO: Return { statusCode, ok, validUser, jwt }
  } catch ( error ) {
    await db.disconnect();

    // TODO: Return possible errors
  }
}

export default authLoginModule;
