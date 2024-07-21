import Link from "next/link";
import { headers } from "next/headers";

export default function NotFound() {
  return (
    <div className=" bg-blue-200  content-center w-auto h-screen flex items-center justify-center gap-2">
      <h2>Page Not Found !</h2>
      <Link
        href="/"
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Return Home
      </Link>
    </div>
  );
}
