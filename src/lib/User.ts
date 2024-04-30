import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}
export default async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session?.user as User;
}
