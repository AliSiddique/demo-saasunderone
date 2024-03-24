import getCurrentUser from "@/lib/User";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function NotFound() {
  const session = await getCurrentUser();
  return (
    <div>
      <div className="flex h-screen flex-col bg-white">
        <img
          src="https://images.unsplash.com/photo-1510133768164-a8f7e4d4e3dc?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-64 w-full object-cover"
        />

        <div className="flex flex-1 items-center justify-center">
          <div className="mx-auto max-w-xl px-4 py-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We can't find that page.
            </h1>

            <p className="mt-4 text-gray-500">
              Try searching again, or return home to start from the beginning.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
