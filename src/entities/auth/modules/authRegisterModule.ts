// ExpressJS
import { Request } from 'express';

const authRegisterModule = async ( req: Request ) => {
  try {
    return {
      ok: true,
      message: 'authRegisterModule'
    }
  
  } catch ( error ) {
    return {
      ok: false,
      error: error
    }
  }
}

export default authRegisterModule;
