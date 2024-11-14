import { User } from "@/types/RootState";

interface BackendUser {
  _id: string;
  username: string;
  email: string;
  number: string;
  createdAt: string;
}

export function mapBackendUserToFrontend(backendUser: BackendUser): User {
  return {
    email: backendUser.email,
    name: backendUser.username,
    phoneNumber: backendUser.number,
  };
}
