// ExpressJS
import { Request } from 'express';
// DB Config
import { db } from '../../../config';
// Models
import { User } from '../models';
import {checkEmailService} from '../services';

const authRegisterModule = async ( req: Request ) => {
  const {
    name,
    email,
    password,
  } = req.body;

  const newUserData = {
    name,
    email,
    password
  };

  try {
    // TODO: Check if email exists
    const emailExists = await checkEmailService( email );

    if ( emailExists ) return {
      statusCode: 400,
      ok: false,
      message: 'El correo ya existe'
    }

    // TODO: Encrypt password
    // TODO: Save to DB
    // TODO: Geerate JWT

    const newUser = new User( newUserData );

    return {
      statusCode: 201,
      ok: true,
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
