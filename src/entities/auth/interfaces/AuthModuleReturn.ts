import { UserProps } from './UserProps';

export interface AuthMoludeReturn{
  statusCode: number;
  ok: boolean;
  message?: string;
  User?: UserProps;
  token?: unknown | undefined;
  error?: unknown;
}
