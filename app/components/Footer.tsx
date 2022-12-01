import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-24">
      <div className="container mx-auto">
        <div>
          <Link to="/" className="font-bold text-xl">
            Designed <span className="text-indigo-600 font-black">/ AI</span>
          </Link>
          <nav className="flex mt-2 divide-x-2 -mx-2">
            <Link className="px-2" to="/explore">
              Explore
            </Link>
            <Link className="px-2" to="/login">
              Login
            </Link>
            <Link className="px-2" to="/privacy">
              Privacy
            </Link>
            <Link className="px-2" to="/terms">
              Terms
            </Link>
            <Link className="px-2" to="/returns">
              Returns
            </Link>
          </nav>
          <p className="mt-4">
            &copy; 2022 designedwithai.com &mdash; All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
