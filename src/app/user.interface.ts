export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: 'user' | 'admin'; // Role can be 'user' or 'admin'
  password?: string; // Optional for cases where the password is not needed
  createdAt?: Date; // Optional, can be used for tracking user creation time
  updatedAt?: Date; // Optional, can be used for tracking user updates
}
