import { redirect } from "next/navigation";
import getCurrentUser from "./User";

export default async function ProtectedRoute() {
  const user = await getCurrentUser();
  if (!user) {
    return redirect("/login");
  }
}
