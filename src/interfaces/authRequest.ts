import { Request } from 'express';


export interface LoggedUserReq extends Request {
  user?: any
}
