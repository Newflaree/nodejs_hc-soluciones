export interface UserProps {
  name: string;
  email: string;
  password: string;
  img?: string;
  location: Location;
  tags?: String[];
  role: Roles;
  isBlocked: boolean;
  isGoogle: boolean;
  isFacebook: boolean;
  isApple: boolean;
  applicationStatus: any;
}

interface Location {
  latitude: number;
  longitude: number;
};


type Roles = 'USER_ROLE' | 'NARRATOR_ROLE' | 'ADMIN_ROLE';
