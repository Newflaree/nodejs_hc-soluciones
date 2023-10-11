import { UserProps } from './UserProps';

export interface AuthMoludeReturn{
  statusCode: number;
  ok: boolean;
  message?: string;
  newUser?: UserProps;
  token?: unknown | undefined;
  error?: unknown;
}
