import { Document, Model } from 'mongoose';


interface Location {
  latitude: number;
  longitude: number;
};

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

export interface UserDocument extends Document, UserProps {}

export interface UserModel extends Model<UserDocument> {
  findNearestNarrators( latitude: number, longitude: number ): Promise<UserDocument[]>
}

type Roles = 'USER_ROLE' | 'NARRATOR_ROLE' | 'ADMIN_ROLE';
