// ExpressJS
import { Request } from 'express';
// DB Config
import { db } from '../../../config';
// Interfaces
import { AuthMoludeReturn } from '../interfaces';
// Services
import {
  checkEmailService,
  createNewUserService,
  encryptPasswordService
} from '../services';
// Utils
import { generateJWT } from '../../../utils';


// TODO: Write Doc for this authRegisterModule
const authRegisterModule = async (
  req: Request
): Promise<AuthMoludeReturn> => {
  const {
    name,
    email,
    password,
  } = req.body;

  try {
    // Check if email exists
    const emailExists = await checkEmailService( email );

    if ( emailExists ) return {
      statusCode: 400,
      ok: false,
      message: 'Este correo electrónico ya está registrado'
    }

    // Encrypt password
    const newUserData = await encryptPasswordService({
      name,
      email,
      password
    });

    // Create new User
    const newUser = await createNewUserService( newUserData );

    // implementate GeerateJWT
    const token = await generateJWT( newUser._id );

    return {
      statusCode: 201,
      ok: true,
      newUser,
      token
    }
  
  } catch ( error ) {
    await db.disconnect();

    return {
      statusCode: 400,
      ok: false,
      error: error
    }
  }
}

export default authRegisterModule;
