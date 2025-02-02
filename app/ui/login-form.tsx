"use client";
import { Button } from "./button";
import { authenticate } from "@/lib/action/form";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [error, formAction] = useFormState(authenticate, undefined);
  return (
    <form action={formAction} className="space-y-3 mb-28">
      <div className="flex-1 m-auto rounded-lg bg-gray-50 px-6 pb-4 pt-8 w-80">
        <h1 className={`mb-3 text-2xl`}>Please log in to continue.</h1>
        <div className="">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
          {/* aria-disabled={isPending} */}
          <Button type="submit" className="ml-24 mt-4 w-24">
            Login
          </Button>
        </div>
        <div className="flex h-8 items-end space-x-1">
          {error && (
            <>
              <p className="text-sm text-red-500">{error}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
