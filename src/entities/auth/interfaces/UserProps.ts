export interface UserProps {
  name: string;
  email: string;
  password: string;
  img?: string;
  role: Roles;
  google: boolean;
  apple: boolean;
  isActive: boolean;
}


type Roles = 'USER_ROLE' | 'ADMIN_ROLE'
