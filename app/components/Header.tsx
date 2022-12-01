import { Transition } from "@headlessui/react";
import { Form, Link, NavLink, useLocation } from "@remix-run/react";
import { Fragment, useState } from "react";
import { Menu, Search, X } from "tabler-icons-react";

import { Button } from "~/components/primitives";
import AvatarMenu from "~/components/AvatarMenu";
import { classNames } from "~/lib/classNames";
import { useUserData } from "~/lib/hooks/useUserData";

interface HeaderLink {
  to: string;
  label: string;
  end?: boolean;
}

const mainLinks: HeaderLink[] = [{ to: "/page", label: "Page" }];

const avatarLinks: HeaderLink[] = [
  // { to: "/app", label: "Designs" },
  // { to: "/app/create", label: "Create" },
  { to: "/app/account", label: "Account" },
];

export default function Header({ fullWidth = false }: { fullWidth?: boolean }) {
  const { user } = useUserData();
  const location = useLocation();
  const [opened, setOpened] = useState<boolean>(false);
  const [searchOpened, setSearchOpened] = useState<boolean>(false);
  const finalLinks = mainLinks.concat(
    user
      ? [{ to: "/app", label: "My Designs", end: true }]
      : [{ to: "/login", label: "Login" }]
  );

  const searchEndpoint = location.pathname.includes("app")
    ? "/app"
    : "/explore";

  return (
    <>
      <header
        className={classNames(
          "container flex h-20 items-center px-4 relative z-50 lg:justify-between",
          "text-slate-800"
        )}
      >
        <div className="flex items-center lg:flex-shrink-0">
          <Link to="/" className="relative font-bold text-xl">
            <span>
              P <span className="text-emerald-600 font-black">/ T</span>
            </span>
          </Link>

          <nav className="hidden lg:flex lg:space-x-4 ml-8">
            {mainLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end ?? false}
                className={({ isActive }) =>
                  `transition-all duration-150 ${
                    isActive ? "font-black tracking-tighter" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {user && (
              <>
                <NavLink
                  to="/app"
                  className={({ isActive }) =>
                    `transition-all duration-150 ${
                      isActive ? "font-black tracking-tighter" : ""
                    }`
                  }
                  end={true}
                >
                  My Designs
                </NavLink>
                <NavLink
                  to="/app/create"
                  className={({ isActive }) =>
                    `transition-all duration-150 ${
                      isActive ? "font-black tracking-tighter" : ""
                    }`
                  }
                >
                  Create
                </NavLink>
              </>
            )}
          </nav>
        </div>

        {/* Mobile */}
        <div className="ml-auto flex lg:hidden">
          <button
            className="mr-4 h-9 w-9 rounded-full shadow-md border border-gray-200 flex items-center justify-center"
            onClick={() => setSearchOpened(true)}
          >
            <Search size={16} className="text-gray-800" strokeWidth={3} />
          </button>
          <button
            className="h-9 w-9 rounded-full shadow-md border border-gray-200 flex items-center justify-center"
            onClick={() => setOpened(true)}
          >
            <Menu size={16} className="text-gray-800" strokeWidth={3} />
          </button>
        </div>

        <div className="hidden lg:flex lg:justify-end">
          {/* Desktop */}
          <div className="hidden mr-4 w-full">
            <Form
              action={searchEndpoint}
              className="relative flex-1 lg:w-full lg:max-w-md mx-auto"
              onSubmitCapture={() => setSearchOpened(false)}
            >
              <input
                type="search"
                placeholder="Search..."
                name="q"
                className={classNames(
                  "pl-10 pr-4 h-10  rounded-full w-full shadow-md focus-within:border-none text-slate-800",
                  "bg-white/50"
                )}
              />
              <Search
                size={16}
                className="text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
                strokeWidth={3}
              />
            </Form>
          </div>

          {!user ? (
            <Button component={Link} variant="primary" to="/signup">
              Create Account
            </Button>
          ) : (
            <AvatarMenu links={avatarLinks} />
          )}
        </div>
        {/* End Desktop */}
      </header>

      <Transition appear as={Fragment} show={searchOpened}>
        <div className="flex h-20 items-center px-4 fixed top-0 inset-x-0 z-50">
          <Form
            action={searchEndpoint}
            className="flex-1 mr-4 focus:outline-emerald-600 focus:ring-emerald-600"
            onSubmitCapture={() => setSearchOpened(false)}
          >
            <input
              type="search"
              placeholder="Search..."
              name="q"
              className="px-4 h-10 bg-gray-200 rounded-full w-full shadow-md"
            />
          </Form>
          <button
            className="ml-auto h-9 w-9 rounded-full shadow-md border border-gray-200 flex items-center justify-center"
            onClick={() => setSearchOpened(false)}
          >
            <X size={16} className="text-gray-800" strokeWidth={3} />
          </button>
        </div>
      </Transition>

      <Transition appear as={Fragment} show={opened}>
        <div className="fixed inset-0 z-[999]">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"
              onClick={() => setOpened(false)}
            ></div>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-in-out transition-all duration-150"
            enterFrom="opacity-0 translate-y-1/2"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in-out transition-all duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1/2"
          >
            <div className="bg-white absolute bottom-0 rounded-t-3xl w-full p-12 shadow-2xl z-10">
              <nav className="flex flex-col space-y-8">
                {finalLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `text-xl ${isActive ? "font-black tracking-tighter" : ""}`
                    }
                    onClick={() => setOpened(false)}
                    end={link.end ?? false}
                  >
                    {link.label}
                  </NavLink>
                ))}
                {user && (
                  <NavLink
                    to="/create"
                    className={({ isActive }) =>
                      `text-xl ${isActive ? "font-black tracking-tighter" : ""}`
                    }
                    onClick={() => setOpened(false)}
                  >
                    Create
                  </NavLink>
                )}
                <Button component={Link} to="/signup" variant="primary">
                  Create Account
                </Button>
              </nav>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </>
  );
}
