// ExpressJS
import {
  NextFunction,
  Response
} from 'express';
// JsonWebToken
import jwt from 'jsonwebtoken';
// Interfaces
import { LoggedUserReq } from '../interfaces';
// Models
import { User } from '../entities/auth/models';
// Utils
import { logger } from '../utils';


export const validateJWTMiddleware = async (
  req: LoggedUserReq,
  res: Response,
  next: NextFunction
) => {
  const token = req.header( 'x-token' );

  if ( !token ) return res.status( 401 ).json({
    ok: false,
    message: 'No hay token en la petición'
  });

  try {
    const { uid }: any  = jwt.verify( token, process.env.SECRET_KEY || '' );
    const user = await User.findById({ id: uid }) || { isBlocked: true };

    if ( !user || !!user.isBlocked ) return res.status( 401 ).json({
      ok: false,
      message: 'Token inválido'
    });

    req.user = user;
    next();

  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'validateJWTMiddleware' )
    res.status( 401 ).json({
      ok: false,
      message: 'Token inválido'
    });
  }
}
