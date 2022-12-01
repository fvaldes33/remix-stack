import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <main className="bg-gray-100 h-screen w-screen flex flex-col items-center justify-center px-2">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
        Designed <span className="text-indigo-600 font-black">/ AI</span>
      </h1>
      <div className="w-full max-w-screen-md rounded-xl shadow-2xl bg-white border border-gray-200">
        <Outlet />
      </div>
    </main>
  );
}
